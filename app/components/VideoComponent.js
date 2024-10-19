'use client';

import { useRef, useEffect } from 'react';

export default function VideoComponent({ videoUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Error attempting to play video:', error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={videoUrl}
      width={1902}
      height={532}
      className="img-fluid"
      autoPlay
      muted
      loop
      playsInline
      controls
    />
  );
}
