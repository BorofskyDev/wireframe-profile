import ContentContainer from '@/components/containers/layout-containers/content-container/ContentContainer'
import { getPosts } from '@/libs/functions/posts'
import styles from './BlogPreviewContainer.module.scss'
import Heading3 from '@/components/typography/heading3/Heading3'
import BodyText from '@/components/typography/body-text/BodyText'
import Link from 'next/link'
import InternalLink from '@/components/links/internal-link/InternalLink'
import Image from 'next/image'
import SmallText from '@/components/typography/small-text/SmallText'

export default async function BlogBottomContainer() {
  const posts = await getPosts()

  return (
    <ContentContainer>
      {posts.map((post) => (
        <div key={post.slug} className={styles.blogPreviewContainer}>
          <div className={styles.title}>
            <Heading3>{post.title}</Heading3>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={post.image}
              alt={post.title}
              width={1600}
              height={1200}
            />{' '}
          </div>
          <div className={styles.categories}>
            <SmallText>{post.date}</SmallText>
          </div>
          <div className={styles.content}>
          <BodyText >{post.summary}</BodyText>
          <InternalLink href={`/blog/${post.slug}`}>
            Read {post.title}
          </InternalLink>

          </div>
        </div>
      ))}
    </ContentContainer>
  )
}
