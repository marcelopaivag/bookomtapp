import Hero from '@/components/Hero'
import Jumbotron from '@/components/Jumbotron'
import ProjectList from '@/components/ProjectList'
import projects from '@/public/projectsJs'

export default function Home() {
  return (
    <>
    <Hero />
    <Jumbotron />
    <ProjectList projects={projects} />
    </>
  )
}
