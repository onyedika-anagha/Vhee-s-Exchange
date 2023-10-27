export const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
});
export const greeting = (firstName: string) => {
    var nowTime = new Date();
    const hour = nowTime.getHours();

    //   console.log(nowTime);
    if (hour >= 20) {
      return `Good Night ${firstName}  , Have a good night rest.`;
    } else if (hour > 17) {
      return `Good Evening ${firstName} , Hope you enjoyed your day?`;
    } else if (hour > 11) {
      return `Good Afternoon ${firstName} , How is your day going?`;
    } else if (hour < 12) {
      return `Good Morning ${firstName} , How was your night?`;
    }
  },
  truncateStr = (str = "", MAX = 20) => {
    const truncatedStr = str.substring(0, MAX);
    return str.length > MAX ? truncatedStr + "..." : truncatedStr;
  };

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeId = (length = 12) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
  };
export interface BlogElement {
  id: number;
  assetId: number;
  title: string;
  alias: string;
  introText: string;
  fullText: string;
  state: number;
  catId: number;
  created: Date;
  createdBy: number;
  createdByAlias: string;
  modified: Date;
  modifiedBy: number;
  checkedOut: number;
  checkedOutTime: Date;
  publishUp: Date;
  publishDown: Date;
  images: Images;
  urls: string;
  attribs: Attribs;
  version: number;
  ordering: string;
  metaKeywords: string;
  metaDescription: string;
  access: number;
  hits: number;
  metadata: string;
  featured: number;
  language: Language;
  xreference: string;
  note: string;
  readingTimeInMinutes: number;
  tags: null;
}

export enum Attribs {
  Empty = "{}",
}

export interface Images {
  floatFullText: string;
  floatIntro: string;
  imageFullText: string;
  imageFullTextAlt: string;
  imageFullTextCaption: string;
  imageIntro: string;
  imageIntroAlt: string;
  imageIntroCaption: string;
}

export enum Language {
  Empty = "*",
}
export enum AnimateType {
  SlideInLeft = "slideInLeft",
  SlideInRight = "slideInRight",
  SlideInTop = "slideInTop",
  SlideInDown = "slideInDown",
  FadeInLeft = "fadeInLeft",
  FadeInRight = "fadeInRight",
  FadeInUp = "fadeInUp",
  FadeInDown = "fadeInDown",
  BounceIn = "bounceIn",
  ZoomIn = "zoomIn",
}

export const animate_animation = (animate: AnimateType) => {
  switch (animate) {
    case AnimateType.FadeInLeft:
      return {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      };
    case AnimateType.FadeInRight:
      return {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      };
    case AnimateType.FadeInDown:
      return {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      };
    case AnimateType.FadeInUp:
      return {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};
