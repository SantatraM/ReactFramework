import { React, useState, prevState } from 'react';
import { PropTypes } from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';
import { deleteMarque } from '../services/MarqueService';
import Header from '../composants/Header.jsx';
import PopUpUpdateMarque from '../pages/UpdateMarque.jsx';

const Marque = props => {
    const [showPopup, setShowPopup] = useState(false);
    const formDataDelete = new FormData();
    formDataDelete.append('idmarque', props.idmarque);

    const navigate = useNavigate();
    const handleFormSubmit = async () => {
        try {
            const suppr =  await deleteMarque(formDataDelete);
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
        <td>{props.idmarque}</td><td>{props.nommarque}</td><td>{props.datesortie}</td>
        <td><button onClick={openPopup}>modifier</button></td>
            <td><button onClick={handleFormSubmit}>supprimer</button></td>{showPopup && <PopUpUpdateMarque onClose={closePopup} idmarque={props.idmarque} nommarque={props.nommarque} datesortie={props.datesortie} />}
        </tr> 
    //    </div>
    );
};

Marque.propTypes = {
    
    idmarque : PropTypes.string,
    nommarque : PropTypes.string,
    datesortie : PropTypes.string,
}


export default Marque;
