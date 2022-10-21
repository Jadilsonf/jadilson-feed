import { Header } from './components/Header';
import { Post } from './Post';

import styles from "./App.module.css"

import './global.css'

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post 
          author="Jadilson" 
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ratione cupiditate odit eos earum maiores! Ratione aliquam, quia repudiandae quidem autem possimus mollitia magni. Error iusto iure magni placeat officiis?"
          />
          <Post 
            author="Ana Flávia" 
            content="Lorem ipsum dolor sit"/>
        </main>
      </div>
    </div>
  )
}