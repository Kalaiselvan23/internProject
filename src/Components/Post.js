import React from "react";
import {BsArrowRight} from "react-icons/bs"
const Post = (props) => {
  return (
    <div className="flex flex-col w-[325px] h-[450px] mx-1 my-2 rounded-lg bg-[#1D1F25]">
      <img src={`/assets/postImages/${props.post.img}`} alt="" />
      <div className="flex justify-between mx-3 my-3">
        <span className="text-yellow-500 font-semibold text-sm tracking-[4px]">
          {props.post.category.toUpperCase()}
        </span>
        <span className="text-[#B5B5BE] text-xs">{props.post.timePosted} hrs ago</span>
      </div>
      <h1 className="text-white font-extrabold text-base text-left mx-3">{props.post.title}</h1>
      <p className="mx-3 text-left text-[#B5B5BE] my-2">{props.post.description}</p>
      <div className="text-yellow-500 font-bold flex items-center gap-2 justify-items-start mx-4">
      <span>Read More</span>
      <BsArrowRight />
      </div>
    </div>
  );
};

export default Post;
