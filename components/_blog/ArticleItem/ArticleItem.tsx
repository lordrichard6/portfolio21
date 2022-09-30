// eslint-disable @next/next/no-img-element 
import NextLink from "next/link"
import styled from "styled-components";

import { ArticleType } from 'src/types'

interface Props {
    article: ArticleType
}

const ArticleItem = ({ article }: Props) => (
    <ArticleContainer>
        <img
            src={article.ogImage.url}
            alt="Article image"
            lazy="loading"
        />
        <div className="">
            <NextLink as={`/blog/${article.slug}`} href="/blog/[slug]">
                <a href="/blog">
                    {article.title}
                </a>
            </NextLink>
            <p>
                {article.description}
            </p>
            <div className="">
                <p>{article.timeReading.text}</p>
                <p> - </p>
                <p>{article.date}</p>
            </div>
            <NextLink as={`/blog/${article.slug}`} href="/blog/[slug]">
                <a href="/blog">
                    Read article
                </a>
            </NextLink>
        </div>
    </ArticleContainer>
)

const ArticleContainer = styled.article`
    display: flex;
    min-height: 100vh;
`

export default ArticleItem
