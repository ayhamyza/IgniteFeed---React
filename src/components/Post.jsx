import { format, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';

import styles from './Post.module.css';

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });


  return (
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}> 
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title= { publishedDateFormatted } dateTime="2022-05-11 08:13:00">
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="" className= { styles.contentHover }>jane.design/doctorcare</a></p>
        <p className= {styles.tags}>
            <a href="">#novoprojeto</a>
            <a href="">#rocketseat</a>
            <a href="">#nlw</a>
        </p>
      </div>

      <form className= {styles.commentForm }>
        
        <strong 
        className= { styles.commentFormTitle }>
        Deixe seu Feedback  
        </strong>
        
        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className= {styles.commentPost}>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}