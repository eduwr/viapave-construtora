import Link from "next/link";
import { headers } from "next/headers";
import Image from "next/image";
import { Container, Title, Text, Button, SimpleGrid } from "@mantine/core";
// import image from "./image.svg";
import classes from "./not-found.module.css";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  //   const data = await getSiteData(domain);
  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image
          src={"/not-found.svg"}
          alt="Not found"
          className={classes.mobileImage}
          width={300}
          height={300}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Link href={"/"}>
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Get back to home page
            </Button>
          </Link>
        </div>
        <Image
          src={"/not-found.svg"}
          alt="Not found"
          className={classes.desktopImage}
          width={404}
          height={404}
        />
      </SimpleGrid>
    </Container>
  );
}
