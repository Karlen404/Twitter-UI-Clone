/* eslint-disable no-unused-vars */
import Button from "../atoms/Button"
import Profile from "../atoms/Profile"
import { RiEarthFill } from "react-icons/ri";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import React, { useState } from 'react';

function CreatePost() {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setContent(event.target.value);
    event.target.style.height = 'auto';  // Set ulang tinggi agar textarea dapat diukur ulang
    event.target.style.height = event.target.scrollHeight + 'px'; // Set tinggi berdasarkan konten saat ini
  };

  return (
    <div className="border-b border-[#222528] hidden sm:block">
      <div className="mx-4 my-3">
        <div className="flex text-white">
          <div className="mr-3">
            <Profile />
          </div>
          <div className="w-full mt-1">
            <div className="text-xl ">
              <textarea rows={1} name="" id="" placeholder="What's hotly discussed?!" style={{ resize: 'none' }} value={content}
                onChange={handleChange} className="bg-transparent w-full focus:outline-none placeholder-[#71767B] text-clip overflow-hidden"></textarea>
            </div>
            <div className="font-semibold">
              <div className="flex gap-2 items-center text-[#1D9BF0] border-b border-[#222528] w-full py-3 ">
                <RiEarthFill />
                <p>Semua orang dapat membalas</p>
              </div>
              <div className="flex gap-2 justify-between mt-4 items-center">
                <div className="flex text-[#1D9BF0] text-lg gap-4 cursor-pointer">
                  <AiOutlinePicture />
                  <MdOutlineGifBox />
                  <BsEmojiSmile />
                  <SlLocationPin />
                </div>
                <div>
                  <Button title="Post" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost