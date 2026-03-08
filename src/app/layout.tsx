import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Private Caravan Sales Newcastle Co Down | Willerby Kirkland 2022 for Sale",
  description:
    "2022 Willerby Kirkland 3-bed static caravan for sale in Newcastle, Co Down. £35,000 - Save £15,000+ vs park prices. Currently at Mourneview Caravan Park. Double glazing, central heating, excellent condition.",
  keywords: [
    "private caravan sales Newcastle Co Down",
    "caravan for sale Newcastle Northern Ireland",
    "Willerby Kirkland for sale",
    "static caravan Newcastle Co Down",
    "caravan Mourneview",
  ],
  openGraph: {
    title: "Private Caravan Sales Newcastle Co Down | Willerby Kirkland 2022",
    description:
      "2022 Willerby Kirkland 3-bed static caravan - £35,000. Save £15k+ vs park prices. Newcastle, Co Down.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="antialiased bg-slate-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}
