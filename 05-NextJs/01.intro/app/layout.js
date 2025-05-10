import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Testing",
  description: "sssss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        footer
      </body>
    </html>
  );
}
