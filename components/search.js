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
            <TextField 
                color="primary"
                id="standard-basic"
                label="Nome do Pokemon" 
                onChange={handleTextChange} 
                onKeyPress={handleEnterPress} 
            />
            <Button variant="contained" onClick={GoToPokemonPage} className={styles.Button} >Search</Button>
        </div>
    )
}