import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas } = useContext(RecetasContext);

  // Funcion para leer los contendios
  const obtenerDatosReceta = (evt) => {
    const { name, value } = evt.target;

    guardarBusqueda({ ...busqueda, [name]: value });
  };

  return (
    <form
      className="col-12"
      onSubmit={(evt) => {
        evt.preventDefault();
        buscarRecetas(busqueda);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categorías o Ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingredientes"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categorias.map((categoria, id) => (
              <option key={id} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebida"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
