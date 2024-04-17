import React, { useState, useEffect } from 'react';
import Marque from '../composants/Marque';
import { selectMarque } from '../services/MarqueService';
import Header from '../composants/Header';

const SelectMarque = ({ id }) => {
    const [marques, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await selectMarque();
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
                                            <th>idmarque</th><th>nommarque</th><th>datesortie</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        {marques.map((marque, index) => (
                                            <Marque key={index}
                                                idmarque={marque.idmarque}
                                                nommarque={marque.nommarque}
                                                datesortie={marque.datesortie} />
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

export default SelectMarque;
