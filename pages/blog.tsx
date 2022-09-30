import Layout from "../components/Layout";
import ArticleItem from "../components/_blog/ArticleItem/ArticleItem";
import { api } from "../lib/lib"
import { BlogArticleType, ArticleType } from "types"

interface Props {
  articles: Array<ArticleType>
}

export default function BlogPage({ articles }: Props) {
  return (
    <Layout>
      {articles.map((article: ArticleType) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "excerpt",
    "timeReading",
    "ogImage",
    "content",
  ])
  return {
    props: { articles },
  }
}
