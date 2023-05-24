"use client";
import { useState } from "react";
const VideoPlayer = ({ video }) => {
  const [isHover, setIsHover] = useState(false);
  const { thumbnail, mediaUrl, title, description } = video;

  function restartOtherVideos(e) {
    // Get all of the video tags on the page.
    var videos = document.querySelectorAll("video");

    // Loop through the videos and restart the ones that are not the specified video.
    for (var i = 0; i < videos.length; i++) {
      if (videos[i] !== e.target) {
        videos[i].load();
      }
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <video
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="rounded-xl"
          controls={isHover}
          poster={thumbnail}
          onClick={(e) => restartOtherVideos(e)}
        >
          <source src={mediaUrl} type="video/mp4" />
        </video>
      </div>
      <h3 className="text-lg font-semibold m-1">{title}</h3>
      <p className="text-sm font-light m-1">{`${description.substring(
        0,
        55
      )}...`}</p>
    </>
  );
};

export default VideoPlayer;
