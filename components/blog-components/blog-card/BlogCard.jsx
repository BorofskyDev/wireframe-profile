import Heading3 from '@/components/typography/heading3/Heading3'
import BodyText from '@/components/typography/body-text/BodyText'
import InternalLink from '@/components/links/internal-link/InternalLink'
import Image from 'next/image'
import SmallText from '@/components/typography/small-text/SmallText'

import styles from './BlogCard.module.scss'

export default function BlogCard({ post }) {
  return (
    <div key={post.slug} className={styles.blogCard}>
      <div className={styles.titleBlock}>
        <Heading3 className={styles.title}>{post.title}</Heading3>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={post.image}
            alt={post.title}
            width={1600}
            height={1200}
          />{' '}
        </div>
      </div>

      <div className={styles.contentBlock}>
        <div className={styles.categories}>
          <SmallText>{post.date}</SmallText>
        </div>

        <BodyText>{post.summary}</BodyText>
        <InternalLink href={`/blog/${post.slug}`}>
          Read {post.title}
        </InternalLink>
      </div>
    </div>
  )
}
