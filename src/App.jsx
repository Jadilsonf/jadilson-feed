import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from "./App.module.css"

import './global.css'

// author: { avatar_url: "", name:"" role:""}
// publishedAT: Date
// content: String

const posts= [
  {
    id: 1,
    author:{
      avatarURL: 'https://github.com/jadilsonf.png',
      name: 'Jadilson Pereira Filho',
      role: 'Músico e Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera' },
      {type: 'paragraph', content: 'Esse é basicamente o meu terceiro projeto' },
      {type: 'link', content: 'jadilsonnews.netlify.com' } 
           ],
    publishedAt: new Date('2022-05-03 20:00:00'),          
  },
  {
    id: 2,
    author:{
      avatarURL: 'https://www.petz.com.br/blog/wp-content/uploads/2022/02/gato-e-carnivoro2.jpg',
      name: 'Ana Flávia',
      role: 'Maquiadora e Nutricionista'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera' },
      {type: 'paragraph', content: 'Esse é basicamente o meu terceiro projeto' },
      {type: 'link', content: 'jadilsonnews.netlify.com' } 
           ],
    publishedAt: new Date('2022-05-03 20:00:00'),          
  }
]

import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
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