import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instakyle - Cyberpunk Electronics Repair",
  description: "Fighting e-waste and empowering communities through ethical technology repair",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
