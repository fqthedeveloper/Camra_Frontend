import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'


function Service() {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {

        document.title = 'Services Page';

        try {
            axios.get( 'service/')
                .then((res) => {
                    setServiceData(res.data)

                });

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
            <div className='App'>
                <div className="container ">
                    <div className="intro ml-2 mr-2 mt-2 mb-2">
                        <h2 className="text-center text-white"> Service </h2>
                    </div>
                    <div className='row row-cols-2 row-cols-md-2 '>
                        {serviceData && serviceData.map((service, index) =>
                            <div key={index} className="card mt-2 mb-2">
                                <img src={service.img} className="card-img-top image-resize-Service " alt={service.alt_text} />
                                <div className="card-body ">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.detail}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    );
}

export default Service;