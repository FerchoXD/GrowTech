/* eslint-disable react/prop-types */
const SharedSection = ({ img1, img2 }) => {

    return (
        <>
            <section className="shared-section">
                <img className="img-logo" src={img1} alt="Logo Grow Tech"/>
                <img className="img-shared-section" src={img2} alt="Imagen Familia"/>
            </section>
        </>
    )
}

export default SharedSection;