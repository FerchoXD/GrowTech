import Consejo1 from "../assets/Primer Consejo.svg"
import Consejo2 from "../assets/Segundo Consejo.svg"
import Consejo3 from "../assets/Tercer Consejo.svg"
import Consejo4 from "../assets/Cuarto Consejo.svg"

const Advices = () => {
    return (
        <>
            <div className="padre-plantas">
                <div className="consejos">

                    <div className="consejo">
                        <div className="imagen-consejo">
                            <img src={Consejo1} alt="Primer Consejo" />
                        </div>
                        <div className="texto-consejo">
                            <h2>Regar Adecuadamente: </h2>
                            <br />
                            <p>
                                Asegúrate de entender las necesidades de agua de cada planta. Algunas requieren riego frecuente, mientras que 
                                otras prefieren mantener el suelo más seco. Evita el exceso de riego, ya que puede llevar al encharcamiento y 
                                dañar las raíces.
                            </p>
                        </div>
                    </div>

                    <div className="consejo">
                        <div className="texto-consejo">
                            <h2>Ubicación y luz:</h2>
                            <br />
                            <p>
                            Coloca tus plantas en lugares adecuados según sus necesidades de luz. Algunas plantas prefieren luz directa, mientras
                             que otras se desarrollan mejor en áreas sombreadas. Observa cómo reaccionan tus plantas a la luz y ajústalas en 
                             consecuencia.
                            </p>
                        </div>
                        <div className="imagen-consejo">
                            <img src={Consejo2} alt="Primer Consejo" />
                        </div>
                    </div>

                    <div className="consejo">
                        <div className="imagen-consejo">
                            <img src={Consejo3} alt="Primer Consejo" />
                        </div>
                        <div className="texto-consejo">
                            <h2>Podar y eliminar hojas muertas: </h2>
                            <br />
                            <p>
                                Mantén tus plantas limpias y saludables al podar las partes muertas o enfermas. Esto estimula el crecimiento y 
                                evita que las enfermedades se propaguen.
                            </p>
                        </div>
                    </div>

                    <div className="consejo">
                        <div className="texto-consejo">
                            <h2>Fertilizar de forma adecuada: </h2>
                            <br />
                            <p>
                                Proporciona nutrientes adicionales a tus plantas mediante fertilizantes. Utiliza fertilizantes adecuados para 
                                cada tipo de planta y sigue las indicaciones de aplicación para evitar sobrefertilización.
                            </p>
                        </div>
                        <div className="imagen-consejo">
                            <img src={Consejo4} alt="Primer Consejo" />
                        </div>
                    </div>

                    <div className="ultimo-consejo">
                        <h2>Investiga sobre tus plantas: </h2>
                        <br />
                        <p>
                        Aprende sobre las especies de plantas que tienes en casa. Conoce sus necesidades específicas, su ciclo de crecimiento y
                        sus cuidados especiales. Cuanto más sepas sobre tus plantas, mejor podrás cuidarlas y disfrutar de su belleza.
                        </p>
                        <br />
                        <p>
                        Recuerda que cada planta es única y requiere atención personalizada. Con un poco de cuidado y amor, tus plantas 
                        prosperarán y te llenarán de alegría con su esplendor natural. ¡Disfruta de tu jardín en casa y conecta con la 
                        naturaleza!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advices;
