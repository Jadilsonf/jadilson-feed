import styles from './Header.module.css'

import joseJadilsonLogo from '../assets/jj.svg';

console.log(joseJadilsonLogo)
export function Header() {
  return (
    <header  className={styles.header}>
        <img src={joseJadilsonLogo} alt="Logotipo de Jadilson"/>
        
        <div className="wrapper"></div>
    </header>
  )
}