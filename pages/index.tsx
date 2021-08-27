import { Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../src/Components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h3">
          Hello welcome to my La Nación challenge
        </Typography>
        <Link href="/articles">
          <a>Go to challenge</a>
        </Link>
      </Container>
    </Layout>
  );
};

export default Home;
