import { Title, Text, List, ListItem, Container } from "@mantine/core";

const About = () => {
  return (
    <Container m="lg" my="lg">
      <Title size="h3">Sobre a Viapave</Title>
      <Text my="md">
        Somos uma empresa familiar com 30 anos de experiência no ramo da
        construção civil, especializada em rodovias, pavimentação e
        terraplenagem. Ao longo da nossa trajetória, construímos uma sólida
        reputação baseada na qualidade dos nossos serviços, no compromisso com
        prazos e na segurança dos nossos colaboradores. Atuamos em todo o
        território nacional, atendendo a diversos clientes, desde órgãos
        públicos até empresas privadas de grande porte. Nossa equipe experiente
        e qualificada utiliza as melhores técnicas e equipamentos disponíveis no
        mercado para garantir a execução de projetos com alta qualidade,
        eficiência e dentro do orçamento.
      </Text>
      <Title size="h5">Nossos valores:</Title>
      <List my="md">
        <ListItem>
          <strong>Qualidade:</strong> Buscamos a excelência em tudo que fazemos,
          desde a escolha dos materiais até a execução dos serviços.
        </ListItem>
        <ListItem>
          <strong>Compromisso:</strong> Cumprimos prazos e entregamos projetos
          dentro do orçamento. Segurança: Priorizamos a segurança dos nossos
          colaboradores e de todos os envolvidos nos projetos.
        </ListItem>
        <ListItem>
          <strong>Ética:</strong> Atuamos com ética e responsabilidade em todas
          as nossas relações.
        </ListItem>
        <ListItem>
          <strong>Inovação:</strong> Buscamos constantemente novas tecnologias e
          soluções para aprimorar nossos serviços.
        </ListItem>
      </List>
      <Text my="md">
        Se você procura uma empresa confiável e experiente para realizar seus
        projetos de construção de rodovias, pavimentação ou terraplenagem, entre
        em contato conosco. Teremos o prazer de atendê-lo!
      </Text>
    </Container>
  );
};

export default About;
