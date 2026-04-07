import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Video",
  description: "AI Video application",
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
