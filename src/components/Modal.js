import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "react-datepicker/dist/react-datepicker.css";
import CityForm from './City/CityForm';
import TouristForm from "./Tourist/TouristForm";




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
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    background: "linear-gradient(45deg, #8360c3 30%, #2ebf91 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  secondary: {
    background: "linear-gradient(45deg, #da4453 30%, #89216b 90%)",
  },
}));

export default function SimpleModal(props) {
  const city = props.city;
  const tourist = props.tourist;  
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);



  const body = (
    <div style={modalStyle} className={classes.paper}>
      {city? <>
        <h2 id="simple-modal-title">Editar ciudad</h2>
        <CityForm title='Editando ciudad' city={city} /> 
      </>: <>
      <h2 id="simple-modal-title">Editar turista</h2>
        <TouristForm title='Editando turista' tourist={tourist} /> 
      </>}      
      
    </div>
  );

  return (
    <div>
      <Modal
        open={props.handleOpen}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}