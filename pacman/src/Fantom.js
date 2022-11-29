import getRandomIntInclusive from './utils/RandomInt'
import GrilleDef from './utils/GrilleDef'
import { useInterval, useTimeout } from 'usehooks-ts'
import { useEffect, useState } from 'react'

const Fantom = ({classFantome})=> {
    const [x , setX ] = useState(9)
    const [y , setY ] = useState(11)
    const [direction ,setDirection] = useState(0)

    useEffect(() => {
        switch (direction) {
            case 0 :
                setX(x+1)
                break;
            case 1 :
                setX(x-1)
                break;
            case 2:
                setY(y+1)
                break
            case 3:
                setY(y-1)
                break
        
            default:
                break;
    
        }
        collisionFantome()
    }, [direction])
    


    useInterval(()=>{
        console.log('bouge')
        setDirection(getRandomIntInclusive(0,3))
    }, 1000);

    // Collision 
    const collisionFantome = () => {
        if(direction===0)
        {
            if(GrilleDef[y-1][x-1]===0)
            {
                setX(x-1);
            }
        }
        else if(direction===1)
        {
            if(GrilleDef[y-1][x-1]===0)
            {
                setX(x+1);
            }
        }
        else if(direction===2)
        {
            if(GrilleDef[y-1][x-1]===0)
            {
                setY(y-1);
            }
        }
        else if(direction===3)
        {
            if(GrilleDef[y-1][x-1]===0)
            {
                setY(y+1);
            }
        }
    }

    return(
        <div className={classFantome} style ={{gridColumn : x , gridRow :y}}>

        </div>
    );
}

export default Fantom;