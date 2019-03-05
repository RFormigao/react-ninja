"use strict";

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { headerHeight } from "utils/constants";
import { openRegisterVideo } from "reducers/ui/action-creators";

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton onClick={onOpenRegisterVideo}>
      Cadastrar vídeo
    </RegisterButton>
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

const mapDispatchToProps = dispatch => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
});

export default connect(
  null,
  mapDispatchToProps
)(MainHeader);
