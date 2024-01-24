'use client'
import Image from 'next/image'
import { getPosts } from '@/libs/functions/posts'
import { motion } from 'framer-motion'
import Heading3 from '@/components/typography/heading3/Heading3'
import styles from './BlogCard.module.scss'
import SmallText from '@/components/typography/small-text/SmallText'
import BodyText from '@/components/typography/body-text/BodyText'
import InternalLink from '@/components/links/internal-link/InternalLink'

export default async function BlogCard() {
  const posts = await getPosts()
  return (
    <>
      {posts.map((post) => (
        <div key={post.slug} className={styles.blogPreviewContainer}>
          <Heading3>{post.title}</Heading3>
          <motion.div>
            <Image
              className={styles.image}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              src={post.image}
              alt={post.title}
              width={1600}
              height={1200}
            />{' '}
          </motion.div>
          <motion.div className={styles.categories}>
            <SmallText className={styles.date}>{post.date}</SmallText>
          </motion.div>
          <BodyText>{post.summary}</BodyText>
          <div className={styles.links}>
            <InternalLink href={`/blog/${post.slug}`}>
              Read {post.title}
            </InternalLink>
          </div>
        </div>
      ))}
    </>
  )
}
