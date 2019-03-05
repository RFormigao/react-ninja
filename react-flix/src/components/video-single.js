"use strict";

import React from "react";
import styled from "styled-components";

const VideoSingle = ({ id, title }) => (
  <Container>
    <Iframe
      width="560"
      height="480"
      src={`https://www.youtube.com/embed/${id}?rel=0`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <Title>{title}</Title>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Iframe = styled.iframe`
  background-color: #262626;
  border: 0;
  border-bottom: 1px solid #262626;
  margin-bottom: 10px;
  width: 100%;
`;

const Title = styled.h2`
  padding: 10px;
`;

export default VideoSingle;
