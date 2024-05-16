import { CardsCarousel } from "@/lib/Carousel/CardsCarousel";
import { Paper, Title, Button, Container, Grid, GridCol } from "@mantine/core";

const Projects = () => {
  const projects = [
    {
      title: "Rodovia X",
      description:
        "Construção de uma rodovia de 50 km conectando duas cidades importantes.",
      image: "projects/project1.jpg",
    },
    {
      title: "Rodovia Y",
      description:
        "Construção de uma rodovia de 50 km conectando duas cidades importantes.",
      image: "projects/project2.jpg",
    },
    {
      title: "Rodovia Z",
      description:
        "Construção de uma rodovia de 50 km conectando duas cidades importantes.",
      image: "projects/project3.jpg",
    },
  ];
  return (
    <Container m="lg" my="lg">
      <Title variant="h3">Nossos Projetos</Title>
      <Grid>
        {projects.map((project, index) => (
          <GridCol key={index} span={12}>
            <Paper shadow="sm" p="md" style={{ marginBottom: "20px" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
              />
              <Title variant="h4" style={{ marginBottom: "10px" }}>
                {project.title}
              </Title>
              <Title>{project.description}</Title>
              <div style={{ marginTop: "10px", textAlign: "right" }}>
                <Button size="sm" variant="outline">
                  Ver mais
                </Button>
              </div>
            </Paper>
          </GridCol>
        ))}
        <CardsCarousel />
      </Grid>
    </Container>
  );
};

export default Projects;
