import { NavLink } from "react-router-dom";
import image from "../../../assets/Slide.png"

const Slide = () => {
    return (
        <div style={{
            backgroundColor:"#f4efe9"
        }} className="slide">

            <div className="part">
                <h2>
                    Stan Smith,<br /> Forever!
                </h2>

                <NavLink to="/">
                    Купить
                </NavLink>
            </div>

            <img src={image} alt="React Sneakers" />

        </div>
    );
}

export default Slide;