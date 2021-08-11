import styles from './basic-grid.module.css'

export default function Grid({children}){
    return <div className={styles.basicGrid}>{children}</div>
}