import { div, span } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-8 row-start-2">
        <div className="flex justify-center items-center gap-4">
          <Image
            priority
            alt="RosasStore Logo"
            height={38}
            src="/logo.webp"
            width={250}
          />
        </div>
        <div className="font-[family-name:var(--font-geist-mono)] text-center text-sm list-decimal list-inside">
          <span className="mb-2 text-lg">
            Próximamente, estará disponible nuestra
          </span>
          <h2 className="mx-auto font-bold text-2xl">Tienda Online</h2>
          {/* <ProductCard name="Nike Adapt BB 2.0" image="/placeholder.svg?height=400&width=400" backgroundImage="/placeholder.svg?height=600&width=400" price={279.97} description="Consistent, customized fit, game-changing." /> */}
        </div>
      </main>
    </div>
  );
}
