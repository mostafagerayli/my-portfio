import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../context/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mostafa Gerayli | Frontend Developer",
  description:
    "Frontend Developer specializing in React and Next.js. Building modern, scalable, and user-friendly web applications.",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Analytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
