import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Planets } from 'react-preloaders2';


function Proudect() {

  const [proudectData, setProudectData] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {

    document.title = 'Proudect Page';

    try {
      axios.get('proudect/')
        .then((res) => {
          setProudectData(res.data)

        });

    } catch (error) {
      console.log(error);
    }
  }, []);

  // useEffect(() => {
  //   fetch('proudect/')
  //     .then(response => response.json())
  //     .then(json => {
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //     });
  // }, []);

  return (


    <div>
      <div className="intro">
        <h2 className="text-center mt-3 text-white"> Proudect </h2>
      </div>

      <div className="container d-flex justify-content-center mt-50 mb-50 mt-2 ">
        
        <div className="row row-cols-2 ">
          {proudectData.map((proudect, index) =>
            <div className="col-md-4 mt-2" key={index}>

              <div className="card">
                <div className="card-body">
                  <div className="card-img-actions">

                    <img src={proudect.img} className="card-img img-fluid image-resize-Proudect " style={{width: '96', height: '350' }} alt={proudect.alt_text} />
                  </div>
                </div>

                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h4 className="font-weight-semibold mb-2">
                      {proudect.p_name}
                    </h4>
                    {proudect.details}
                  </div>

                  <h3 className="mb-0 font-weight-semibold"><b>₹</b> &nbsp; {proudect.price}</h3>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default Proudect