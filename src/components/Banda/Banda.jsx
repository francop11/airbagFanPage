import "./Banda.css";
import banda from '/banda.jpg';

const Banda = () => {
    return (
        <section className="container-fluid">
            <div className="row">
                <h1 className="texto-sobreNostros" id="sobreNosotros">Sobre nosotros</h1>
                <div className="col-sm-6 col-lg-6">
                    <div className="texto-airbag">
                        <p>Airbag es una banda argentina de rock fundada en la ciudad de Don Torcuato, Argentina en el año 1999.</p>
                        <p>La banda fue fundada y es integrada por tres hermanos: Gastón Sardelli, Patricio Sardelli y Guido Sardelli.</p>
                        <p>Empezaron a tocar juntos a mediados de los años noventa bajo el nombre de Los Nietos de Chuck, donde hacían covers de Chuck Berry, The Beatles y Creedence, entre otros.</p>
                        <p>La formación cuenta con el cantante y guitarrista principal Patricio Sardelli, el guitarrista rítmico y cantante Guido Sardelli, el bajista Gastón Sardelli y sus respectivos músicos sesionistas; el tecladista José Luis Berrone y el baterista Sebastián Roascio Goldar.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-6">
                    <img className="imagen-banda" src={banda} alt="Banda Airbag" />
                </div>
            </div>
        </section>
    );
}

export default Banda;