import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getPublishedLiveEvents } from "@/data/liveEvents";

export const runtime = "nodejs";

const contactMail = "setroundly.info@gmail.com";

type ReservationBody = {
  eventId?: string;
  name?: string;
  tickets?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReservationBody;

    const eventId = (body.eventId ?? "").trim();
    const name = (body.name ?? "").trim();
    const tickets = (body.tickets ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!eventId || !name || !tickets) {
      return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
    }

    const event = getPublishedLiveEvents().find((item) => item.id === eventId);
    if (!event) {
      return NextResponse.json({ error: "公演日の選択が不正です。" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";
    const from = process.env.SMTP_FROM ?? user;

    if (!host || !user || !pass || !from) {
      return NextResponse.json(
        { error: "メール送信設定が未完了です。環境変数(SMTP_*)を設定してください。" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    await transporter.sendMail({
      from,
      to: contactMail,
      subject: `【SETROUNDLY予約】${event.dateLabel} ${event.venue}`,
      text: [
        "SETROUNDLY 予約フォームからの送信",
        "",
        `公演日: ${event.dateLabel} / ${event.venue}`,
        `公演タイトル: ${event.title}`,
        `お名前: ${name}`,
        `チケット枚数: ${tickets}枚`,
        "",
        "お問い合わせ内容:",
        message || "(記入なし)"
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 500 });
  }
}
