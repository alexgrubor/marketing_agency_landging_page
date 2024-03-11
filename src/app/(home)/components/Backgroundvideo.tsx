interface BackgroundVideoProps {
  src: string;
}

const BackgroundVideo = ({ src }: BackgroundVideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
