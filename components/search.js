import styles from './search.module.css'
import { Button, TextField } from '@material-ui/core';
import { useRouter } from "next/router";
import { useState } from 'react';

export default function Search() {
    const [data, setData] = useState(null);
    const router = useRouter();

    const GoToPokemonPage = () => {
        if (data != null) {
            router.push(`/${data}`);
        }
    }

    const handleTextChange = (text) => {
        setData(text.target.value.toLowerCase())
    }

    const handleEnterPress = e => {
        //Triggers by pressing enter key (13)
        if(e.charCode === 13) {
            GoToPokemonPage();
        }
    }

    return (
        <div className={styles.searchBar}>
            
            <div className={styles.searchBox}>
                <div className = {styles.inputBox}>
                    <input 
                        type="text"
                        className={styles.searchInput}
                        placeholder="Nome do Pokemon" 
                        onChange={handleTextChange} 
                        onKeyPress={handleEnterPress} 
                    /> 
                </div>
                <div className = {styles.buttonBox}>
                    <button onClick={GoToPokemonPage} className={styles.searchButton}> Search </button>
                </div>
            </div>
        </div>
    )
}