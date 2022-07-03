import styles from "./VideoGallery.module.scss";

export const VideoGallery = ({ videoArray }) => {
  return (
    <div className={styles.videoGallery}>
      {videoArray.map((video, index) => {
        return (
          <div className={styles.videoCard} key={video.src + index}>
            <h1>{video.title}</h1>
            <iframe
              src={video.src}
              width="100%"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
