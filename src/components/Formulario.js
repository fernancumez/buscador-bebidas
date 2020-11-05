import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);

  return (
    <form className="col-12">
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
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" className="form-control">
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
