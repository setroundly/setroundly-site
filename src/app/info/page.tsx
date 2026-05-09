"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPublishedLiveEvents } from "@/data/liveEvents";

type FormErrors = {
  eventId?: string;
  name?: string;
  tickets?: string;
};

export default function InfoPage() {
  const [now, setNow] = useState<Date>(() => new Date());
  const events = useMemo(() => getPublishedLiveEvents(now), [now]);
  const [eventId, setEventId] = useState(events[0]?.id ?? "");
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("1");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!eventId && events[0]) {
      setEventId(events[0].id);
    } else if (eventId && !events.find((event) => event.id === eventId)) {
      setEventId(events[0]?.id ?? "");
    }
  }, [events, eventId]);

  const selectedEvent = useMemo(() => events.find((event) => event.id === eventId), [events, eventId]);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!eventId) nextErrors.eventId = "公演日を選択してください。";
    if (!name.trim()) nextErrors.name = "お名前を入力してください。";
    if (!tickets) nextErrors.tickets = "チケット枚数を選択してください。";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validate()) return;

    try {
      setStatus("submitting");
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, name, tickets, message })
      });

      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(json.error ?? "送信に失敗しました。");
      }

      setStatus("success");
      setStatusMessage("送信完了しました。予約内容を受付メールにお届けしました。");
      setName("");
      setTickets("1");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "送信に失敗しました。");
    }
  };

  return (
    <main className="bg-white">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/" className="block">
          <Image
            src="/images/setroundly-logo.png"
            alt="SETROUNDLY logo"
            width={220}
            height={48}
            className="h-auto w-[165px] sm:w-[210px]"
            priority
          />
        </Link>
        <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
          TOPへ戻る
        </Link>
      </header>

      <section className="mx-auto w-full max-w-3xl border-t border-slate-200 px-5 py-10 sm:px-8">
        <h1 className="font-[var(--font-orbitron)] text-3xl tracking-[0.08em]">INFO</h1>
        <p className="mt-3 text-sm text-slate-600">
          ライブ予約フォームです。入力内容は運営メールへ直接送信されます。
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm text-slate-700">
              予約希望の公演日 <em className="ml-1 rounded bg-sky-50 px-1.5 py-0.5 not-italic text-xs text-sky-700">必須</em>
            </span>
            <select
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-400 disabled:bg-slate-50"
              required
              disabled={events.length === 0}
            >
              {events.length === 0 ? (
                <option value="">公開中の公演がありません</option>
              ) : (
                events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.dateLabel} / {event.venue}
                  </option>
                ))
              )}
            </select>
            {errors.eventId && <p className="mt-1 text-xs text-rose-500">{errors.eventId}</p>}
          </label>

          <label className="block">
            <span className="text-sm text-slate-700">
              お名前 <em className="ml-1 rounded bg-sky-50 px-1.5 py-0.5 not-italic text-xs text-sky-700">必須</em>
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-400"
              required
            />
            {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
          </label>

          <label className="block">
            <span className="text-sm text-slate-700">
              チケット枚数 <em className="ml-1 rounded bg-sky-50 px-1.5 py-0.5 not-italic text-xs text-sky-700">必須</em>
            </span>
            <select
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-sky-400"
              required
            >
              {[1, 2, 3, 4, 5].map((count) => (
                <option key={count} value={String(count)}>
                  {count}枚
                </option>
              ))}
            </select>
            {errors.tickets && <p className="mt-1 text-xs text-rose-500">{errors.tickets}</p>}
          </label>

          <label className="block">
            <span className="text-sm text-slate-700">お問い合わせ</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-400"
              placeholder="ご質問やご要望があればご記入ください。"
            />
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full border border-slate-300 px-6 py-2 text-sm transition hover:border-sky-500 hover:text-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "送信中..." : "送信する"}
            </button>
            {selectedEvent && (
              <p className="text-xs text-slate-500">
                選択中: {selectedEvent.dateLabel} / {selectedEvent.venue}
              </p>
            )}
          </div>

          {statusMessage && (
            <div
              className={`rounded-xl border px-4 py-3 text-sm ${
                status === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-rose-200 bg-rose-50 text-rose-700"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
