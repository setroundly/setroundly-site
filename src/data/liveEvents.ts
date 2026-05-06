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
  note: string;
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
  }
];
