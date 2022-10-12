/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import { FcCalendar } from "react-icons/fc";

import Button01Component from "../Footer/button"

const PostCard = ({ post }) => {
    console.log(post)
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>
            {post.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img src={post.author.photo.url} alt={post.author.name} height="30px" width="30px" className="align-middle rounded-full" />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700 flex items-center justify-center">
            <FcCalendar alt="date"/>
            <span className="inline align-middle text-gray-700 ml-2 text-lg">
                {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
        </div>
      </div>
      <p className="text-lg text-gray-700 font-normal px-4 lg:px-10 mb-8">{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
            <Button01Component text='Continue Reading' color='_3' />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
