import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertVoiture } from '../services/VoitureService.jsx';
import { selectMarque } from '../services/MarqueService.jsx';
import Header from '../composants/Header.jsx'; // Assuming Header component is located in the same directory
import { Link } from 'react-router-dom';

function InsertVoiture() {
    const [formData, setFormData] = useState({
        designation: '',
        marque: ''
    });

    const [marques, setMarques] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await selectMarque();
            setMarques(data);
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFormSubmit = async () => {
        const formDataInsert = new FormData();
        formDataInsert.append('designation', formData.designation);
        // console.log(formData.marque);
        formDataInsert.append('marque', formData.marque);
        const insert = await insertVoiture(formDataInsert);
        if (insert === true) {
            navigate('/selectvoiture');
        } else {
            alert("insert");
            console.log(insert);
        }

    };

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
            <Header />
            <div className="content-wrapper" id="choix">
      <div className="container-xxl flex-grow-1 container-p-y" >
              <div className="row">
                <div className="col-xl">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="mb-3 row">
                        <label className="col-md-2 col-form-label">Designation</label>
                        <input
                            type="text"
                            className="form-control"
                            name="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                        />
                      </div>

            <div className="mb-3" >
                <label className="form-label">marque</label>
                <select className="form-select" name="marque" onChange={handleSelectChange}>
                    {marques.map((marque, index) => (
                        <option key={index} value={marque.idmarque}>
                            {marque.nommarque}
                        </option>
                    ))}
                </select>
            </div>

            <button onClick={handleFormSubmit}  className="btn btn-primary">Inserer</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default InsertVoiture;
