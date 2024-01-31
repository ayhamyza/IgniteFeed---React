import { Post } from "./components/Post"
import { Header } from "./components/Header"

import styles from './App.module.css'
import './global.css'

import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ayhamyza.png",
      name: 'Ayhamyza Ellen',
      role: 'Full-Stack Developer'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2023-12-10 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educator Rocketseat'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2024-01-01 18:00:00')
  },
];

export function App() {
  return(
    
    <div>
      <Header/>

      <div className= { styles.wrapper }>
        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>    
    </div>
  )
}
