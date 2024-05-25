import Image from "next/image";
import { Navbar } from "../Navbar";

export function Hero() {
  return (
    <div className="relative h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="-z-10 absolute bg-black opacity-70 top-0 bottom-0 left-0 right-0"></div>

      <Image
        className="-z-50"
        objectFit="cover"
        src="/hero-background.jpg"
        alt="hero image"
        fill={true}
      />

      <div className="p-16 relative">
    
        <h3 className="text-3xl font-bold uppercase text-yellow-500 my-5">Pavimentação e Terraplanagem</h3>
        <p className="text-white opacity-70 my-3">
          Transformando paisagens com precisão na terraplanagem e na extração de
          rochas. Explore nossas soluções completas projetadas para superar
          expectativas.
        </p>

        <button className="p-5 bg-yellow-500 uppercase">Solicite um Orçamento</button>
      </div>
    </div>
  );
}
