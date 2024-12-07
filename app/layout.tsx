import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import { Instagram, WhatsApp } from "@/components/icons";
import { RsNavbar } from "@/components/Navbar";
import Particles from "@/components/ui/particles";
import { siteConfig } from "@/config/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100`}
      >
        <NextUIProvider>
        <div className="relative flex flex-col">
            <RsNavbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              <Particles
                refresh
                className="z-[100] absolute inset-0"
                color="#000000"
                ease={80}
                quantity={100}
              />
              {children}
            </main>
            <footer className="flex flex-wrap justify-center items-center gap-6 py-8 bg-transparent">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.instagram.com/rosasstoreoficial/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram height={16} width={16} />
                Instagram
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://wa.me/584149796659"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsApp height={16} width={16} />
                Whatsapp
              </a>
            </footer>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
