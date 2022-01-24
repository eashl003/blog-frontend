import ArticlesList from "../components/ArticlesList"
import { getArticles } from "../utils/api"
import BlogCategoryButtons from "../components/BlogCategoryButtons"
import { getBlogs } from "../utils/api"

const BlogPage = ({ articles, blogs }) => {
  return (
    <div>
      <BlogCategoryButtons blogs={blogs} />
      <ArticlesList articles={articles} />
    </div>
  )
}

export async function getStaticProps() {
  const articles = await getArticles()
  return { props: { articles } }
}

export default BlogPage
