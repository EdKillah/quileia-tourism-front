import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tourist from './Tourist';
import TouristForm from './TouristForm';



const TouristList = () => {

    const [tourists, setTourists] = useState([]);
    //const [content, setContent]=useState([]);
    let content=[];
    const fetchTourists = () => {

        axios.get("https://quileia-turismo.herokuapp.com/api/v1/tourists/").then(res => {
            console.log("res tourist: ", res);
            setTourists(res.data);                            
        });
    };


    const updateTourists = () => {
        
        tourists.forEach((tourist,i) => {                        
            const cityElement = <Tourist tourist={tourist} key={i} className="col-md-3"/>;                
            content.push(cityElement);                   
            if((i+1)%2===0) {                                
                content.push(<div className="w-100"></div>)
            }
        })
        return content;
    };

    
    useEffect(() => {        
        fetchTourists();        
    }, []);

    
    return (        
        <>
            <h2>Turistas</h2>                                    
            <TouristForm />                    
            {tourists.length>0? <div className="row d-flex justify-content-center"  style={{width:"90%"}}>{updateTourists()}</div>: ''}
            
        </>
    );

};

export default TouristList;