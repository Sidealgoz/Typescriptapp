import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/103320946?v=4',
      name: 'Rodrigo Macario',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: <a href="">jane.design/doctorcare</a>},
     
    ],
    publishedAt: new Date('2023-01-02 14:15:35'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/103320946?v=4',
      name: 'Marianne Torres',
      role: 'Psicologa'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: <a href="">jane.design/doctorcare</a>},
    
    ],
    publishedAt: new Date('2022-12-05 14:15:35'),
  },
]

export function App() {
  return (
    <div>
      < Header/>
      <div className={styles.wrapper}>
      < Sidebar />
        <main>
          {posts.map(posts => {
              return (
              <Post
                key={posts.id}
                author= {posts.author}
                content= {posts.content}
                publishedAt= {posts.publishedAt}
              />)
            })
          }
        </main>
      </div>
    </div>
  )
}


