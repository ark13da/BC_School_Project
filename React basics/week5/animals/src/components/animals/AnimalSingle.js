import React, { useEffect,useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const AnimalSingle = () => {
    let { id } = useParams();
    const [animal, setAnimal] = useState();
    let history = useHistory();
    
    useEffect(() => {
        if (!animal) {
            axios.get("http://localhost:3001/animals/" + id).then((res) => {
              setAnimal(res.data);
            });
        }
    })

    let animalData = undefined;
    if (!animal) {
        animalData = <div>Loading...</div>
    } else {
        animalData = (
            <>
                <h1>{animal.name}</h1>
                <button onClick={()=> history.goBack()}>Go back</button>
            </>
        )
    }
    return (
        <div>
            {animalData}
        </div>
    );
};

export default AnimalSingle;