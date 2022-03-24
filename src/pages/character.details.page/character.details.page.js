import React from 'react';
import {useLocation} from "react-router-dom";
import DetailCharacter from "../../components/DetailCharacter/DetailCharacter";

const CharacterDetailsPage = () => {

    const {state} = useLocation();

    return (
        <div>
            <DetailCharacter person={state}/>
        </div>
    );
};

export default CharacterDetailsPage;