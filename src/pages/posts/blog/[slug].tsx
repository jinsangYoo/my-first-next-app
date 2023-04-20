import PostHead from '@/components/posthead'
import {GetServerSideProps} from 'next'
import {SlugParams} from '@/pages/types/slug-params'
import {FC} from 'react'
import posts from '@/data/posts'

// export function getServerSideProps(params: SlugParams) {
//   const {slug} = params
//   console.log(`slug: ${slug === null ? 'slug is null' : slug}`)
//   const post = posts.find(p => p.slug === slug)

//   if (post === undefined) {
//     return {
//       props: {
//         post: {
//           id: 'dummy id',
//           slug: '0',
//           title: 'dummy title',
//           subtitle: 'dummy subtitle',
//           image: 'https://images.unsplash.com/photo-1605460375648-278bcbd579a6',
//         },
//       },
//     }
//   }

//   return {
//     props: {
//       post,
//     },
//   }
// }

export const getServerSideProps: GetServerSideProps<SlugParams> = async ({params}) => {
  const {slug} = params as SlugParams
  console.log(`slug: ${slug === null ? 'slug is null' : slug}`)
  const post = posts.find(p => p.slug === slug)

  if (post === undefined) {
    return {
      props: {
        post: {
          id: 'dummy id',
          slug: '0',
          title: 'dummy title',
          subtitle: 'dummy subtitle',
          image: 'https://images.unsplash.com/photo-1605460375648-278bcbd579a6',
        },
      },
    }
  }

  return {
    props: {
      post,
    },
  }
}

interface PostProps {
  post: {
    id?: string
    slug?: string
    title?: string
    subtitle?: string
    image?: string
  }
}

const Post: FC<PostProps> = ({post}) => {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  )
}

export default Post
