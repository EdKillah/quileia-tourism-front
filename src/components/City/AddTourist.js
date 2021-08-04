import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddTourist = (props) => {

    const city = props.city;
    const [touristId, setTouristId] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!touristId.length || !date.length) {
            Swal.fire('Campos incompletos.', 'Completa todos los campos por favor.', 'error');
        } else {
            try {
                sendReport();
            } catch (e) {
                console.log("error en el formulario: ", e);                
            }
        }
    };


    const sendReport = () => {        
        const touristRequest = {
            touristId,
            date            
        };
        if (city != null) {          
            console.log("data: ",touristRequest);
            console.log("city: ",city);
            const URL = `https://quileia-turismo.herokuapp.com/api/v1/cities/addTourist/${city}`;            
            axios.post(URL, touristRequest, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://quileia-turismo.herokuapp.com",
                }
            })
                .then((res) => Swal.fire('Registro completado.', 'Turista guardado con éxito.', 'success'))
                .catch((err) => {
                    Swal.fire('Error.', 
                    `Ha ocurrido el siguiente error agregando el turista: ${err}`,
                    'error')
                });
        }        
    };


    return (
        <>
            <div className="card" style={{ width: "25rem", marginLeft: "80px", marginTop:"10px"}}>
                <h4 className="card-header"> Agregar turista </h4>
                <form id="task-form"
                    onSubmit={handleSubmit}
                    className="card-body" >
                    <div className="form-control" >
                        <input id="id"
                            name="id"
                            placeholder="id del turista"
                            className="form-control"
                            onChange={
                                (event) => setTouristId(event.target.value)}
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="dateOfBirth"
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            name="dateOfBirth"
                            placeholder="Fecha de nacimiento"
                            className="form-control"
                            onChange={
                                (event) => setDate(event.target.value)}
                        />
                    </div>

                    <div className="mt-2" >
                        <button className="btn btn-success btn-block"
                            size="sm" >
                            agregar ciudad
                        </button>
                    </div>
                </form>
            </div>
        </>
    );

};

export default AddTourist;