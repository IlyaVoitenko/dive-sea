import idUser from "generate-unique-id";
import imageOrangeUserAvatar from "../../../../assets/orangAvatarBestSeller.svg";
import cardPlanetImg from "../../../../assets/cardPlanetImg.svg";
export const users = [
  {
    id: idUser(),
    name: "Alex Ca.",
    userName: "Alexy",
    avatarImg: imageOrangeUserAvatar,
    volume: "8,456",
    percentagePerDay: "+23,00%",
  },
  {
    id: idUser(),
    name: "Juliya S.",
    userName: "JuliyaS",
    avatarImg: cardPlanetImg,
    volume: "5,327",
    percentagePerDay: "-32,01%",
  },
];
