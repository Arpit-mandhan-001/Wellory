import localFont from "next/font/local";

export const bingoRegular = localFont({
  src: "./fonts/Bingo-Regular.woff2",
  variable: "--font-bingo-regular",
  weight: "400",
  style: "normal",
});

export const bingoItalic = localFont({
  src: "./fonts/Bingo-Italic.woff2",
  variable: "--font-bingo-italic",
  weight: "400",
  style: "italic",
});
