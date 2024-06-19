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
    <section id="nossos-servicos" className="p-10">
      <h2 className="text-2xl mb-4">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-4xl text-yellow-600">{s.icon}</div>
              <h5 className="text-xl font-bold">{s.title}</h5>
            </div>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
