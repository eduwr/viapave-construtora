import React from "react";
import { FaTruck, FaRoad, FaTools, FaTrain, FaMountain } from "react-icons/fa";

export const OurWork = () => {
  const services = [
    {
      title: "Terraplanagem",
      description:
        "Serviço de nivelamento e preparação do terreno para construção.",
      icon: <FaMountain />,
    },
    {
      title: "Pavimentação",
      description:
        "Pavimentação de vias urbanas e rurais com qualidade e durabilidade.",
      icon: <FaRoad />,
    },
    {
      title: "Aluguel de máquinas e equipamentos",
      description: "Locação de máquinas e equipamentos para construção civil.",
      icon: <FaTools />,
    },
    {
      title: "Obras de Rodovias e Ferrovias",
      description: "Construção e manutenção de rodovias e ferrovias.",
      icon: <FaTrain />,
    },
    {
      title: "Fornecimento de Pedra e Brita",
      description:
        "Fornecimento de materiais de construção, como pedra e brita.",
      icon: <FaTruck />,
    },
  ];

  return (
    <section id="nossos-servicos" className="p-10 prose">
      <h3 className="h3">Nossos Serviços</h3>
      <div className="divide-solid divide-y">
        {services.map((s) => {
          return (
            <div key={s.title} className="py-6 flex items-center">
              <div className="mr-4 text-4xl text-yellow-600">{s.icon}</div>
              <div>
                <h5 className="text-xl font-bold">{s.title}</h5>
                <p>{s.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
