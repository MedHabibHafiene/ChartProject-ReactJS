import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/FooterContainer";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5em;
  margin-bottom: 30px;
  margin-top: -6px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  color: #555;
  font-size: 1.2em;
  line-height: 1.6;
`;

const Home = () => {
  useEffect(() => {
    document.title = "Home";

    return () => {
      document.title = "Home";
    };
  }, []);

  return (
    <>
      {" "}
      <Container>
        <Title>Welcome to my Chart project !</Title>
        <Paragraph>
          I'm currently deepening my skills by crafting various charts in a
          React project. As part of this practice, I'm focusing on utilizing
          Chart.js to create dynamic visualizations. The project encompasses
          multiple charts, with one specifically dedicated to illustrating
          salary data by job title. Through this hands-on experience, I'm
          gaining a better understanding of React's integration with Chart.js
          and refining my ability to create engaging and dynamic charts. It's an
          exciting journey of exploration and skill-building as I delve into the
          intricacies of data visualization within the React framework.
        </Paragraph>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
