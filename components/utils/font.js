import { Roboto } from "next/font/google";
import { Playfair_Display } from "next/font/google";

export const sideBarFont = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const sideBarFontLogo = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

export const bannerFont = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
