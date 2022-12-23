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
      avatarUrl: 'https://github.com/jadilsonf.png',
      name: 'Jadilson Filho',
      role: 'Músico e Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera' },
      {type: 'paragraph', content: 'Esse é basicamente o meu terceiro projeto' },
      {type: 'link', content: 'jadilsonnews.netlify.com'} 
           ],
    publishedAt: new Date('2022-12-06 09:00:00'),          
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/matheusdts.png',
      name: 'Matheus Dantas',
      role: 'Data Scientist'
    },
    content: [
      {type: 'paragraph', content: 'Depoimento p/ Jadilson' },
      // {type: 'paragraph', content: 'Hello World 2' },
           ],
    publishedAt: new Date('2022-12-05 20:00:00'),          
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
              key={post.id} /**Onde tem lista precisa de key  */
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