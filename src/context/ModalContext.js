import { createContext, useState, useEffect } from "react";

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  // State del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [informacion, guardarReceta] = useState({});

  // Una vez que tenemos una receta, llamamos la API
  useEffect(() => {
    const obtenerReceta = async () => {
      try {
        if (!idreceta) return;

        let URI = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

        const res = await fetch(URI);
        const data = await res.json();

        const { drinks } = data;
        guardarReceta(drinks[0]);
      } catch (err) {
        console.error(err);
      }
    };

    obtenerReceta();
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{ informacion, guardarIdReceta, guardarReceta }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
