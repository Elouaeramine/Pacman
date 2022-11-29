import './header.css'
const Header = ({score , pacmanDirection}) => {
    return( 
        <div className="header">
            <p> Score : {score}</p>
            <p> Sens Pacman: {pacmanDirection}</p>
        </div>
    )
}

export default Header;