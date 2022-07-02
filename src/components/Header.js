import "./Header.css"
import profil from "../images/pp2.jpg"
import {Link} from "react-router-dom"

function Header(){
    return(
        <div className="header container">
            <div className="topbar">
                <a href="https://twitter.com/rayhanrusyd"><i class="bi bi-twitter"></i></a> <a href="https://github.com/ryuu12"><i class="bi bi-github"></i></a> <a href="mailto:rusydrayhan@gmail.com"><i class="bi bi-envelope-fill"></i></a>
            </div>
            <div className="row">
                <div className="col-25">
                    <img className="profile-pic" src={profil} />
                </div>
                <div className="col-75">
                    <div className="biodata">
                        <h1>Rayhan Rusyd</h1>
                        <p>A Front End developer who love to work and contribute to a web development project.</p>
                        <img className="fr-logo desc-exp" alt="React" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
                        <img className="fr-logo desc-exp" alt="Express" src="https://media.discordapp.net/attachments/616638914530246656/884017264951689296/expressjds.png?width=480&height=480" />
                        <img className="fr-logo desc-exp" alt="Django" src="https://cdn.iconscout.com/icon/free/png-512/django-1-282754.png" />
                        <img className="fr-logo desc-exp" alt="Bootstrap" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" />
                        <div className="sosmed">
                            <a href="https://twitter.com/rayhanrusyd"><i class="bi bi-twitter"></i></a> <a href="https://github.com/ryuu12"><i class="bi bi-github"></i></a> <a href="mailto:rusydrayhan@gmail.com"><i class="bi bi-envelope-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider">
                <Link className="selector" to="/project"><i class="bi bi-grid-3x3-gap-fill"></i> <span>PROJECT</span></Link> <Link className="selector" to="/about"><i class="bi bi-person-circle"></i> <span>ABOUT</span></Link>
            </div>
        </div>
    )
}

export default Header