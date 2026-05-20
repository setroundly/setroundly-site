export type LiveEvent = {
  id: string;
  dateLabel: string;
  venue: string;
  title: string;
  artists: string[];
  openStart: string;
  price: string;
  streamingPrice: string;
  streamingUrl: string;
  ticketUrl?: string;
  note: string;
  publishAt?: string;
};

export const liveEvents: LiveEvent[] = [
  {
    id: "2026-05-29-laguna",
    dateLabel: "5.29(金)",
    venue: "下北沢Laguna",
    title: "<Blue>",
    artists: ["一瀬晴来", "Hibari", "あくあゆい", "SETROUNDRY"],
    openStart: "OPEN 18:30／START 19:00",
    price: "前売 3000円(D別)／当日 3500円(D別)",
    streamingPrice: "配信 2000円",
    streamingUrl: "https://premier.twitcasting.tv/c:laguna_shimokita/shopcart/428371",
    note: "※視聴Ticketはツイキャス公式ストアから御購入ください。"
  },
  {
    id: "2026-06-06-asagaya-lonesome",
    dateLabel: "6.6(土)",
    venue: "阿佐ヶ谷ロンサム",
    title: "『Acoustic!!』Oh my! 1st FULL ALBUM「Doodle」RELEASE TOUR",
    artists: ["18:30 SETROUNDLY", "19:50 市原マサヒロ", "20:40 Oh my!"],
    openStart: "OPEN 18:00／START 18:30",
    price: "TICKET ¥3,000(+1Drink ¥600)",
    streamingPrice: "配信 ¥2,500",
    streamingUrl: "https://premier.twitcasting.tv/lonesome_live/shopcart/433859",
    ticketUrl: "https://tiget.net/events/488723",
    note: "",
    publishAt: "2026-05-10T14:30:00+09:00"
  },
  {
    id: "2026-07-09-laguna",
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
  }
];

export function getPublishedLiveEvents(now: Date = new Date()): LiveEvent[] {
  const ts = now.getTime();
  return liveEvents.filter((event) => {
    if (!event.publishAt) return true;
    const publishTs = new Date(event.publishAt).getTime();
    if (Number.isNaN(publishTs)) return true;
    return publishTs <= ts;
  });
}
