import styles from './navbar.module.css'

export default function Navbar({isSingular}) {

    const prefix = '/pokedex';

    let type
    isSingular ? type="singularNav" : type="topNav";

    return (
        <div className = { styles[type] }>
            <a href="/pokedex">
                <div className = {styles.portrait}>
                    <img 
                        src = { prefix + "/images/logotipoPokedex.svg"}
                        className = {styles.img}
                    />
                </div>
            </a>
        </div>
    )
}