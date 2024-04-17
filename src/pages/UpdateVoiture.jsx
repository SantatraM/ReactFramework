import React , {useState, useEffect } from 'react';
import { Link , useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateVoiture } from '../services/VoitureService';
import {selectMarque} from '../services/MarqueService';
import Header from '../composants/Header.jsx';

const PopUpUpdateVoiture = props => {
    
       const [marques, setmarques] = useState([]); 
        useEffect(() => { 
            const fetchData = async () => { 
            const marquesData = await selectMarque(); 
            setmarques(marquesData); 
        }; 
        fetchData(); 
    }, []); 


  const formDataUpdate = new FormData();
  formDataUpdate.append('idvoiture', props.idvoiture);


  const [formData, setFormData] = useState ({
    "designation": props.designation, 
"marque": props.marque || '', 

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formDataUpdate);
      if(formData.designation != null) {
      formDataUpdate.append( "designation", formData.designation)
  }else{ 
      formDataUpdate.append( "designation", props.designation)
  } 
  if(formData.marque != null) {
      formDataUpdate.append( "marque", formData.marque)
  }else{ 
      formDataUpdate.append( "marque", props.marque)
  } 

    
    try {
      const update = await updateVoiture(formDataUpdate);
      if(update){
        window.location.reload();
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
      <form onSubmit={handleSubmit}>
        <label>
          Designation : 
          <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} />
        </label>
        <br/>
        <label>
          marque:
          <select name="marque" value={formData.marque} onChange={handleSelectChange}>
              <option value="">Sélectionnez une marque</option>
              {marques.map((marque, index) => (
                  <option key={index} value={marque.idmarque}>
                      {marque.nommarque} 
                  </option>
              ))}
          </select>
        </label>
        <br/>
        <button type="submit">Mettre a Jour</button> 
      </form>
    </div>
  );
}
PopUpUpdateVoiture.propTypes = {
  idvoiture : PropTypes.string,
  designation : PropTypes.string,
  marque : PropTypes.string
}

export default PopUpUpdateVoiture;
