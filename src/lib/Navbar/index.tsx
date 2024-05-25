import { Logo } from "../Logo";

const links = [
  {
    text: "Início",
    link: "/",
  },

  {
    text: "Sobre",
    link: "#sobre",
  },
  {
    text: "Projeto",
    link: "#projetos",
  },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4">
      <Logo bgDark />
      <div className="flex justify-end flex-1 items-center">
        {links.map((l) => (
          <a
            key={l.text}
            className="p-5 hover:border-2 text-white "
            href={l.link}
          >
            {l.text}
          </a>
        ))}
      </div>
    </nav>
  );
};
