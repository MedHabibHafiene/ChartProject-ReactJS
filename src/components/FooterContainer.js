import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
  text-align: center;
  color: #555;
  font-size: 0.9em;
`;

const Link = styled.a`
  color: #427D9D;
  text-decoration: underline;

  &:hover {
    color: #555;
  }
`;

const Footer = () => (
  <FooterContainer>
    Created by{"  "}
    <Link href="https://github.com/MedHabibHafiene" target="_blank" rel="noopener noreferrer">
      Mohamed Habib Hafiene
    </Link>
    {" / "}
    <Link href="https://www.linkedin.com/in/mohamed-habib-hafiene" target="_blank" rel="noopener noreferrer">
      Linkedin
    </Link>
    {" / "}
    <Link href="https://www.kaggle.com/datasets/amirmahdiabbootalebi/salary-by-job-title-and-country" target="_blank" rel="noopener noreferrer">
      dataset used in this project
    </Link>
  </FooterContainer>
);

export default Footer;
