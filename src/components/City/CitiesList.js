import React, { useEffect, useState } from 'react';
import axios from 'axios';
import City from './City';
import CityForm from './CityForm';



const CitiesList = () => {

    const [cities, setCities] = useState([]);
    //const [content, setContent]=useState([]);
    let content=[];
    const fetchTourists = () => {

        axios.get("https://quileia-turismo.herokuapp.com/api/v1/cities/").then(res => {
            console.log("res city: ", res);
            setCities(res.data);                            
        });
    };


    const updateCities = () => {
        
        cities.forEach((city,i) => {                        
            const cityElement = <City city={city} key={i} className="col-md-2"/>;                
            content.push(cityElement);                   
            if((i+1)%2===0) {                                
                content.push(<div className="w-90"></div>)
            }
        })
        return content;
    };

    
    useEffect(() => {        
        fetchTourists();        
    }, []);

    
    return (        
        <>
            <h2>Ciudades</h2>                                    
            <CityForm />        
            <br />
            {cities.length>0? <div className="row d-flex justify-content-center" style={{width:"90%"}}>{updateCities()}</div>: ''}
            
        </>
    );

};

export default CitiesList;