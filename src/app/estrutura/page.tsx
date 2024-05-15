// LCM Construtora: Infraestrutura Robusta para Obras Extraordinárias

// A LCM Construtora se destaca pela estrutura completa e moderna, garantindo agilidade, eficiência e economia em seus projetos. Somos referência em qualidade e segurança, desde a fundação até a entrega final.

// Nossos Recursos:

import { Title, Text, List, ListItem, Container } from "@mantine/core";

const Structure = () => {
  return (
    <Container m="lg" my="lg">
      <Title size="h3">Estrutura</Title>
      <Text my="md">
        A Viapave Construtora se destaca pela estrutura completa e moderna,
        garantindo agilidade, eficiência e economia em seus projetos. Somos
        referência em qualidade e segurança, desde a fundação até a entrega
        final.
      </Text>
      <Title size="h5">Nossos Recursos:</Title>
      <List my="md">
        <ListItem>
          <Text>
            <strong>Usinas de Asfalto de Alta Produtividade:</strong>{" "}Produzimos
            asfalto com a mais alta qualidade, garantindo durabilidade e
            resistência às obras.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <strong>
              Equipamentos de Terraplenagem e Pavimentação de Última Geração:
            </strong>{" "}
            Contamos com uma frota moderna de equipamentos para terraplanagem,
            pavimentação e outras atividades, otimizando o tempo e os resultados
            dos projetos.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <strong>
              Máquinas e Equipamentos Pesados para Grandes Desafios:
            </strong>{" "}
            Lidamos com os maiores desafios com equipamentos robustos e
            confiáveis, garantindo a execução segura e eficiente de obras
            complexas.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <strong>Caminhões e Veículos para Logística Eficaz:</strong> Nossa
            frota própria de caminhões e veículos garante o transporte rápido e
            seguro de materiais e equipamentos para qualquer local.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            <strong>
              Oficina Própria para Manutenção Preventiva e Corretiva:
            </strong>{" "}
            Contamos com uma oficina própria equipada com ferramentas e peças
            originais, garantindo a manutenção preventiva e corretiva de toda a
            frota, assegurando a disponibilidade dos equipamentos e a segurança
            das obras.
          </Text>
        </ListItem>
      </List>
    </Container>
  );
};

export default Structure;
