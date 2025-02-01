import "./globals.css";
import '@fontsource/kanit';

export const metadata = {
  title: "To Ice 💖",
  description: "Valentine Project for my girlfriend 💖 | Next.JS v15 + Tailwind CSS",
  keywords: "valentine, nextjs, tailwindcss",
  openGraph: {
    images: 'https://img2.pic.in.th/pic/Screenshot-2025-02-01-234636.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
