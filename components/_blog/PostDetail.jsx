/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment/moment";

import { FcCalendar } from "react-icons/fc";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 flex items-center justify-center">
            <FcCalendar alt="date" />
            <span className="inline align-middle text-gray-700 ml-2 text-lg">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getCOntentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObject.type)
        })}
      </div>
    </div>
  );
};

export default PostDetail;
// 2:00:00