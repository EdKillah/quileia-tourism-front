import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import City from './City';
import Tourist from '../Tourist/Tourist';
import Swal from 'sweetalert2'
import AddTourist from './AddTourist';

const CityHistorial = () => {

    let { id } = useParams();

    const [city, setCity] = useState(null);


    const fetchTourists = () => {

        try {
            const realId = parseInt(id, 10);
            axios.get(`https://quileia-turismo.herokuapp.com/api/v1/cities/${realId}`).then(res => {                
                setCity(res.data);
            }).catch((err) => {
                console.log("Error al cargar la ciudad", err);
                Swal.fire('¡ERROR!',`Error trayendo la ciudad: ${realId}`,'error');
            });
        } catch (err) {            
            Swal.fire('¡ERROR!','El id debe ser un valor númerico','error');
        }

    };



    useEffect(() => {
        fetchTourists();
    }, []);


    
    return (<>
        <header>
            <h1> Historial de la ciudad con id# {id} </h1>
        </header>
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 text-center">
                    {city != null ? <City city={city} /> : ''}
                    <AddTourist city={id}/>
                </div>
                <div className="col-md-6">
                    <h5> Turistas de {city!= null? city.name: ''}</h5>
                    {
                        city != null ? <>
                            {city.tourists.map(tourist => {                                
                                return <Tourist tourist={tourist} key={tourist.id} style={{ width: "20rem", marginLeft: "30%" }}/>
                            })}
                        </> : ''
                    }
                </div>
            </div>
        </div>

    </>

    );
};


export default CityHistorial;