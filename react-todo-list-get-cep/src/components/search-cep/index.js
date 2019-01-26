"use strict";

import React from "react";
import { connect } from "react-redux";
import { fetchAddress } from "reducers/address/action-creators";

export const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  isFetching,
  handleSubmit
}) => (
  <div>
    <h2>Busca CEP</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" name="cep" />
      <button type="submit" disabled={isFetching}>
        {isFetching ? "Buscando..." : "Buscar Endereço"}
      </button>
    </form>

    {status === undefined && <div>Nenhuma busca realizada ainda...</div>}
    {status === 0 && <div>CEP não encontrado</div>}
    {status === 1 && (
      <table>
        <thead>
          <tr>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{code}</td>
            <td>{address}</td>
            <td>{district}</td>
            <td>{city}</td>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
);

const mapStateToProps = state => state.address;

const mapDispatchToProps = dispatch => ({
  handleSubmit: e => {
    e.preventDefault();
    dispatch(fetchAddress(e.target.cep.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCep);
