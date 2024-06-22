import Image from "next/image";
import { Navbar } from "../Navbar";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col justify-between w-full"
    >
      <Navbar></Navbar>
      <div className="-z-10 absolute bg-black opacity-70 top-0 bottom-0 left-0 right-0"></div>

      <Image
        className="-z-50"
        style={{ objectFit: "cover" }}
        src="/hero-background.jpg"
        alt="hero image"
        fill={true}
      />

      <div className="px-8 md:px-16 relative">
        <h3 className="text-2xl md:text-3xl font-bold uppercase text-yellow-500 my-5">
          Pavimentação e Terraplanagem
        </h3>
        <p className="text-sm md:text-lg text-white opacity-70 my-3 lg:max-w-[70%]">
          Combinando tecnologia e experiência para transformar paisagens. Nossas
          soluções de terraplenagem e extração de rochas são projetadas para
          atender e superar suas necessidades.
        </p>

        <button className="p-3 font-semibold bg-yellow-500 uppercase hover:scale-110 hover:opacity-85 transition-all">
          Solicite um Orçamento
        </button>
      </div>
      <p></p>
    </section>
  );
}
