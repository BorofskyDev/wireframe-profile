import { projectData } from './projectsData'
import styles from './ProjectsCard.module.scss'
import Heading3 from '@/components/typography/heading3/Heading3'
import Image from 'next/image'
import BodyText from '@/components/typography/body-text/BodyText'
import ExternalLink from '@/components/links/external-link/ExternalLink'

export default function ProjectsCard() {
  return (
    <>
      {projectData.map((project, index) => (
        <div key={index} clasName={styles.projectsCard}>
          <Heading3>{project.title}</Heading3>
          <div>
            <Image src={project.image} alt={project.altTag} width={290} height={214}/>
          </div>
          <div>
            {project.tech.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <BodyText>{project.description}</BodyText>
          <div>
            <ExternalLink href={project.blog}>Blog</ExternalLink>
            <ExternalLink href={project.github}>Github</ExternalLink>
            <ExternalLink href={project.demo}>Demo</ExternalLink>
          </div>
        </div>
      ))}
    </>
  )
}
