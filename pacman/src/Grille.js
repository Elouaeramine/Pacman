import React, { useState } from 'react';
import './grille.css'
import GrilleDef  from './utils/GrilleDef';
import Fantom from './Fantom';
import Pacman from './Pacman';


const Grille = ({setScore , setPacmanDirection})=> {
    const [pacmanPosition , setPacmanPosition] = useState(0)

    const mapping = {
        0 : "mur",
        1 :  "sol",
        2 : "bonbon"
    }


    const renderGrille = (Grille) => {
            const grid1d = [].concat.apply([], Grille)
            return grid1d.map( (el, i) => {
                return <div key={i} style={{gridColumn : (i%19) +1 , gridRow : Math.floor(i/19) +1}} className={mapping[el]}></div>
            } );
        }
    

return(
    <div id="grille" style={{gridTemplateColumns: `repeat(${GrilleDef[0].length}, 40px)`, gridTemplateRows : `repeat(${GrilleDef.length} ,40px)`}}>
        {renderGrille(GrilleDef)}
        <Fantom classFantome="fantome-bleu" pacmanPosition={pacmanPosition}/>
        <Fantom classFantome="fantome-rouge" pacmanPosition={pacmanPosition}/>
        <Fantom classFantome="fantome-orange" pacmanPosition={pacmanPosition}/>
        <Fantom classFantome="fantome-vert" pacmanPosition={pacmanPosition}/>
        <Pacman setScore={setScore} setPacmanDirection={setPacmanDirection} setPacmanPosition={setPacmanPosition}/>
    </div>
);
}

export default Grille; 