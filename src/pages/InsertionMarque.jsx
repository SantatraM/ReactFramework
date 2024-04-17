import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertMarque } from '../services/MarqueService.jsx'; 

import Header from '../composants/Header.jsx';

function InsertMarque() {
    const formDataInsert = new FormData();

    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
    });

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    

    const handleFormSubmit = async () =>{
      formDataInsert.append('nommarque', formData.nommarque);
      formDataInsert.append('datesortie', formData.datesortie);

        const insert = insertMarque(formDataInsert);

      if(insert==true){
        alert("huhu");
        navigate("/selectmarque");
      }else{
        alert("h");
        console.log(insert)
      }
    }

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
                        <label className="col-md-2 col-form-label">nommarque</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nommarque"
                            value={formData.nommarque}
                            onChange={handleInputChange}
                        />
                      </div>
                        
                      <div className="mb-3 row">
                          <label className="col-md-2 col-form-label">datesortie</label>
                          <input
                              type="date"
                              className="form-control"
                              name="datesortie"
                              id="html5-date-input"
                              value={formData.datesortie}
                              onChange={handleInputChange}
                          />
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

export default InsertMarque;
