import styled from "styled-components";
import Image from "next/image";
import { FcBusinessman, FcCalendar } from "react-icons/fc";

import Layout from "../components/Layout";

const posts = [
  {
    title: "NEXT.JS the best Framework?",
    excerpt: "Some text to resume the content of the post",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fblog.logrocket.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fnext.js.png%3Ffit%3D730%252C487%26ssl%3D1&f=1&nofb=1&ipt=9206a21b37f1c1c1594c3af976fb1079170c90470e63ec7dff1bd8cb64759e13&ipo=images",
    author: "Paulo Reizinho",
    date: "Set 30, 2022",
  },
  {
    title: "Is React still relevant?",
    excerpt: "This resumes the content of the post that you want to read.",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fencoresky.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F04%2Freact-js.jpg&f=1&nofb=1&ipt=6579a9e2a771b0db767ad5341514a2d75045c4db6164705f1f05e745e3998002&ipo=images",
    author: "Paulo Reizinho",
    date: "Set 30, 2022",
  },
  {
    title: "Is Inflation reducing the world population",
    excerpt: "This resumes the content of the post that you want to read.",
    image:
      "https://news.stanford.edu/wp-content/uploads/2022/09/GettyImages-1400001514.jpg",
    author: "Paulo Reizinho",
    date: "Set 30, 2022",
  },
  {
    title: "The relevant wars we should be paying attention",
    excerpt: "This resumes the content of the post that you want to read.",
    image:
      "https://static.wikia.nocookie.net/ptstarwars/images/7/70/Republic_Assault.png/revision/latest?cb=20160208224651",
    author: "Paulo Reizinho",
    date: "Set 30, 2022",
  },
  {
    title: "Testing with react",
    excerpt: "This resumes the content of the post that you want to read.",
    image: "https://miro.medium.com/max/839/1*8IBBim-Fx_wQzN5va0UHqA.png",
    author: "Paulo Reizinho",
    date: "Set 30, 2022",
  },
];

const categories = ["Web Development", "News", "Design", "Psicology"]

export default function Home() {
  return (
    <Layout>
      <PageContainer>
        <div className="main-column">
          {posts.map((post, i) => {
            return (
              <div className="post" key={i}>
                <div className="image">
                  <Image
                    src={post.image}
                    height={300}
                    width={300}
                    alt="post image"
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
                <div className="text">
                <div className="head">
                        <div className="author"><FcBusinessman />{post.author}</div>
                        <div className="date"><FcCalendar />{post.date}</div>
                    </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="side-column">
          <div className="recent-posts">
            <h2>Recent Posts</h2>
            <hr />
            {posts.slice(0, 3).map((post, i) => (
              <div key={i} className="post-recent">
                <div className="image">
                  <Image
                    src={post.image}
                    height={300}
                    width={300}
                    alt="post image"
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
                <div className="text">
                  <p>{post.date}</p>
                  <p><strong>{post.title}</strong></p>
                </div>
              </div>
            ))}
          </div>
          <div className="categories">
          <h2>Categories</h2>
            <hr />
            {categories.map((item, i) => (
                <div key={i} className="single-category">
                    <p>{item}</p>
                </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </Layout>
  );
}

const PageContainer = styled.div`
  margin: 0;
  margin-top: 8rem;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  /* overflow-x: hidden; */

  .main-column {
    width: 50%;
    .post {
      width: 100%;
      height: fit-content;
      display: flex;
      padding: 16px;
      /* border: 4px solid #1d2124; */
      background: #fff;
      border-radius: 8px;
      margin: 8px;
      .image {
        width: 200px;
        margin-right: 16px;
        border-radius: 8px;
        overflow: hidden;
      }
      .text {
        color: #1d2124;
        .head {
            display: flex;
            .author {
                margin-right: 8px;
                display: flex;
                align-items: center;
            }
            .date {
                display: flex;
                align-items: center;
            }
        }
      }
    }
  }
  .side-column {
    width: 20%;
    margin-left: 16px;
    .recent-posts {
      padding: 16px;
      color: #1d2124;
      background: #fff;
      border-radius: 8px;
      margin: 8px;
      .post-recent {
        display: flex;
        align-items: center;
        margin: 16px 6px;
        .image {
          border-radius: 50%;
          overflow: hidden;
          width: 60px;
          height: 60px;
        }
        .text {
          color: #1d2124;
          margin-left: 8px;
          p {
            margin: 0;
          }
        }
      }
    }
    .categories {
        padding: 16px;
      color: #1d2124;
      background: #fff;
      border-radius: 8px;
      margin: 8px;
    }
  }
`;
