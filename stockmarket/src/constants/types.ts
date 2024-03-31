// export interface Stock {
//   symbol: string;
//   name: string;
//   exchange: string;
//   mic_code: string;
//   currency: string;
//   datetime: string;
//   timestamp: number;
//   open: string;
//   high: string;
//   low: string;
//   close: string;
//   volume: string;
//   previous_close: string;
//   change: string;
//   percent_change: string;
//   average_volume: string;
//   is_market_open: boolean;
//   fifty_two_week: {
//     low: string;
//     high: string;
//     low_change: string;
//     high_change: string;
//     low_change_percent: string;
//     high_change_percent: string;
//     range: string;
//   };
// }
export interface Stock {
  ticker: string;
  companyName: string;
  price: number;
  priceChangePercentage: number;
  priceChange: number;
  image: string;
  description: string;
  exchange: string;
  ceo: string;
  city: string;
  state: string;
  industry: string;
  sector: string;
  ipoDate: string;
  year: string[];
}
