import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'LoopLux | Luxury 360 Photo Booth Rental',
  description: 'Elevate your next event with LoopLux, the premier provider of luxury 360 photo booth rentals. Perfect for weddings, corporate events, and parties.',
  keywords: ["360 photo booth rental, luxury event photo booth, corporate event photo booth, wedding photo booth, party photo booth near me"],
  openGraph: {
    "title": "LoopLux 360 Experience",
    "description": "Capture unforgettable moments with our professional 360 booth service.",
    "type": "website",
    "siteName": "LoopLux"
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
