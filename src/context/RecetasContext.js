import { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  const [consultar, guardarConsultar] = useState(false);
  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        try {
          const URI = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

          const res = await fetch(URI);
          const data = await res.json();

          const { drinks } = data;
          guardarRecetas(drinks);
        } catch (err) {
          console.err(err);
        }
      };

      obtenerRecetas();
    }
  }, [busqueda, consultar, nombre, categoria]);

  return (
    <RecetasContext.Provider
      value={{ buscarRecetas, guardarConsultar, recetas }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
