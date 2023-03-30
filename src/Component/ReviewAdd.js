import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



function ReviewAdd() {

    const [custamerData, setCustamertData] = useState({

        'custamer_name': '',
        'img': '',
        'reviwe': '',
        'status': '',
    });

    const handleChange = (event) => {
        setCustamertData({
            ...custamerData,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange = (event) => {
        setCustamertData({
            ...custamerData,
            [event.target.name]: event.target.files[0]
        });
    }

    const submitForm = () => {
        const custamerFormData = new FormData();
        custamerFormData.append("custamer_name", custamerData.custamer_name)
        custamerFormData.append("reviwe", custamerData.reviwe)
        custamerFormData.append("img", custamerData.img)

        try {
            axios.post('custameradd/', custamerFormData).then((response) => {
                setCustamertData({
                    'custamer_name': '',
                    'reviwe': '',
                    'img': '',
                    'status': 'success',
                });
            });
        } catch (error) {
            setCustamertData({ 'status': 'error' })
        }
    };

    useEffect(() => {

        document.title = 'Reviews Add';
    })
    return (
        <div className="container">
            <div className="mt-4 md-6">
                <div className="col-10 container">
                    <div className="card">
                        <h5 className="card-header">Reviews </h5>
                        <div className="card-body">
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            {custamerData.status === 'success' && <h3 className='text-success'>Thanks For Adding Reviews </h3>}
                            {custamerData.status === 'error' && <h3 className='text-danger'>Something Wrong Happend</h3>}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label float-start">Full Name</label>
                                <input type="text" onChange={handleChange} className="form-control" id="exampleInputText" name="custamer_name" aria-describedby="emailHelp" />
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupFile01">Upload Image</label>
                                <input type="file" onChange={handleFileChange} className="form-control" id="inputGroupFile01" name="img" />
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label float-start">Reviwe</label>
                                <textarea rows="10" name="reviwe" className="form-control" placeholder="Enter Masseg Here " onChange={handleChange}></textarea>
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={submitForm} type="submit" className="btn btn-primary text-start">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewAdd