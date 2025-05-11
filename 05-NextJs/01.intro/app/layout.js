import Header from "@/components/header";
import "./globals.css";
import { Underdog } from "next/font/google";

export const metadata = {
  title: "Testing",
  description: "sssss",
};

const under = Underdog({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={under.className}>
        <Header />
        {children}
        footer
      </body>
    </html>
  );
}
