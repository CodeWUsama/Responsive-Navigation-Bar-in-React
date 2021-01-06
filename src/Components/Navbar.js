import { Link } from "react-scroll";
import "./style.css";
export default function () {
    return (
        <div className="navbar">
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Section 1
            </Link>

            <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Section 2
            </Link>

            <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                Section 3
            </Link>
        </div>
    )
}