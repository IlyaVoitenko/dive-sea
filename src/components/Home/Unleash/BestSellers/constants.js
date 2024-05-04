import idUser from "generate-unique-id";
import imageOrangeUserAvatar from "../../../../assets/imageOrangeUserAvatar.svg";
import cardPlanetImg from "../../../../assets/cardPlanetImg.svg";
import stonesDefault from "../../../../assets/stonesDefault.svg";

export const users = [
  {
    id: idUser(),
    name: "Alex Ca.",
    userName: "Alexy",
    isFollowing: false,
    avatarImg: imageOrangeUserAvatar,
  },
  {
    id: idUser(),
    name: "Juliya S.",
    userName: "JuliyaS",
    isFollowing: false,
    avatarImg: cardPlanetImg,
  },
  {
    id: idUser(),
    name: "Juliya S.",
    userName: "JuliyaS",
    isFollowing: false,
    avatarImg: stonesDefault,
  },
  {
    id: idUser(),
    name: "Trevor Pu. ",
    userName: "TrevorP",
    isFollowing: false,
    avatarImg: imageOrangeUserAvatar,
  },
  {
    id: idUser(),
    name: "Juliya S.",
    userName: "JuliyaS",
    isFollowing: true,
    avatarImg: imageOrangeUserAvatar,
  },
];
