import { Header } from './components/Header';
import { Post } from './Post';

import styles from "./App.module.css"

import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
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