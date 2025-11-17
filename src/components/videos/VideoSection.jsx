"use client";
import React, { useState } from "react";
import { Loader2, X } from "lucide-react";
import { FaTiktok, FaInstagram } from "react-icons/fa";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(Array(6).fill(true));
  const [modalVideo, setModalVideo] = useState(null);

  const handleLoad = (index) => {
    const updated = [...loading];
    updated[index] = false;
    setLoading(updated);
  };

  const videos = [
    { type: "tiktok", src: "https://www.tiktok.com/embed/7539544687326137605" },
    { type: "tiktok", src: "https://www.tiktok.com/embed/7526338348584094982" },
    { type: "tiktok", src: "https://www.tiktok.com/embed/7526968549848534277" },
    {
      type: "instagram",
      src: "https://www.instagram.com/reel/DMu4FlBMdqn/embed",
    },
    {
      type: "instagram",
      src: "https://www.instagram.com/reel/DNa-2z_ts2n/embed",
    },
    {
      type: "instagram",
      src: "https://www.instagram.com/reel/DMREvoDMpck/embed",
    },
  ];

  const openModal = (src) => {
    setModalVideo(src + "?autoplay=1");
  };

  return (
    <section className="my-8 relative z-20 max-w-full px-4">
      {/* Banner horizontal con logos */}
      <div
        className="flex items-center justify-center gap-6 p-6 rounded-xl shadow-lg cursor-pointer bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white"
        onClick={() => setOpen(!open)}
      >
        <FaTiktok className="w-8 h-8" />
        <FaInstagram className="w-8 h-8" />
        <span className="text-lg font-bold">
          ¡Dale click para ver nuestros videos en TikTok e Instagram!
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {/* Galería de videos */}
      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className={`relative w-full ${
                video.type === "tiktok" ? "aspect-video" : "aspect-square"
              } bg-gray-200 rounded-xl overflow-hidden shadow-md cursor-pointer`}
              onClick={() => openModal(video.src)}
            >
              {loading[i] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
                </div>
              )}
              <iframe
                src={video.src}
                className="w-full h-full"
                onLoad={() => handleLoad(i)}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setModalVideo(null)}
          >
            <X size={32} />
          </button>
          <iframe
            src={modalVideo}
            className="w-full max-w-4xl h-[70vh] rounded-xl shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}
