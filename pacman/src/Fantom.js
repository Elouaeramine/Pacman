import getRandomIntInclusive from './utils/RandomInt'
import GrilleDef from './utils/GrilleDef'
import { useInterval } from 'usehooks-ts'
import { useEffect, useState } from 'react'

const Fantom = ({classFantome})=> {
    const [x , setX ] = useState(8)
    const [y , setY ] = useState(5)
    const [direction ,setDirection] = useState(0)

    useEffect(() => {
        // Collision incluse
        switch (direction) {
            case 0 :
                if(GrilleDef[y-1][x] !== 0){
                    setX(x+1)
                }
                break;
            case 1 :
                if(GrilleDef[y-1][x-2] !== 0){
                    setX(x-1)
                }
                break;
            case 2:
                if(GrilleDef[y][x-1]){
                    setY(y+1)
                }
                break
            case 3:
                if(GrilleDef[y-2][x-1]){
                    setY(y-1)
                }
                break
        
            default:
                break;
    
        }
    }, [direction])
    


    useInterval(()=>{
        setDirection(getRandomIntInclusive(0,3))
    }, 1000);


    return(
        <div className={classFantome} style ={{gridColumn : x, gridRow :y  }}>

        </div>
    );
}

export default Fantom;