import { useState } from "react";

const ComponentHome = () => {

    const home = <p className="p-principal">Grow Tech es una pequeña empresa dedicada al desarrollo y fabricación de productos para el monitoreo
    y cuidado de plantas domésticas. Nuestra misión es proporcionar soluciones innovadoras y tecnológicas que permitan a los amantes de las 
    plantas tener un mayor control y comprensión de las necesidades de sus vegetales.
    Nuestro producto principal es un dispositivo de monitoreo inteligente y fácil de usar que se conecta a las macetas o tiestos de las plantas. A través de sensores avanzados, nuestro dispositivo es capaz de medir y registrar datos importantes para el crecimiento saludable de las plantas, como la temperatura, humedad del suelo, humedad del ambiente y la intensidad de la luz.
    Los datos recopilados por el dispositivo son enviados a una aplicación móvil intuitiva y amigable, donde los usuarios pueden ver y analizar 
    la información en tiempo real. Además, la aplicación ofrece recomendaciones y consejos personalizados para el cuidado de cada tipo de 
    planta, basados en su especie y las condiciones ambientales específicas.
    </p>

    const aboutUs = <p className="p-principal">En Grow Tech, creemos que las plantas tienen el poder de transformar los espacios y mejorar la 
    calidad de vida de las personas. Nuestro propósito es acercar la tecnología a la naturaleza, para que puedas disfrutar de la experiencia de 
    cultivar tus plantas de manera sencilla y gratificante. Queremos ayudarte a crear espacios verdes en tu hogar, donde puedas relajarte, 
    conectarte con la naturaleza y cultivar un ambiente saludable.
    Nuestra visión es ser líderes en el mercado del cuidado de plantas domésticas, reconocidos por la calidad y confiabilidad de nuestros 
    productos. Queremos ser un referente en la industria, aportando innovación y excelencia en cada aspecto de nuestro trabajo. Aspiramos a 
    inspirar a más personas a cultivar sus propias plantas, cultivar un estilo de vida más verde y crear un impacto positivo en el mundo.
    </p>

    const contactUs = <p className="p-principal">
        Si tienes alguna pregunta, comentario o simplemente deseas obtener más información sobre nuestros productos y servicios, no dudes en 
        ponerte en contacto con nosotros. En Grow Tech, valoramos la comunicación con nuestros clientes y estamos aquí para ayudarte en todo lo 
        que necesites.
        Puedes contactarnos a través de los siguientes medios:
        Correo Electrónico: info@growtech.com
        Teléfono: +52 (961) 452-0080
        Nuestro equipo de atención al cliente estará encantado de atenderte y brindarte asistencia personalizada. Si tienes alguna consulta sobre
         nuestros dispositivos de monitoreo, consejos para el cuidado de tus plantas o cualquier otra inquietud relacionada, no dudes en 
         comunicarte con nosotros.
    </p>

    const [linkText, setLinkText] = useState(home)

    const handleLinkClickHome = (e) => {
        e.preventDefault();
        setLinkText(home)
    }

    const handleLinkClickAboutUs = (e) => {
        e.preventDefault();
        setLinkText(aboutUs)
    }

    const handleLinkClickContactUs = (e) => {
        e.preventDefault();
        setLinkText(contactUs)
    }

    return (
        <>
            <ul className="navbar-principal">
                <li className="li-principal"><a onClick={handleLinkClickHome} className="a-principal">Grow Tech</a></li>
                <li className="li-principal"><a onClick={handleLinkClickAboutUs} className="a-principal">Sobre Nosotros</a></li>
                <li className="li-principal"><a onClick={handleLinkClickContactUs} className="a-principal">Contáctenos</a></li>
            </ul>
            {linkText}
        </>
    )
}

export default ComponentHome;