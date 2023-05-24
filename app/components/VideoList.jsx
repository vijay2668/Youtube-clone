import VideoPlayer from "./VideoPlayer";

const VideoList = ({videos}) => {

  return (
    <div className="p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {videos?.map((video) => (
          <li className=" rounded-lg p-2 hover:border-[1px]" key={video.postId}>
            <VideoPlayer video={video.submission} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
