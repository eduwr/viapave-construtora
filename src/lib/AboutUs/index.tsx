"use client";
import { useState } from "react";
import Image from "next/image";

export const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <section id="sobre" className="py-20 bg-gray-100 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:hidden">
          Sobre Nós
        </h2>
        <div className="md:flex md:items-center md:justify-center px-5 md:px-0">
          <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
            <Image
              src="/images/about-us.jpeg"
              alt="About Us Image"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 hidden md:block">
              Sobre Nós
            </h2>
            <p
              className={`${
                readMore ? "block" : "line-clamp-3"
              } text-gray-700 text-lg leading-relaxed mb-6 md:mb-8`}
            >
              A nossa empresa é líder no ramo de pavimentação e terraplanagem,
              com anos de experiência na indústria. Nosso objetivo é fornecer
              serviços de qualidade excepcional, garantindo a satisfação total
              dos nossos clientes.
            </p>
            <p
              className={`${
                readMore ? "block" : "hidden"
              } text-gray-700 text-lg leading-relaxed mb-6 md:mb-8`}
            >
              Nossos profissionais são altamente qualificados e dedicados a
              entregar resultados superiores em cada projeto. Estamos
              comprometidos com a excelência, segurança e sustentabilidade em
              todas as nossas operações.
            </p>
            <button
              onClick={toggleReadMore}
              className="text-yellow-600 font-semibold"
            >
              {readMore ? "Ver menos" : "Saiba mais"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
