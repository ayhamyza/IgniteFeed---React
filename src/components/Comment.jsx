import styles from './Comment.module.css';


import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content)
    }
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={ false } 
                src="https://github.com/ayhamyza.png" alt="" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ayhamyza Ellen</strong>
                            <time title="25 de janeiro às 15:55" dateTime="2024-01-25 15:55:00">Cerca de 1h atrás</time>
                        </div>

                        <button 
                            onClick={handleDeleteComment} 
                            className= { styles.trash } 
                            title="Deletar comentário">
                                <Trash size={20} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer className= { styles.commentFooter }>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}