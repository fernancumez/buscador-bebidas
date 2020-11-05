import { createContext, useState } from "react";

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
  const [hola, useHola] = useState("hola");

  return (
    <CategoriasContext.Provider value={{ hola, useHola }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
