import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/context/ThemeContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const intelOneMono = Intel_One_Mono({
//   variable: "--font-intel-one-mono",
//   subsets: ["latin"],
//   weight: ["400"],
// });
// const intelMono = Intel_One_Mono({
//   subsets: ["latin"],
//   variable: "--font-intel",
//   weight: ["400"], // optional
// });
export const metadata: Metadata = {
  title: "Pritmoy sen | Home",
  description: "portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Intel+One+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              const theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.classList.toggle('dark', theme === 'dark');
            } catch (e) {}
          `,
          }}
        />
      </head>
      <body
        className={`antialiased`}
        style={{ fontFamily: "'Releway', sans-serif" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
