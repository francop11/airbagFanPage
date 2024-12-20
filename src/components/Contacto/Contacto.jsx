import "./Contacto.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';  // Importa el icono de Facebook y Instagram

const Contacto = () => {
    return (
        <section className="container-fluid  contacto">
            <h4  id="contacto"  className="texto-contacto">
                CONTACTO 
            </h4>
            <p>
                <a href="https://www.facebook.com/AIRBAG.OFICIAL" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="face" />
                </a>
                <a href="https://www.instagram.com/airbag.oficial/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="insta" />
                </a>
            </p>
            <p  className="parrafo">Sigue a la banda en sus redes sociales</p>
             <span  className="copy">&copy;fan page sin fines de lucro ni comerciales.</span>
             <p  className="franco">by Franco Rodrigo Paez</p>
            <div className="row">
                <div className="col-sm-6 col-lg-6">
                    <div>
                        {/* Aquí puedes poner más contenido */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;