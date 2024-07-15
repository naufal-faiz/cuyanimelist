import Navbar from "@/components/Navbar"
import "./globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Rating Anime Dari Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-myColor-dark`} suppressContentEditableWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
