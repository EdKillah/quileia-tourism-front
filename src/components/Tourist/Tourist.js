import React, { useState } from 'react';
import Swal from 'sweetalert2'
import SimpleModal from "./../Modal";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tourist = (props) => {

    const tourist = props.tourist;
    const style = props.style ? props.style : { width: "25rem", marginLeft: "110px" };
    const [open, setOpen] = useState(false);

    const editTourist = (e) => {
        setOpen(true);
    }

    const deleteTourist = (e) => {
        console.log("Eliminando ciudad");
        var URL = `https://quileia-turismo.herokuapp.com/api/v1/tourists/${tourist.id}`;
        console.log("\n LA URL: ", URL);
        Swal.fire({
            title: `¿SEGURO QUE QUIERES ELIMINAR EL TURISTA CON ID: ${tourist.id}`,
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `ELIMINAR`,
        }).then((result) => {
            if (result.isDenied) {
                axios.delete(URL)
                    .then((res) => Swal.fire('TURISTA ELIMINADO!', `El turista ${tourist.name} fue eliminado exitosamente`, 'success'))
                    .catch((err) => {
                        console.log("Error al enviar formulario", err);
                    });
            }
        })

    }

    return (
        <>
            <div className="card mt-4 ml-4" style={style}>
                <div className="card-header">
                    <h3>{tourist.fullName}</h3>
                    <span>
                        Id: {tourist.id}
                    </span>
                </div>
                <div className="card-body">
                    <p>Tipo documento: <mark>{tourist.typeId}</mark></p>
                    <p>Fecha de nacimiento: <mark>{tourist.dateOfBirth}</mark></p>
                    <p>Frecuencia de viaje: <mark>{tourist.travelFrequency}</mark></p>
                    <p>Presupuesto de viaje: <mark>{tourist.budget}</mark></p>
                    <p>¿Tiene tarjeta de credito?: <mark>{tourist.hasCreditCard + ""}</mark></p>
                </div>
                <SimpleModal
                    handleOpen={open}
                    handleClose={() => setOpen(false)}
                    tourist={tourist}
                />
                <div style={{ paddingBottom: "10px" }}>
                    <Link to={`/tourist/${tourist.id}`}>
                        <button className="btn btn-info" style={{ marginRight: "7px" }} onClick={() => <Tourist tourist={tourist} />}>Ver historial</button>
                    </Link>
                    <button className="btn btn-warning" style={{ marginRight: "7px" }} onClick={editTourist}>Editar</button>
                    <button className="btn btn-danger" style={{ marginRight: "7px" }} onClick={deleteTourist}>Eliminar</button>

                </div>
            </div>

        </>
    );

};

export default Tourist;