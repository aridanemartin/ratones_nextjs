import styles from "./VideoGallery.module.scss";

export const VideoGallery = ({ videoArray }) => {
  return (
    <div className={styles.videoGallery}>
      {videoArray.map((video) => {
        return (
          <div className={styles.videoCard}>
            <h1>{video.title}</h1>
            <iframe
              src={video.src}
              width="100%"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullscreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
