import { useEffect, useState, useRef } from "react";
import GrilleDef from "./utils/GrilleDef";
const Pacman = ({setScore , setPacmanDirection ,setPacmanPosition}) => {
    const [x,setX] = useState(5);
    const [y,setY] = useState(2)
    const [bonbon , setCompteBonbon] =useState(0)
    const [direction, setDirection] = useState(0)
    const inputReference = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    }, []);



    const bougePacMan = (direction) => {
        switch (direction) {
            case 0 :
                if(x  <= 0){
                    setX(GrilleDef[0].length)
                }
                if(GrilleDef[y-1][x-2] !== 0){
                    setX(x-1)
                }
                break;
            case 1 :
                if(x >= GrilleDef[0].length){
                    setX(1)
                }
                if(GrilleDef[y-1][x] !== 0){
                    setX(x+1)
                }
                break;
            case 2:
                if(y>= GrilleDef.length){
                    setY(1)
                }
                if(GrilleDef[y-2][x-1]){
                    setY(y-1)
                }
                break
            case 3:
                if(y<=0){
                    setY(GrilleDef.length)
                }
                if(GrilleDef[y][x-1]){
                    setY(y+1)
                }
                break
        
            default:
                break;          
        }
        mangeBonbon()
    }

    const  appuieTouche =(event)=>{
     console.log(event.key);
        switch(event.key)
        {
        case"q":
        case"Q":
            bougePacMan(0)
            setDirection(0)
            setPacmanPosition({x,y})
        break;
        case"d":
        case"D":
            bougePacMan(1)
            setDirection(1)
            setPacmanPosition({x,y})

        break;
        case"z":
        case"Z":
            bougePacMan(2)
            setDirection(2)
            setPacmanPosition({x,y})

        break;
        case"s":
        case"S":
            bougePacMan(3)
            setDirection(3)
            setPacmanPosition({x,y})

        break;
        default:
            break; 
        }
    }    

    const compteBonbon =()=> {
        for(const ligne in GrilleDef)
        {
          for(const col in GrilleDef[ligne])
          {
            if(GrilleDef[ligne][col]===2)
            {
             setCompteBonbon((bonbon) =>bonbon+1);
            }
          }
        }
    }


    
    const mangeBonbon = () =>{ 
        if(GrilleDef[y-1][x-1] === 2)
        {
          GrilleDef[y-1][x-1] = 1;
          setCompteBonbon(bonbon -1);
          setScore((score) => score+1);

        }
    }

    useEffect(() => {
        switch(direction) {
            case 0 :
                setPacmanDirection("Recule")
                break
            case 1 : 
                setPacmanDirection("Avance")
                break
            case 2 : 
                setPacmanDirection("Monte")
                break
            case 3 : 
                setPacmanDirection("Descend")
                break
            default:
                break
        }
    }, [direction]) 

    return (
        <div className="pacman" tabIndex={0} ref={inputReference} style={{gridColumn : x, gridRow: y}} onKeyDown={appuieTouche}>

        </div>
    )
}

export default Pacman;