import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pablo Barbancho Martín",
  description: "Data Scientist | Innovative | Analytical thinking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
