'use client'

import { HeroSection } from './sections'
import { projects } from '@/lib/projects'

const Project = ({ params }: { params: { slug: string } }) => {
  let currentProject

  for (let i = 0; i < projects.length; i++)
    if (projects[i].slug === params.slug) currentProject = projects[i]

  return (
    <main className={`layout-page`}>
      <HeroSection
        title={currentProject?.title}
        descriptors={currentProject?.descriptors}
        bannerImage={currentProject?.bannerImage}
      />
    </main>
  )
}

export default Project
