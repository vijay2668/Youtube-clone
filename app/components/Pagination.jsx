import React from "react";

const Pagination = ({ videos, setPage, page }) => {
  
  return (
    <div className="flex justify-end p-6">
      <ul className="flex">
        <li>
          <button
            onClick={() => {
                if(page > 0)
                 setPage(page - 1)
                }}
            className={`${page === 0 && "hidden"} px-2 py-1 sm:px-4 sm:py-2 font-semibold bg-white text-black border-2 hover:bg-orange-400 rounded-l-lg`}
          >
            prev
          </button>
        </li>
        {videos.map((video, index) => (
          <li key={index} className={`${page!==index && "hidden"} sm:block`}>
            <button
              onClick={(e) => setPage(index)}
              className={`px-2 py-1 sm:px-4 sm:py-2 ${page === index ? "bg-orange-400" : "bg-white"} ${index === 0 && page === 0 && "rounded-l-lg"} ${index === 9 && page === 9 && "rounded-r-lg"} text-black border-2 hover:bg-orange-400`}
              id="btn"
            >
              {index}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
                if(page < 9)
                 setPage(page + 1)
                }}
                className={`${page === 9 && "hidden"} px-2 py-1 sm:px-4 sm:py-2 font-semibold bg-white text-black border-2 hover:bg-orange-400 rounded-r-lg`}
          >
            next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
