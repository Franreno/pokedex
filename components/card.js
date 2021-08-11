import styles from './card.module.css'

export default function Portrait({children}){
    return <div className={styles.card}>{children}</div>
}