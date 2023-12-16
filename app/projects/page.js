import React from 'react'
import ProjectList from '@/components/ProjectList'
import projects from '@/public/projectsJs'

const page = () => {
  
  return (
    <ProjectList projects={projects} />
    )
}

export default page