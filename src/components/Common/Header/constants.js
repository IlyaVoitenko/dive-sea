import idUser from "generate-unique-id";

export const linkNav = [
  { text: "Discover", src: "/discover", id: idUser() },
  { text: "creators", src: "/creators", id: idUser() },
  { text: "Sell", src: "/creators-nft", id: idUser() },
  { text: "stats", src: "/stats", id: idUser() },
];
