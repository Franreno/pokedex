import styles from './navbar.module.css'

export default function Navbar({isSingular}) {

    let type
    isSingular ? type="singularNav" : type="topNav";

    return (
        <div className = { styles[type] }>
            <a href="/">
                <div className = {styles.portrait}>
                    <img 
                        src = {"/images/logotipoPokedex.svg"}
                        className = {styles.img}
                    />
                </div>
            </a>
        </div>
    )
}