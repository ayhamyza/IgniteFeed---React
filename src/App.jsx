import { Post } from "./components/Post"
import { Header } from "./components/Header"

import styles from './App.module.css'
import './global.css'

import { Sidebar } from './components/Sidebar'

export function App() {
  return(
    
    <div>
      <Header/>

      <div className= { styles.wrapper }>
        <Sidebar/>

        <main>
          <Post
            author = "Ayhamyza"
            content = "textoLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis, corrupti atque tempora, possimus fuga ullam debitis pariatur quibusdam optio voluptatem iusto doloribus perferendis ipsum similique vitae expedita nihil labore. qualquer" 
          />
          <Post
            author = "will"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis, corrupti atque tempora, possimus fuga ullam debitis pariatur quibusdam optio voluptatem iusto doloribus perferendis ipsum similique vitae expedita nihil labore."
          />
          <Post
            author = "aracy"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis, corrupti atque tempora, possimus fuga ullam debitis pariatur quibusdam optio voluptatem iusto doloribus perferendis ipsum similique vitae expedita nihil labore."
          />

        </main>
      </div>    
    </div>
  )
}
