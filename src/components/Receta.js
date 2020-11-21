import React, { useState, useContext } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { ModalContext } from "../context/ModalContext";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {
  // Configuracion del modal de Material UI
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Extraer los valores del context
  const { informacion, guardarIdReceta, guardarReceta } = useContext(
    ModalContext
  );

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-">{receta.strDrink}</h2>
        <img
          className="card-img-top"
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              guardarIdReceta(null);
              guardarReceta({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{informacion.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{informacion.strInstructions}</p>
              <img
                src={informacion.strDrinkThumb}
                alt={informacion.strDrink}
                className="img-fluid my-4"
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
