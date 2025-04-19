
type Settings = {
  readonly site_name: string,
  readonly site_author: string,
  readonly desc_general: string,
  readonly locale: string,
  readonly socials: Socials
};
type Socials = {
  readonly twitter?: string
};
const settings: Settings = {
  site_name: "Mu-on's Burogu",
  site_author: "Mu-on",
  desc_general: "The Mu-on's blog site. 自動化ゲー中上級者/狂信者のために、技術的に面白いゲーム記事を揃えております。GTNHは神ゲーなので全人類やれ。 #technicalautomationgames #gregtechnewhorizonscult",
  locale: "ja-JP",
  socials: {
    twitter: "@ElMuTaun"
  }
};
export default settings;
