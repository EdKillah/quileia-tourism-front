import React, { useState } from 'react';
import Swal from 'sweetalert2'
import SimpleModal from "./../Modal";
import axios from 'axios';
import { Link } from 'react-router-dom';

const City = (props) => {

    const style = props.style ? props.style : { width: "25rem", marginLeft: "80px" };

    let city = props.city;
    const touristDate = props.touristDate;
    if (touristDate)
        city.touristDate = touristDate;    

    const [open, setOpen] = useState(false);

    const editCity = (e) => {
        setOpen(true);
    }

    const deleteCity = (e) => {        
        var URL = `https://quileia-turismo.herokuapp.com/api/v1/cities/${city.id}`;
        console.log("\n LA URL: ", URL);
        Swal.fire("ADVERTENCIA!", `Seguro que quieres borrar la ciudad con id: ${city.id}`, "warning");
        Swal.fire({
            title: `¿SEGURO QUE QUIERES ELIMINAR LA CIUDAD CON ID: ${city.id}`,
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `ELIMINAR`,
        }).then((result) => {
            if (result.isDenied) {
                axios.delete(URL)
                    .then((res) => Swal.fire('¡CIUDAD ELIMINADA!', `La ciudad ${city.name} fue eliminada exitosamente`, 'success'))
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
                    <h3>{city.name}</h3>
                    <span>
                        Id: {city.id}
                    </span>
                </div>
                <ul className="list-group list-group-flush">
                    <li class="list-group-item">
                        <div className="card-body">
                            <p>Población: {city.population}</p>
                            <p>Lugar turistico más popular: <mark>{city.touristicPlace}</mark></p>
                            <p>Hotel más popular: <mark>{city.touristicHotel}</mark></p>
                        </div>
                        <SimpleModal
                            handleOpen={open}
                            handleClose={() => setOpen(false)}
                            city={city}
                        />
                        <div style={{ paddingBottom: "10px" }}>
                            <Link to={`/city/${city.id}`}>
                                <button className="btn btn-info" style={{ marginRight: "7px" }} onClick={() => <City city={city} />}>Ver historial</button>
                            </Link>
                            {
                                !city.touristDate ?
                                    <>
                                        <button className="btn btn-warning" style={{ marginRight: "7px" }} onClick={editCity}>Editar</button>
                                        <button className="btn btn-danger" style={{ marginRight: "7px" }} onClick={deleteCity}>Eliminar</button>
                                    </> : ''
                            }

                            
                        </div>
                    </li>
                    {city.touristDate ?
                        <>
                            <span>Fecha de llegada:</span>
                            <li className="list-group-item" style={{ color: 'red' }}>
                                {city.touristDate}
                            </li>
                        </> : ''}


                </ul>

            </div>
        </>
    );

};

export default City;
