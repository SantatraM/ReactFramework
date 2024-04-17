import { React, useState, prevState } from 'react';
import { PropTypes } from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
import { deleteVoiture } from '../services/VoitureService';
import Header from '../composants/Header.jsx';
import PopUpUpdateVoiture from '../pages/UpdateVoiture';


const Voiture = props => {
    const [showPopup, setShowPopup] = useState(false);
    const formDataDelete = new FormData();
    formDataDelete.append('idvoiture', props.idvoiture);

    const navigate = useNavigate();
    const handleFormSubmit = async () => {
        try {
            const suppr =  await deleteVoiture(formDataDelete);
            if(!suppr){
                alert(suppr);
            }else{
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    
    return (
        // <div>
        <tr>
        <td>{props.idvoiture}</td><td>{props.designation}</td><td>{props.marque.nommarque}</td>
        <td><button onClick={openPopup}>modifier</button></td>
            <td><button onClick={handleFormSubmit}>supprimer</button></td>{showPopup && <PopUpUpdateVoiture onClose={closePopup} idvoiture={props.idvoiture} designation={props.designation} marque={props.marque.nommarque} />}
        </tr> 
    //    </div>
    );
};

Voiture.propTypes = {
    
    idvoiture : PropTypes.string,
    designation : PropTypes.string,
    marque : PropTypes.string,
}


export default Voiture;
