import ContentContainer from "@/components/containers/layout-containers/content-container/ContentContainer";
import { getPosts } from '@/libs/functions/posts'
import styles from './BlogPreviewContainer.module.scss'
import Heading3 from '@/components/typography/heading3/Heading3'
import BodyText from '@/components/typography/body-text/BodyText'
import Link from 'next/link'
import InternalLink from '@/components/links/internal-link/InternalLink'
import Image from 'next/image'

export default async function BlogBottomContainer() {
   const posts = await getPosts()

    return (
      <ContentContainer>
        {posts.map((post) => (
          <div key={post.slug} className={styles.blogPreviewContainer}>
            <Heading3>{post.title}</Heading3>
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                width='320'
                height='180'
              />{' '}
            </Link>
            <p>{post.date}</p>
            <BodyText>{post.summary}</BodyText>
            <InternalLink href={`/blog/${post.slug}`}>
              Read all of {post.title}
            </InternalLink>
          </div>
        ))}
      </ContentContainer>
    )
}