import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Service from './Service'
import Gallery from './Gallery'
import Proudect from './Proudect'
import Review from './CustamersReview'
import { Planets } from 'react-preloaders2';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from './logo512.png'



function Home() {

    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        document.title = 'Home Page';

        try {
            axios.get('banner/')
                .then((res) => {
                    setBannerData(res.data)

                });

        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetch('banner/')
            .then(response => response.json())
            .then(json => {
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            });
    }, []);

    return (

        <div className='App'>
            
            <div>
                
            <Planets customLoading={loading} animation="slide-down" time={3000} />
            <FloatingWhatsApp phoneNumber={9096907864} accountName={'EAGLE EYE Computers'} avatar={avatar} notificationSound={true} chatboxClassName='floating-whatsapp-chatbox' allowClickAway={true} placeholder={'Type a message..'} statusMessage={'Contact You'} chatMessage={'Hello there! 🤝 \nHow can we help You?'} />
            
            </div>
            <div>
                <div id="carouselExampleControls" className="carousel slide ml-2 mr-2 mt-2 mb-2" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        {bannerData && bannerData.map((banner, index) =>
                            <div key={index} className="carousel-item active">

                                <img src={banner.img} className="img-fluid shadow-4 image-resize-Banner" alt={banner.alt_text} />
                            </div>
                        )}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
                <div className="mt-5 md-5 ">
                    <Service />
                </div>


                <div className="mt-5 md-5 ">
                    <Gallery />
                </div>

                <div className='md-5 mt-5'>
                    < Proudect />
                </div>

                <div className='md-5 mt-5'>
                    < Review />
                </div>



            </div>
        </div>

    );
}

export default Home;