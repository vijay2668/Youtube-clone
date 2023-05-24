"use client";
import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import Pagination from "./Pagination";
import Loader from "./Loader";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  //   console.log(page)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://internship-service.onrender.com/videos?page=${page}`
      );
      const data = await response.json();
      setVideos(data.data.posts);
    };
    fetchData();
  }, [page]);

  if(videos.length === 0){
    return <Loader/>
  }

  return (
    <div>
      <div className="p-4 shadow-sm shadow-white">
        <button onClick={() => window.location.reload()} className=" text-xl p-2 rounded-lg bg-red-500 hover:bg-red-700 transition font-semibold">
          YouTube Clone
        </button>
      </div>
      <VideoList videos={videos} />
      <Pagination videos={videos} setPage={setPage} page={page} />
    </div>
  );
};

export default HomePage;
