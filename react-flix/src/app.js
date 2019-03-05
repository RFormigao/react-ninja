"use strict";

import React, { Fragment } from "react";
import { connect } from "react-redux";

import styled, { createGlobalStyle } from "styled-components";

import "normalize.css";
import "milligram";
import Header from "components/header";
import RegisterVideo from "components/register-video";
import VideoSingle from "components/video-single";
import Videoslist from "components/videos-list";
import Footer from "components/footer";

const App = ({ isRegisterVideoFormOpened }) => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Header />
      <Main>
        {isRegisterVideoFormOpened && <RegisterVideo />}
        <VideoSingle />
        <Videoslist />
      </Main>
      <Footer />
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

const Main = styled.main`
  min-height: calc(100% - 120px);
`;

const mapStateToProps = state => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
});

export default connect(mapStateToProps)(App);
