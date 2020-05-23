import React from "react";
import { getPortfolioItem } from "../../components/PortfolioItems/PortfolioItems";
import { Container, Grid } from "@material-ui/core";
import useFetch from "../../hooks/useFetch";
const Portfolio = () => {
  const [{ data, isLoading, isError, errorData }, setRequestOptions] = useFetch(
    "portfolio"
  );

  const PortfolioItem = getPortfolioItem("desktop");

  return (
    <Container>
      <Grid container spacing={2} justify="space-around">
        {data.map((project) => (
          <PortfolioItem key={project._id} data={project} />
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
