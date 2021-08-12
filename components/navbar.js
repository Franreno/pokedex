import styles from './navbar.module.css'
import Image from "next/image";
import Logotipo from "../public/images/logotipoPokedex.svg"
import Search from '../components/search';

export default function Navbar() {
    return (
        <div className = {styles.topnav}>
            <div className = {styles.portrait}>
                <Image 
                    src = {Logotipo}
                    className = {styles.img}
                    alt = "Picture of Logotipo"
                    width = {150}
                    height = {150}
                />
            </div>
            
        </div>
    )
}