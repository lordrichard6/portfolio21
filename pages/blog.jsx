import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FcBusinessman, FcCalendar } from "react-icons/fc";

import Layout from "../components/Layout";
import { PostCard, Categories, PostWidget } from "../components/_blog";
import { getPosts } from "../services";

export default function Home({posts}) {
  return (
    <Layout>
      <div className="container mx-auto px-10 mb-8 mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
