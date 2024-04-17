import { React } from 'react';
import Voiture from '../composants/Voiture';
import { useState, useEffect } from 'react';
import { selectVoiture } from '../services/VoitureService';
import Header from '../composants/Header';

const SelectVoiture = ({ id }) => {
    const [voitures, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await selectVoiture();
            setData(data);
        };
        fetchData();
    }, []);



    return (
    <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
        <Header />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="card">
                        <div className="text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                      <th>idvoiture</th><th>designation</th><th>marque</th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                   { voitures.map((voiture,index) => (
                                     <Voiture key={index} 
                                 idvoiture = { voiture.idvoiture}
                                 designation = { voiture.designation}
                                 marque = { voiture.marque} />
                                   ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SelectVoiture;
