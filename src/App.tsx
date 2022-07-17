import { Header } from "./components/Header/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      name: 'Beatriz Mesquita',
      avatarUrl: 'https://github.com/biamesquitap.png',
      role: 'Frontend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-14 22:32:33'),
  },
  {
    id: 2,
    author: {
      name: 'Gabriel',
      avatarUrl: 'https://github.com/bielpatricio.png',
      role: 'Full Stack Developer and CEO of PSOFT',
    },
    content: [
      { type: 'paragraph', content: 'Faaaaaaala deeev' },
      { type: 'paragraph', content: 'Estamos abrindo agenda para pegar novos projetos' },
      { type: 'paragraph', content: 'Confira nosso site abaixo'},
      { type: 'link', content: 'google.com' },
    ],
    publishedAt: new Date('2022-06-21 09:01:55'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
