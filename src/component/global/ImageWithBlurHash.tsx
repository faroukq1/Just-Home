import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

type ImageWithBlurHashType = {
  blurhash: string;
  imageUrl: string;
  alt: string;
  width: number;
  height: number;
};
const ImageWithBlurHash: React.FC<ImageWithBlurHashType> = ({
  blurhash,
  imageUrl,
  alt,
  width,
  height,
}) => {
  const [loaded, setLoader] = useState(false);
  return (
    <div
      className="relative w-full h-auto"
      style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
    >
      {!loaded && (
        <Blurhash
          hash={blurhash}
          width={width}
          height={height}
          resolutionX={30}
          resolutionY={30}
          punch={1}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
      <img
        src={imageUrl}
        alt={alt}
        className={`h-96 rounded-md ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoader(true)}
      />
    </div>
  );
};

export default ImageWithBlurHash;
