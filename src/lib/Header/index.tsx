"use client"

import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { IconChevronDown } from '@tabler/icons-react';
import classes from './Header.module.css';
import Link from 'next/link';

const links = [
  { link: '/about', label: 'Viapave' },
  {
    link: 'Diferenciais',
    label: 'Learn',
    // links: [
    //   { link: '/docs', label: 'Documentation' },
    //   { link: '/resources', label: 'Resources' },
    //   { link: '/community', label: 'Community' },
    //   { link: '/blog', label: 'Blog' },
    // ],
  },
  { link: '/estrutura', label: 'Estrutura' },
  { link: '/pessoas', label: 'Pessoas' },
  { link: '/sustentabilidade', label: 'Sustentabilidade' },
  { link: '/valores', label: 'Valores' },
  { link: '/clientes', label: 'Clientes' },
  { link: '/contato', label: 'Contato' },
  { link: '/denuncia', label: 'Canal de denuncia' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ));

    // if (menuItems) {
    //   return (
    //     <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
    //       <Menu.Target>
    //         <a
    //           href={link.link}
    //           className={classes.link}
    //           onClick={(event) => event.preventDefault()}
    //         >
    //           <Center>
    //             <span className={classes.linkLabel}>{link.label}</span>
    //             <IconChevronDown size="0.9rem" stroke={1.5} />
    //           </Center>
    //         </a>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   );
    // }

    return (
      <Link
        key={link.label}
        href={link.link}
        
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          {/* <MantineLogo size={28} /> */}
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}