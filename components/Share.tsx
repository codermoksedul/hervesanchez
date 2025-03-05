"use client";
import { useState } from "react";
import { IoClose, IoShareSocial } from "react-icons/io5";
import QrCode from "./QrCode";

export default function Share() {
  const [showShare, setShowShare] = useState(false);

  const handleShare = () => {
    setShowShare(!showShare);
  };

  const closeShare = () => {
    setShowShare(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleDownload = () => {
    const qrCodeCanvas = document.querySelector("canvas");

    if (qrCodeCanvas) {
      const image = qrCodeCanvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "qrcode.png";
      link.click();
    } else {
      alert("QR Code not found. Please try again.");
    }
  };

  return (
    <>
      <button onClick={handleShare} className="btn !px-10 btn-outline">
        <IoShareSocial className="text-lg" /> Share
      </button>
      {/* Share Box */}
      {showShare && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm flex justify-center items-end p-3">
          <div className="w-full bg-white rounded-t-lg sm:max-w-[440px] overflow-hidden relative p-3 py-5">
            {/* Close Button */}
            <button
              onClick={closeShare}
              className="absolute top-1 right-1 p-2 bg-white rounded-full text-lg hover:bg-slate-100"
            >
              <IoClose />
            </button>
            <h3 className="text-center text-xl">Share my card</h3>
            <QrCode onCopy={handleCopy} onDownload={handleDownload} />
          </div>
        </div>
      )}
    </>
  );
}
