import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flux",
  description: "Flux application",
  icons: {
    icon: "/media/logo-head.png",
    apple: "/media/logo-head.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
