import { createContext, useState, useEffect } from "react";

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
  // Crear el state del Context
  const [categorias, guardarCategorias] = useState([]);

  // Ejecutar el llamado a la API
  useEffect(() => {
    const obtenerCategorias = async (API) => {
      try {
        let URI = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

        const res = await fetch(URI);
        const data = await res.json();

        const { drinks } = data;
        guardarCategorias(drinks);
      } catch (err) {
        console.error(err);
      }
    };

    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
