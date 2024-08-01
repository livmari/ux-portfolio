'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'

import { projects } from '@/lib/projects'
import { Button, Description } from '@/app/components'

import styles from './Project.module.scss'

const Project = ({ params }: { params: { slug: string } }) => {
  const router = useRouter()

  const project = projects[parseInt(params.slug)]

  return (
    <main className={`'page-layout page-py-lg' ${styles.frame}`}>
      <Button
        label={'All projects'}
        leftIcon={<ArrowLeftIcon />}
        onClick={() => router.push('/')}
        className={styles.goBackButton}
      />

      <h1 className={'heading-1'}>{project.title}</h1>

      <Image
        src={project.bannerImage.path}
        height={800}
        width={800}
        alt={project.bannerImage.alt}
      />

      <Description
        orientation={'col'}
        label={'Duration'}
        value={project.duration}
      />

      <section>
        <h2 className={'heading-2'}>Challenge</h2>

        <p>{project.challenge}</p>
      </section>

      <section>
        <h2 className={'heading-2'}>Results</h2>

        <p>{project.results}</p>
      </section>

      <Image
        src={project.bannerImage.path}
        height={800}
        width={800}
        alt={project.bannerImage.alt}
      />

      <Image
        src={project.bannerImage.path}
        height={800}
        width={800}
        alt={project.bannerImage.alt}
      />

      <section>
        <h2 className={'heading-2'}>Tools</h2>
      </section>
    </main>
  )
}

export default Project
