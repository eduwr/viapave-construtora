import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./Hero.module.css";
import Image from "next/image";

export function Hero() {
  return (
    <div className={classes.hero}>
      <Image src="/hero-background.jpg" alt="hero image" fill={true} />
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>
          Pavimentação e Terraplanagem de Qualidade
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Transformando paisagens com precisão na terraplanagem e na extração de
          rochas. Explore nossas soluções completas projetadas para superar
          expectativas.
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Solicite um Orçamento
        </Button>
      </Container>
    </div>
  );
}
