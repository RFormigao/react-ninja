"use strict";

import React, { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Play from "components/play";

import "normalize.css";
import "milligram";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Header>
        <h1>Reactflix</h1>
      </Header>
      <Main>
        <Videoslist>
          {Array.from({ length: 10 }).map((item, index, array) => (
            <Video key={index}>
              <VideoThumb>
                <PlayStyled />
              </VideoThumb>
              <VideoTitle> Titulo do video</VideoTitle>
            </Video>
          ))}
        </Videoslist>
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
  padding: 10px 5px;
`;

const Videoslist = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Video = styled.section`
  flex: 1 1 300px;
  margin: 0 5px;
`;

const VideoThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #262626;
  height: 150px;
`;

const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;
  fill: #999;
`;

const VideoTitle = styled.h2`
  font-size: 18px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
