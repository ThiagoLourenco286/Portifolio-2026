import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SideBar from "../components/side-bar/side-bar";
import Particles from '../components/animations/Particles'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jestBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Portfólio',
    template: 'Portfólio | %s'
  },
  description: "Portfólio sobre mim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jestBrainsMono.variable} h-full antialiased`}
    >
      <body className="h-screen w-screen bg-tech-bg text-tech-primary overflow-hidden">
        <div className="relative w-full h-full">

          <Particles
            particleColors={["#00c2ff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
            pixelRatio={1}
            className="absolute inset-0 z-0"
          />

          <div className="flex flex-col md:grid md:grid-cols-[350px_1fr] w-full h-full absolute inset-0 z-10">
            <SideBar />
            <ScrollArea className="w-full h-full min-h-0">
              <main className="p-5 w-full box-border">
                {children}
              </main>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>

        </div>
      </body>
    </html>
  );
}
