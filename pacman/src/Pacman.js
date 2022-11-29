import { useState } from "react";

const Pacman = ( ) => {
    const [x,setX] = useState(5);
    const [y,setY] = useState(2)
    const [direction, setDirection] = useState(0)

    const bougePacMan = () => {
        switch(direction) {
            case 0 :
                setX(x-1)
                break;
            case 1 :
                setX(x+1)
                break;
            case 2:
                setY(y-1)
                break
            case 3:
                setY(y+1)
                break
        
            default:
                break;                
        }
    }
    return (
        <div></div>
    )
}

export default Pacman;