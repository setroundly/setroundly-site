export type LiveEvent = {
  id: string;
  eventDate: string;
  dateLabel: string;
  venue: string;
  title: string;
  artists: string[];
  openStart: string;
  price: string;
  streamingPrice?: string;
  streamingUrl?: string;
  ticketUrl?: string;
  timetableImage?: string;
  note: string;
  publishAt?: string;
};

export const liveEvents: LiveEvent[] = [
  {
    id: "2026-06-06-asagaya-lonesome",
    eventDate: "2026-06-06",
    dateLabel: "6.6(土)",
    venue: "阿佐ヶ谷ロンサム",
    title: "『Acoustic!!』Oh my! 1st FULL ALBUM「Doodle」RELEASE TOUR",
    artists: ["19:00 SETROUNDLY", "19:50 市原マサヒロ", "20:40 Oh my!"],
    openStart: "OPEN 18:30／START 19:00",
    price: "TICKET ¥3,000(+1Drink ¥600)",
    streamingPrice: "配信 ¥2,500",
    streamingUrl: "https://premier.twitcasting.tv/lonesome_live/shopcart/433859",
    ticketUrl: "https://tiget.net/events/488723",
    note: "",
    publishAt: "2026-05-10T14:30:00+09:00"
  },
  {
    id: "2026-07-09-laguna",
    eventDate: "2026-07-09",
    dateLabel: "7.9(木)",
    venue: "下北沢Laguna",
    title: "Laguna 18th Anniversary <Fish>",
    artists: ["SETROUNDLY", "春馬。", "オオモリヨウヘイ", "木村ケンシン", "古郡翔馬"],
    openStart: "OPEN 18:10／START 18:40",
    price: "前売 3000円(D別)／当日 3500円(D別)",
    streamingPrice: "配信 2000円",
    streamingUrl: "https://premier.twitcasting.tv/c:laguna_shimokita/shopcart/435375",
    note: "※視聴Ticketはツイキャス公式ストアから御購入ください。",
    publishAt: "2026-05-11T19:00:00+09:00"
  },
  {
    id: "2026-07-20-es-chiba",
    eventDate: "2026-07-20",
    dateLabel: "7.20(月)",
    venue: "千葉・music bar es",
    title: "『es special live』",
    artists: ["工藤拓也", "市川聖", "絵瀬庭歌", "SETROUNDLY", "Shishiba"],
    openStart: "OPEN 18:00／START 18:30",
    price: "予約/前売 ¥2,500(+1D)",
    streamingPrice: "配信 ¥2,500",
    ticketUrl: "/info",
    note: "※配信チケットは公演1週間前よりツイキャスプレミアムにて販売予定。※来場チケットには配信アーカイブ付き（店頭にてご案内）。"
  },
  {
    id: "2026-09-26-asagaya-lonely-street-magic",
    eventDate: "2026-09-27",
    dateLabel: "9.26(土)・9.27(日)",
    venue: "Live Bar ロンサム / mogumogu / オイルシティ",
    title: "『阿佐ヶ谷ロンリー・ストリート・マジック』",
    artists: ["9.26(土) オイルシティ 18:15–18:45 SETROUNDLY"],
    openStart: "OPEN 14:30／START 15:00",
    price: "入場料 ¥3,000(+ order)",
    ticketUrl: "/info",
    timetableImage: "/images/lonely-street-magic-2026-timetable.jpg",
    note: "※3会場往来自由・全席自由席。主催：阿佐ヶ谷 Live Bar ロンサム。予約：各アーティスト／阿佐ヶ谷ロンサム。受付：当日各会場にて。出演者キャンセル・変更による払い戻しはありません。"
  }
];

function getTodayJst(now: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now);
}

export function getPublishedLiveEvents(now: Date = new Date()): LiveEvent[] {
  const ts = now.getTime();
  const todayJst = getTodayJst(now);

  return liveEvents
    .filter((event) => {
      if (event.eventDate < todayJst) return false;

      if (!event.publishAt) return true;
      const publishTs = new Date(event.publishAt).getTime();
      if (Number.isNaN(publishTs)) return true;
      return publishTs <= ts;
    })
    .sort((a, b) => a.eventDate.localeCompare(b.eventDate));
}
