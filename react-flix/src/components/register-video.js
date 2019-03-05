"use strict";

import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { registerVideo } from "reducers/videos/action-creators";
import { closeRegisterVideo } from "reducers/ui/action-creators";

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo</h2>

    <label htmlFor="id">ID do vídeo</label>
    <input type="text" id="id" name="id" />

    <label htmlFor="title">Título do vídeo</label>
    <input type="text" id="title" name="title" />

    <button type="submit">Cadastrar</button>

    <ButtonClose onClick={onCloseRegisterVideo} type="button">
      &times;
    </ButtonClose>
  </Form>
);

const Form = styled.form`
  width: 70%;
  margin: 15px auto;
  position: relative;
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin: 0;
  padding: 0;
  width: 38px;
  line-height: 1;
  font-size: 20px;
  font-weight: normal;
`;

const mapDispatchToProps = dispatch => ({
  onSubmit: async e => {
    e.preventDefault();
    e.persist();

    const {
      id: { value: id },
      title: { value: title }
    } = e.target;

    await dispatch(registerVideo({ id, title }));
    e.target.reset();
    e.target[0].focus();
  },

  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
});

export default connect(
  null,
  mapDispatchToProps
)(RegisterVideo);
