import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "chakhigin portfolio",
  description: "chakhigin portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
