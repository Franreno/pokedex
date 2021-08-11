import {getPokemon} from '../pages/api/pokemon_api';
import Link from 'next/link';
import Image from 'next/image';

export default function PokeCardLayout(pokeObj) {

    return (
        <div className="Card">
            <Link href={`/${pokeObj.name.name}`}>
                <img src={pokeObj.name.image} alt={pokeObj.name.name}></img>
                {/* <Image src={pokeObj.name.image} alt={pokeObj.name.name} width={150} height={150}/> */}
            </Link>
        </div>
    )
}