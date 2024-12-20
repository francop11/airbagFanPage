import "./NavBar.css";
import logo from '/logo.jpg';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AIRBAG</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#baner">Home</a>
                            <a className="nav-link" href="#sobreNosotros">Sobre nosotros</a>
                            <a className="nav-link" href="#musica">Musica</a>
                            <a className="nav-link" href="#videos">Videos</a>
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;