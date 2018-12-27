"use strict";

import React from "react";

const SearchCep = ({
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

export default SearchCep;
