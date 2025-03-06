const VideoComponent = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-800">
      <video
        className="w-full h-full object-contain pointer-events-none"
        src="https://www.corporacionbaldeon.com/animacion.mp4"
        poster="https://www.corporacionbaldeon.com/poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      >
        Tu navegador no soporta el video.
      </video>
    </div>
  );
};

export default VideoComponent;
