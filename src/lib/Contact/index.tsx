import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-100 w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Contato
        </h2>
        <p className="text-gray-700 mb-8">
          Estamos aqui para ajudar! Entre em contato conosco pelo WhatsApp para
          obter mais informações sobre nossos serviços.
        </p>
        <a
          href="https://wa.me/+5541992844979"
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-green-500 text-white px-6 py-3 font-semibold rounded-md shadow-md hover:bg-green-600 items-center justify-center"
        >
          <FaWhatsapp className="mr-2 text-xl" />
          Entre em Contato pelo WhatsApp
        </a>
      </div>
    </section>
  );
};
