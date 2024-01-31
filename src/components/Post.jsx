import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';
import styles from './Post.module.css';

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ayhamyza.png" />
          <div className={styles.authorInfo}>
            <strong>Ayhamyza</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
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