"use strict";

import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";

import "normalize.css";
import "milligram";

import Videoslist from "components/videos-list";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Header>
        <h1>Reactflix</h1>
      </Header>
      <Main>
        <Videoslist />
      </Main>
      <Footer>&copy; 2018</Footer>
    </Container>
  </Fragment>
);

const GlobalStyle = createGlobalStyle`
  html, body, div[data-js="app"] {
    height: 100%
  }
`;

const Container = styled.div`
  height: 100%;
`;

const Header = styled.header`
  background-color: #262626;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Main = styled.main`
  min-height: calc(100% - 120px);
`;

const Footer = styled.footer`
  background-color: #333;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
