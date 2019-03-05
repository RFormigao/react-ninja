"use strict";

import React from "react";
import styled from "styled-components";
import { headerHeight } from "utils/constants";

const MainHeader = () => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton>Cadastrar vídeo</RegisterButton>
  </Header>
);

const Header = styled.header`
  background-color: #262626;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: ${headerHeight};
`;

const HeaderTitle = styled.h1`
  margin-bottom: 0;
`;

const RegisterButton = styled.button`
  margin-bottom: 0;
`;

export default MainHeader;
