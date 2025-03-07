import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Grabbzo",
  description: "Your favourite food App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
