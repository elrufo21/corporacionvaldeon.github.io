import { useState, useRef, useEffect, memo } from "react";

interface VideoComponentProps {
  src?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  width?: string;
  height?: string;
}

const VideoComponent = memo(
  ({
    src = "https://www.corporacionbaldeon.com/animacion.mp4",
    poster = "https://www.corporacionbaldeon.com/poster.jpg",
    autoPlay = true,
    loop = true,
    muted = true,
    className = "",
    width = "100%",
    height = "100%",
  }: VideoComponentProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [containerReady, setContainerReady] = useState(false);

    // Establecer un placeholder con las mismas dimensiones que tendrá el contenedor final
    useEffect(() => {
      if (!containerRef.current) return;

      // Marcar el contenedor como listo para evitar parpadeos
      setContainerReady(true);

      // Pre-cargar el poster para tener las dimensiones correctas antes
      if (poster) {
        const img = new Image();
        img.src = poster;
      }
    }, [poster]);

    // Observer para lazy loading
    useEffect(() => {
      if (!videoRef.current) return;

      try {
        const options = {
          root: null,
          rootMargin: "100px",
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
          const [entry] = entries;
          setIsInView(entry.isIntersecting);

          // Pausar video cuando no está visible para ahorrar recursos
          if (videoRef.current) {
            if (entry.isIntersecting && autoPlay) {
              videoRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setIsError(false);
                })
                .catch((err) => {
                  console.log("Reproducción automática no permitida:", err);
                  if (err.name !== "NotAllowedError") {
                    setErrorMessage("Error de reproducción: " + err.message);
                    setIsError(true);
                  }
                });
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        }, options);

        observer.observe(videoRef.current);

        return () => {
          if (videoRef.current) {
            observer.unobserve(videoRef.current);
          }
        };
      } catch (error) {
        console.error("Error con IntersectionObserver:", error);
        setIsInView(true);
      }
    }, [autoPlay]);

    const handleLoadStart = () => {
      setIsLoading(true);
      setIsError(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      setIsError(false);
    };

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setIsError(false);
    };

    const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      const target = e.target as HTMLVideoElement;

      if (
        target.currentTime > 0 &&
        !target.paused &&
        !target.ended &&
        target.readyState > 2
      ) {
        setIsError(false);
        return;
      }

      let message = "Error desconocido al cargar el video";

      if (target.error) {
        switch (target.error.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            message = "La descarga fue cancelada";
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            message = "Error de red. Verifica tu conexión";
            break;
          case MediaError.MEDIA_ERR_DECODE:
            message = "Error al decodificar el video";
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            message = "Formato de video no soportado por tu navegador";
            break;
        }
      }

      setErrorMessage(message);
      setIsLoading(false);
      setIsError(true);
    };

    // Limpiar recursos al desmontar
    useEffect(() => {
      return () => {
        if (videoRef.current) {
          videoRef.current.src = "";
          videoRef.current.load();
        }
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className={`overflow-hidden rounded-xl shadow-lg border border-gray-800 relative ${className}`}
        style={{
          backgroundColor: "#111827", // Fondo oscuro constante para evitar parpadeos
          width,
          height,
          aspectRatio: "16/9", // Mantener como respaldo
        }}
      >
        {/* Placeholder visible mientras todo carga */}
        {(!containerReady || isLoading) && (
          <div className="absolute inset-0 bg-gray-900 w-full h-full" />
        )}

        {/* Indicador de carga */}
        {isLoading && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Mensaje de error */}
        {isError && !isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-90 z-10 text-white p-4 text-center">
            <span className="text-red-500 text-xl mb-2">{errorMessage}</span>
            <p>Por favor, intenta nuevamente más tarde</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              onClick={() => {
                setIsError(false);
                setIsLoading(true);
                if (videoRef.current) {
                  videoRef.current.load();
                  videoRef.current
                    .play()
                    .catch((e) => console.log("Error al reintentar:", e));
                }
              }}
            >
              Reintentar
            </button>
          </div>
        )}

        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          src={src}
          autoPlay={autoPlay && isInView}
          loop={loop}
          muted={muted}
          playsInline
          preload="auto"
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onPlaying={handlePlaying}
          onError={handleError}
        >
          Tu navegador no soporta el video.
        </video>

        <button
          className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition focus:outline-none"
          onClick={() => {
            if (videoRef.current) {
              if (videoRef.current.paused) {
                videoRef.current
                  .play()
                  .then(() => setIsPlaying(true))
                  .catch((err) => {
                    console.error("Error al reproducir:", err);
                    setErrorMessage(
                      "No se pudo reproducir el video: " + err.message
                    );
                    setIsError(true);
                  });
              } else {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            }
          }}
          aria-label="Reproducir o pausar video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {videoRef.current?.paused ? (
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>
    );
  }
);

export default VideoComponent;
