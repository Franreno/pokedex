import styles from './navbar.module.css'
import Image from "next/image";
import Logotipo from "../public/images/logotipoPokedex.svg"

export default function Navbar({isSingular}) {

    let type
    isSingular ? type="singularNav" : type="topNav";

    return (
        <div className = { styles[type] }>
            <div className = {styles.portrait}>
                <Image 
                    src = {Logotipo}
                    className = {styles.img}
                    alt = "Picture of Logotipo"
                    width = {80}
                    height = {80}
                />
            </div>
        </div>
    )
}