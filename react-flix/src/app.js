"use strict";

import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";

import styled, { createGlobalStyle } from "styled-components";

import "normalize.css";
import "milligram";
import Header from "components/header";
import RegisterVideo from "components/register-video";
import VideoSingle from "components/video-single";
import Videoslist from "components/videos-list";
import Footer from "components/footer";
import { headerHeight } from "utils/constants";
import { footerHeight } from "utils/constants";

import { fetchVideos } from "reducers/videos/action-creators";

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { isRegisterVideoFormOpened, videoSingleId, videos } = this.props;
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Header />
          <Main>
            {isRegisterVideoFormOpened && <RegisterVideo />}
            {videoSingleId && (
              <VideoSingle
                id={videoSingleId}
                title={videos[videoSingleId].title}
              />
            )}
            <Videoslist />
          </Main>
          <Footer />
        </Container>
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html, body, div[data-js="app"] {
    height: 100%
  }
`;

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`;

const mapStateToProps = state => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos
});

const mapDispatchToProps = {
  fetchVideos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
