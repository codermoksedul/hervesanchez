import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { QRCode } from "react-qrcode-logo";

interface QrCodeProps {
  onCopy: () => void;
  onDownload: () => void;
}

export default function QrCode({ onCopy }: QrCodeProps) {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      alert("QR Code not found. Please try again.");
      return;
    }

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "qr-code.png";
    link.click();
  };

  if (!url) return null; // Avoid rendering until the URL is ready

  return (
    <div className="w-full flex flex-col justify-center items-center p-5">
      {/* QR Code with Logo */}
      <div className="w-fit flex flex-col justify-center items-center border border-slate-200 rounded-lg overflow-hidden p-3">
        <QRCode
          value={url}
          size={300}
          logoImage="/logo.png"
          logoWidth={70}
          logoHeight={70}
          logoOpacity={1}
          qrStyle="squares"
          removeQrCodeBehindLogo={true}
          logoPadding={10}
          ecLevel="H"
          quietZone={10}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-5 mt-7">
        <button onClick={onCopy} className="btn btn-outline text-slate-800">
          <IoCopyOutline /> Copy Link
        </button>
        <button
          onClick={handleDownload}
          className="btn btn-primary bg-primary-color text-white border-primary-color"
        >
          <FaDownload /> Download
        </button>
      </div>
    </div>
  );
}
