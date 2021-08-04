import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './../style/swal.css';

export const CityForm = (props) => {

    const title = (props && props.title) ? props.title : 'Registrar ciudad';
    const cityProps = (props && props.city) ? props.city : null;
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [population, setPopulation] = useState(0);
    const [touristicPlace, setTouristicPlace] = useState("");
    const [touristicHotel, setTouristicHotel] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id.length || !name.length || !population.length || !touristicPlace.length || !touristicHotel.length) {
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
        var URL = "https://quileia-turismo.herokuapp.com/api/v1/cities/";
        const city = {
            id,
            name,
            population,
            touristicPlace,
            touristicHotel
        };
        if (cityProps != null) {
            URL = `https://quileia-turismo.herokuapp.com/api/v1/cities/${id}`;
            axios.put(URL, city, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "https://quileia-turismo.herokuapp.com",
                }
            })
                .then((res) => Swal.fire('Registro completado.', 'Ciudad guardada con éxito.', 'success'))
                .catch((err) => {
                    Swal.fire('Error.', `Ha ocurrido el siguiente error registrando la ciudad: ${err}`, 'error')
                });
        }
        axios.post(URL, city, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://quileia-turismo.herokuapp.com",
            }
        })
            .then((res) => Swal.fire('Registro completado.', 'Ciudad guardada con éxito.', 'success'))
            .catch((err) => {
                Swal.fire('Error.', `Ha ocurrido el siguiente error registrando la ciudad: ${err}`, 'error')
            });
    };

    return (<>
        <div className="container w-50" >
            <div className="card" >
                <h4 className="card-header" > {title} </h4>
                <form id="task-form"
                    onSubmit={handleSubmit}
                    className="card-body" >
                    <div className="form-control" >
                        <input id="id"
                            name="id"
                            placeholder="id de la ciudad"
                            className="form-control"
                            onChange={
                                (event) => setId(event.target.value)}                            
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="name"
                            name="name"
                            placeholder="Nombre de ciudad"
                            className="form-control"
                            onChange={
                                (event) => setName(event.target.value)}                            
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="population"
                            name="population"
                            placeholder="Población de la ciudad"
                            className="form-control"
                            onChange={
                                (event) => setPopulation(event.target.value)}                            
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="touristicPlace"
                            name="touristicPlace"
                            placeholder="Lugar turistico de la ciudad"
                            className="form-control"
                            onChange={
                                (event) => setTouristicPlace(event.target.value)}                            
                            autoFocus />
                    </div>
                    <div className="form-control" >
                        <input id="touristicHotel"
                            name="touristicHotel"
                            placeholder="Hotel popular de la ciudad"
                            className="form-control"
                            onChange={
                                (event) => setTouristicHotel(event.target.value)}                            
                            autoFocus />
                    </div>
                    <div className="mt-2" >
                        <button className="btn btn-success btn-block"
                            size="sm" >
                            agregar ciudad
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );


};
export default CityForm;