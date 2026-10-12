import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LessonSection from './components/LessonSection'
import lessonContent from './data/lessons.json'
import type { LessonDocument } from './types/lesson'

const lessonDocument = lessonContent as unknown as LessonDocument

function App() {
  const lessons = [...lessonDocument.lessons].sort((a, b) => a.order - b.order)

  return (
    <div className="site-shell">
      <Header />
      <main id="inicio">
        <HeroSection />
        <div className="content-wrap">
          {lessons.map((lesson) => <LessonSection key={lesson.id} lesson={lesson} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
