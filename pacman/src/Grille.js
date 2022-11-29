import React from 'react';
import './grille.css'
const Grille = ()=> {
    const mapping = {
        0 : "mur",
        1 :  "sol",
        2 : "bonbon"
    }
    const GrilleDef =[
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
        [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
        [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
        [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
        [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
        [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
        [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
        [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
        [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
        [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
        [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
        [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
        [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
        [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
        [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
        [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
        [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ];

        // for(const ligne in this.GrilleDef){
        //     for(const col in this.GrilleDef[ligne]){
        //         let monElement=document.createElement("div")
        //         if ((this.GrilleDef[ligne][col]) === (0))
        //         {
        //             monElement.classList.add("mur");
        //         }
        //         else if ((this.GrilleDef[ligne][col]) === (1))
        //         {
        //         monElement.classList.add("sol");
        //         }
        //         else if ((this.GrilleDef[ligne][col]) === (2))
        //         {
        //         monElement.classList.add("bonbon");
        //         }
        //         monElement.style.gridColumn=(+col)+1
        //         monElement.style.gridRow=(+ligne)+1
        //     }
        // }


    const renderGrille = (Grille) => {
            const grid1d = [].concat.apply([], Grille)
            return grid1d.map( (el, i) => {
                return <div key={i} className={mapping[el]}></div>
            } );
        }
    

return(
    <div id="grille" style={{gridTemplateColumns: `repeat(${GrilleDef[0].length}, 40px)`, gridTemplateRows : `repeat(${GrilleDef.length} ,40px)`}}>
        {renderGrille(GrilleDef)}
    </div>
);
}

export default Grille; 