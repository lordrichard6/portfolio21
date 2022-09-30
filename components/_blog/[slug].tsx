import React from 'react';
import readingTime from "reading-time"
import mdxPrism from "mdx-prism"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { NextSeo } from "next-seo"

import MDXComponents from "src/components/MDXComponents/MDXComponents"
import Article from "src/components/Article/Article"
import { api } from "src/lib/lib"
import { BlogArticleType } from '../../types';

interface Props {
    readingTime: {
        text: string;
    }
    frontMatter: {
        title: string;
        description: string;
        date: string;
        content: string;
        ogImage: {
            url: string;
        }
    }
    slug: string;
    source: string;
    tags: Array<string>;
}

const Index = ({ readingTime, frontMatter, slug, source }: Props) => {
    const content = hydrate(source)

    return (
        <div>
            <NextSeo
                title={frontMatter.title}
                description={frontMatter.description}
            />
            <Article
                readingTime={readingTime}
                title={frontMatter.title}
                description={frontMatter.description}
                date={frontMatter.date}
                content={content}
                ogImage={frontMatter.ogImage}
                slug={slug}
            />
        </div>
    )
}

export default Index

type Params = {
    params: {
        slug: string;
        timeReading: {
            text: string;
        }
    }
}

export async function getStaticProps({ params }: Params) {
    const { content, data } = api.getRawArticleBySlug(params.slug)
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                require("remark-autolink-headings"),
                require("remark-slug"),
                require("remark-code-titles"),
                require("remark-autolink-headings"),
                require("remark-capitalize"),
                require("remark-external-links"),
                require("remark-images"),
                require("remark-slug")
            ],
            rehypePlugins: [mdxPrism],
        }
    })
    const tags = data.tags ?? []
    return {
        props: {
            slug: params.slug,
            readingTime: readingTime(content),
            source: mdxSource,
            frontMatter: data,
            tags,
        },
    }
}

export async function getStaticPaths() {
    const articles: Array<BlogArticleType> = await api.getAllArticles(["slug"])
    return {
        paths: articles.map((articles) => {
            return {
                params: {
                    slug: articles.slug,
                }
            }
        }),
        fallback: false
    }
}