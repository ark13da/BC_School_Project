import React, { useState,useEffect} from 'react';
import axios from 'axios';
import AnimalCard from './AnimalCard';

const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/animals")
            .then(res => {
                setAnimals(res.data);
            });
    }, []);
    

    return (
        <div className="AnimalList">
            {animals.map(animal =>
                <AnimalCard key={animal.id} {...animal}/>
            )}
        </div>
    );
};

export default AnimalList;