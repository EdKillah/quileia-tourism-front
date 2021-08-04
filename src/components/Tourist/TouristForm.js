import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './../style/swal.css';


export const TouristForm = (props) => {

    const title = (props && props.title) ? props.title : 'Registrar turista';

    const touristProps = (props && props.tourist) ? props.tourist : null;
    const [id, setId] = useState("");
    const [typeId, setTypeId] = useState("");
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [travelFrequency, setTravelFrequency] = useState(0);
    const [budget, setBudget] = useState(0);
    const [hasCreditCard, setHasCreditCard] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id.length || !typeId.length || !fullName.length || !dateOfBirth.length
            || !travelFrequency.length || !budget || !hasCreditCard) {
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
        var URL = "https://quileia-turismo.herokuapp.com/api/v1/tourists/";
        const tourist = {
            id,
            typeId,
            fullName,
            dateOfBirth,
            travelFrequency,
            budget,
            hasCreditCard
        };
        if (touristProps != null) {
            URL = `https://quileia-turismo.herokuapp.com/api/v1/tourists/${id}`;
            axios.put(URL, tourist, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://quileia-turismo.herokuapp.com",
                }
            })
                .then((res) => Swal.fire('Registro completado.', 'Turista guardada con éxito.', 'success'))
                .catch((err) => {
                    Swal.fire('Error.', `Ha ocurrido el siguiente error registrando el turista: ${err}`, 'error')
                });
        }
        axios.post(URL, tourist, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://quileia-turismo.herokuapp.com",
            }
        })
            .then((res) => Swal.fire('Registro completado.', 'Turista guardada con éxito.', 'success'))
            .catch((err) => {
                Swal.fire('Error.', `Ha ocurrido el siguiente error registrando el turista: ${err}`, 'error')
            });
    };

    return (<>
        <div  className="container w-50">
            <div className="card" >
                <h4 className="card-header" > {title} </h4>
                <form id="task-form"
                    onSubmit={handleSubmit}
                    className="card-body" >
                    <div className="form-control" >
                        <input id="id"
                            name="id"
                            placeholder="id del turista"
                            className="form-control"
                            onChange={
                                (event) => setId(event.target.value)}
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <select
                            id="typeId"
                            name="typeId"
                            className="form-control"
                            onChange={(event) => setTypeId(event.target.value)}>
                            <option value="Default">Tipo de documento</option>
                            <option value="CC">C.C</option>
                            <option value="CE">C.E</option>
                            <option value="TI">T.I</option>
                        </select>
                    </div>
                    <div className="form-control" >
                        <input id="fullName"
                            name="fullName"
                            placeholder="Nombre del turista"
                            className="form-control"
                            onChange={
                                (event) => setFullName(event.target.value)}
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="dateOfBirth"
                            type="date"
                            max={new Date().toISOString().split("T")[0]}
                            name="dateOfBirth"
                            placeholder="Fecha de nacimiento"
                            className="form-control"
                            onChange={
                                (event) => setDateOfBirth(event.target.value)}
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="travelFrecuency"
                            name="travelFrecuency"
                            placeholder="Frecuencia de viaje"
                            type="number"
                            min="0"
                            className="form-control"
                            onChange={
                                (event) => setTravelFrequency(event.target.value)}
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="budget"
                            name="budget"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="Presupuesto de viaje"
                            className="form-control"
                            onChange={
                                (event) => setBudget(event.target.value)}
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <p>¿Tiene tarjeta de credito?</p>
                        <div onChange={
                            (event) => setHasCreditCard(event.target.value)}>
                            <input type="radio" value="true" name="hasCreditCard" /> Sí
                            <br></br>
                            <input type="radio" value="false" name="hasCreditCard" /> No

                        </div>

                    </div>
                    <div className="mt-2" >
                        <button className="btn btn-success btn-block" size="sm" >
                            agregar turista
                        </button> </div> </form> </div> </div> </>
    );


};
export default TouristForm;
