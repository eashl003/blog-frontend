import { useRouter } from "next/router"
import { getArticles, getArticle } from "../../utils/api"
import NextImage from "../../components/Image"
 

const ArticlePage = ({ article }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading article...</div>
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <h1>{article.title}</h1>
      <div>
        <div>
          
        </div>
      </div>
      <div className="rounded-t-lg pt-2 pb-2 m-auto h-40 w-40">
        <NextImage media={article.image} />
      </div>
    </div>
  )
}

export default ArticlePage

export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug)
  return { props: { article } }
}

export async function getStaticPaths() {
  const articles = await getArticles()
  return {
    paths: articles.map((_article) => {
      return {
        params: { slug: _article.slug },
      }
    }),
    fallback: true,
  }
}
