import type { Metadata } from "next"; 
import "./globals.css";
 

export const metadata: Metadata = {
  title: "gin portfolio",
  description: "gin portfolio",
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
