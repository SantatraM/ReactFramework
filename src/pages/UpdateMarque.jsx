import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateMarque } from '../services/MarqueService';


const PopUpUpdateMarque = props => {
  const navigate = useNavigate(); 

  const formDataUpdate = new FormData();
  formDataUpdate.append('idmarque', props.idmarque);

  const [formData, setFormData] = useState ({
    "nommarque": props.nommarque,
    "datesortie": props.datesortie,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(formData.nommarque!=null){
      formDataUpdate.append("nommarque", formData.nommarque);
    }else{
      formDataUpdate.append("nommarque", props.nommarque);
    }

    if(formData.nommarque!=null){
      formDataUpdate.append("datesortie", formData.datesortie);
    }else{
      formDataUpdate.append("datesortie", props.datesortie);
    }
    
    try {
      // console.log(formData);
      // console.log(formDataUpdate);
      const update = await updateMarque(formDataUpdate);
      if(update){
        window.location.reload();
        // navigate("/");
      }else{
        alert(update);
        console.log(update);
      }
    } catch (error) {
        console.log(error);
    }
    
  };

  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <label>
          Nom Marque : 
          <input type="text" name="nommarque" value={formData.nommarque} onChange={handleInputChange} />
        </label>
        <br/>
        <label>
          Date sortie:
          <input type="text" name="datesortie" value={formData.datesortie} onChange={handleInputChange} />
        </label>
        <br/>
        <button type="submit">Mettre a Jour</button> 
      </form>
    </div>
  );
}

PopUpUpdateMarque.propTypes = {
    idmarque : PropTypes.string,
    nommarque : PropTypes.string,
    datesortie : PropTypes.string,
}

export default PopUpUpdateMarque;