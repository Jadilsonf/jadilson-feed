import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/jadilsonf.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Jadilson Filho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="29 de Outubro às 13:08" dateTime='2022-10-29 13:09:30'>publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Boa tarde</p>

                <p>Esse é meu primeiro posto no feed</p>

                <p>Bem empolgante!!!</p>
            </div>
            
        </article>
    )
}