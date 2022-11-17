import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

// author: { avatar_url: "", name:"" role:""}
// publishedAT: Date
// content: String

export function Post(props){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/jadilsonf.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Jadilson Filho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="29 de Outubro às 13:08" dateTime='2022-10-29 13:09:30'>publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Esse é o projeto mais complexo que estou desenvolvimento. Comentários e posts ainda não funcionam. Paciência + Café + Chá de Camomila 🧘‍♂️</p>

                <p>
                    <a href="">#codingforliving</a>{" "}
                    <a href="">#herewego </a>
                    <a href="">#hashtaghastag </a>
                </p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder="Deixe um comentário"    
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
            </div>
            
        </article>
    )
}