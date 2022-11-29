import Grille from "./Grille";

const Jeu = ({setScore , setPacmanDirection}) => {
    return(
    <div>
        <Grille setScore={setScore} setPacmanDirection={setPacmanDirection}/>
    </div>
    );
}

export default Jeu;