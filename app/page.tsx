import Instagram from "@/components/Icons/Instagram";
import WhatsApp from "@/components/Icons/Whatsapp";
import Image from "next/image";

import Particles from "@/components/magicui/particles";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Particles
        className="z-[-1] absolute inset-0"
        quantity={100}
        ease={80}
        color="#000000"
        refresh
      />
      <main className="flex flex-col items-center gap-8 row-start-2">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/logo.webp"
            alt="RosasStore Logo"
            width={250}
            height={38}
            priority
          />
        </div>
        <div className="font-[family-name:var(--font-geist-mono)] text-center text-sm list-decimal list-inside">
          <span className="mb-2 text-lg">
            Próximamente, estará disponible nuestra
          </span>
          <h2 className="mx-auto font-bold text-2xl">Tienda Online</h2>
        </div>
      </main>
      <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/rosasstoreoficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram width={16} height={16} />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://wa.me/584149796659"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp width={16} height={16} />
          Whatsapp
        </a>
      </footer>
    </div>
  );
}
