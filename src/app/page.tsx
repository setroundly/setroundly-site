import Image from "next/image";
import Link from "next/link";
import { liveEvents } from "@/data/liveEvents";

const snsLinks = [
  {
    name: "X",
    href: "https://x.com/set_roundly",
    className: "hover:border-slate-500 hover:bg-slate-100 hover:text-slate-800"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/setroundly_official/",
    className: "hover:border-fuchsia-200 hover:bg-fuchsia-50 hover:text-fuchsia-500"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@seiroundly",
    className: "hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@setroundlyshima",
    className: "hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-600"
  },
  {
    name: "TUNECORE",
    href: "https://www.tunecore.co.jp/artists/setroundly2?lang=en",
    className: "hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
  },
  {
    name: "BASE SHOP",
    href: "https://setroundly.base.shop/",
    className: "hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
  }
];

function SnsIcon({ name }: { name: string }) {
  const baseClass = "h-4 w-4";

  if (name === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={baseClass} fill="currentColor">
        <path d="M18.9 2H22l-6.9 7.9L23 22h-6.2l-4.8-7.3L5.7 22H2.6l7.4-8.5L1 2h6.3l4.3 6.8L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={baseClass} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={baseClass} fill="currentColor">
        <path d="M22 12c0-2.2-.2-3.7-.6-4.5a3 3 0 0 0-2-1.7c-1.7-.5-7.4-.5-7.4-.5s-5.7 0-7.4.5a3 3 0 0 0-2 1.7C2.2 8.3 2 9.8 2 12s.2 3.7.6 4.5a3 3 0 0 0 2 1.7c1.7.5 7.4.5 7.4.5s5.7 0 7.4-.5a3 3 0 0 0 2-1.7c.4-.8.6-2.3.6-4.5Zm-12.3 3.5V8.5l6 3.5-6 3.5Z" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={baseClass} fill="currentColor">
        <path d="M14.5 3h3a5 5 0 0 0 3.5 3.5V10a8.1 8.1 0 0 1-3.5-1v5.8A6.8 6.8 0 1 1 10.7 8h.2v3.1h-.2a3.7 3.7 0 1 0 3.8 3.7V3Z" />
      </svg>
    );
  }

  if (name === "TUNECORE") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={baseClass} fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="8" cy="16.5" r="2.5" />
        <path d="M10.5 16.5V6l8-1.5v3.1l-5 1v7.9" />
        <circle cx="16.2" cy="16.5" r="2.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={baseClass} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 7h12l-1 12H7L6 7Z" />
      <path d="M9 7a3 3 0 1 1 6 0" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="block">
          <Image
            src="/images/setroundly-logo.png"
            alt="SETROUNDLY logo"
            width={230}
            height={52}
            className="h-auto w-[170px] sm:w-[220px]"
            priority
          />
        </Link>
        <nav className="flex gap-5 text-sm text-slate-600">
          <Link href="#live" className="hover:text-slate-900">
            LIVE
          </Link>
          <Link href="#sns" className="hover:text-slate-900">
            SNS
          </Link>
          <Link href="/info" className="hover:text-slate-900">
            INFO
          </Link>
        </nav>
      </header>

      <section className="relative">
        <div className="relative h-[58vh] min-h-[420px] w-full sm:h-[72vh]">
          <Image
            src="/images/setroundly-cover.png"
            alt="SETROUNDLY cover"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-6xl px-5 pb-10 text-white sm:px-8 sm:pb-14">
            <p className="text-xs uppercase tracking-[0.24em] text-white/90">Official Website</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">SETROUNDLY</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/fZOFS-KTIV8"
              title="SETROUNDLY YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-14 pt-8 sm:px-8 sm:pt-10">
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          2012年結成。「人と人との間に起こること。」をテーマに、ボーカル島﨑の描く繊細で短編小説のような楽曲が広い世代の支持を受ける。
          2018年には日本を代表する野外フェス「JAPAN JAM」にオープニングアクトとして出演。メンバーチェンジを繰り返しながらもコンスタントに作品をリリース。
          2021年5月より現在のソロ体制に移行。
        </p>
      </section>

      <section id="live" className="mx-auto w-full max-w-6xl border-t border-slate-200 px-5 py-12 sm:px-8">
        <h2 className="font-[var(--font-orbitron)] text-2xl tracking-[0.1em]">LIVE INFORMATION</h2>
        {liveEvents.map((event) => (
          <article key={event.id} className="mt-8 border-b border-slate-200 pb-8 text-slate-800">
            <p className="text-sm tracking-[0.08em] text-slate-500">{event.dateLabel}</p>
            <h3 className="mt-1 text-xl">{event.venue}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{event.title}</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {event.artists.map((artist) => (
                <span key={artist}>
                  {artist}
                  <br />
                </span>
              ))}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {event.openStart}
              <br />
              {event.price}
              <br />
              {event.streamingPrice}
            </p>
            <p className="mt-4 text-sm text-slate-600">{event.note}</p>
            <a
              href={event.streamingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full border border-slate-300 px-5 py-2 text-sm transition hover:border-sky-500 hover:text-sky-600"
            >
              配信チケット購入URL
            </a>
          </article>
        ))}
      </section>

      <section id="sns" className="mx-auto w-full max-w-6xl border-t border-slate-200 px-5 py-12 sm:px-8">
        <h2 className="font-[var(--font-orbitron)] text-2xl tracking-[0.1em]">SNS</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {snsLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm transition ${link.className}`}
            >
              <SnsIcon name={link.name} />
              {link.name}
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-7 text-center text-xs text-slate-500 sm:px-8">
        © SETROUNDLY
      </footer>
    </main>
  );
}
