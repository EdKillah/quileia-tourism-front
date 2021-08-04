import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Tourist from './Tourist';
import City from '../City/City';

const CityHistorial = () => {

    let { id } = useParams();

    const [tourist, setTourist] = useState(null);


    const fetchTourists = () => {

        try {
            axios.get(`https://quileia-turismo.herokuapp.com/api/v1/tourists/${id}`).then(res => {
                console.log("res tourist HISTORIAL: ", res);
                setTourist(res.data);
            }).catch((err) => {
                console.log("Error al cargar el turista", err);
                alert("Error al cargar el turista");
            });
        } catch (err) {
            alert("No se puede parsear el id: ", id);
        }



    };




    useEffect(() => {
        fetchTourists();
    }, []);



    return (<>
        <header>
            <h1> Historial del turista con id# {id} </h1>
        </header>
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 text-center">
                    {tourist != null ? <Tourist tourist={tourist} /> : ''}
                </div>
                <div className="col-md-6">
                    {
                        tourist != null ? <>

                            {tourist.touristInCityDTO.map(city => {
                                console.log("City de tourist: ", city);
                                return <City city={city.city} key={city.city.id} touristDate={city.date} style={{ width: "20rem", marginLeft: "30%" }} />
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