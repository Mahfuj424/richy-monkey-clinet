import React, { useState } from "react";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { latestVideo } from "@/src/constant/home/LatestNews/latestNewsVideo";
const LatestVideo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <img
          src="https://demo.themexpert.com/wordpress/gamez/game-review/wp-content/uploads/sites/3/2016/06/the_witcher_3-1-768x432.jpg"
          alt=""
        />
        <div
          onClick={handleOpen}
          className="absolute text-primary cursor-pointer"
        >
          <SlowMotionVideoIcon sx={{ fontSize: "70px" }} />
        </div>
      </div>
      {latestVideo.map((game, index) => (
        <div
          key={index}
          className={`flex items-center cursor-pointer gap-5 mb-3 p-5 hover:bg-yellow-900 bg-[#32220c] duration-300 ${index === 0 ? 'bg-yellow-900' : '' }`}
        >
          <div className="bg-yellow-900 h-full rounded-md">
            <SlowMotionVideoIcon sx={{ fontSize: "70px", color: "gray" }} />
          </div>
          <div className="text-white">
            <h1 className="text-xl font-bold uppercase">{game?.title}</h1>
            <h1 className="text-xl font-bold uppercase my-3">{game?.name}</h1>
            <p>{game?.description}</p>
          </div>
        </div>
      ))}
      <Modal open={open} onClose={handleClose} /* other attributes */>
        <div className="w-full h-full flex justify-center items-center bg-transparent relative">
          <iframe
            width="1000"
            height="520"
            src="https://www.youtube.com/embed/ZIPoQ7j2jx0?si=9-M3jdu1J-poxatz"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <CloseIcon
            className="cursor-pointer absolute right-2 top-2 text-white md:right-56 md:top-24"
            onClick={handleClose}
            sx={{ fontSize: "50px" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default LatestVideo;
