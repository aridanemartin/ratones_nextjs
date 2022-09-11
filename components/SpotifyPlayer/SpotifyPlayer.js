import React from "react";
import styles from "./SpotifyPlayer.module.scss";

export const SpotifyPlayer = ({ url }) => {
  return (
    <div className={styles.spotifyPlayerWrapper}>
      <iframe
        src={url}
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};
