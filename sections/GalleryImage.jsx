import { useState } from "react";
import Image from "next/image";

function GalleryImage({ public_id, filename, onClick }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative flex-shrink-0">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="spinner_small"></div>
        </div>
      )}
      <Image
        src={public_id}
        alt={filename}
        width="200"
        height="100"
        className="rounded-md cursor-pointer flex-shrink-0"
        onClick={onClick}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export default GalleryImage;