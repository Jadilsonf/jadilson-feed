import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

// estado = variáveis que eu quero que o componente monitore

export function Post({author, publishedAt, content}){
    // useState usa sempre um array de dois parâmetros o segundo é uma função em relação a alteração
    const [comments, setComments] = useState([
        // 'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('',)

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    function handleCreateNewComment(){
        event.preventDefault();

        // const newCommentText = event.target.comment.value;
        // event.target retorna o elemento submit (o evento)
        // esse comment aí é o que é buscado no name lá no textarea
        setComments([...comments, newCommentText]);
        setNewCommentText('')


    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        // imutabilidade => as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
        
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {content.map(line =>{
                if (line.type === 'paragraph'){
                    return <p key={line.content} /**Onde tem lista precisa de key */>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                }
               })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                name="comment"
                placeholder="Deixe um comentário"
                value={newCommentText}
                onChange={handleNewCommentChange}    
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                    {comments.map(comment =>{
                        return (
                            <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment}
                            />
                        )
                    })}
            </div>
            
        </article>
    )
}