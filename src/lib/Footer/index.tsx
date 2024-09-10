import { FaEnvelope, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const links = [
    {
      text: "Início",
      link: "#",
    },
    {
      text: "Sobre",
      link: "#sobre",
    },
    {
      text: "Serviços",
      link: "#nossos-servicos",
    },
    {
      text: "Projeto",
      link: "#projetos",
    },
    {
      text: "Contato",
      link: "#contato",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-0">
        {/* Seção de Navegação */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navegação</h3>
          <nav>
            <ul className="space-y-2">
              {links.map((link) => (
                <li className="hover:text-gray-400" key={link.text}>
                  <a href={link.link}>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Seção de Contato */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:viapave.construtora@gmail.com"
                className="hover:text-gray-400"
              >
                viapave.construtora@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+554733064043" className="hover:text-gray-400">
                +55 (47) 3306-4043
              </a>
            </li>
            <li className="flex items-center">
              <FaWhatsapp className="mr-2" />
              <a
                href="https://wa.me/+5541992844979"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                +55 (41) 99284-4979
              </a>
            </li>
          </ul>
        </div>
        {/* Seção de Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/viapaveconstrutora"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wilk Technology. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
