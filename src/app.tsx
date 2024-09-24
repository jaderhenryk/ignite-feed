import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jaderhenryk.png',
      name: 'Jader Henryk',
      role: 'Web Developer',
    },
    content: [
      { tag: 'p', content: 'Fala galeraa 👋' },
      { tag: 'p', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { tag: 'a', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-11 20:00:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jaderhenryk.png',
      name: 'Jader Henrique de Paula',
      role: 'Software Engineer',
    },
    content: [
      { tag: 'p', content: 'Fala pessoal 👋' },
      { tag: 'p', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { tag: 'a', content: 'Acesse e deixe seu feedback 👉 devonlane.design' }
    ],
    publishedAt: new Date('2022-07-14 18:35:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main className="space-y-5">
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}