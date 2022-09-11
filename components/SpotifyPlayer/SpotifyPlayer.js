import React from "react";
import styles from "./SpotifyPlayer.module.scss";

export const SpotifyPlayer = ({ url }) => {
  return (
    <div className={styles.spotifyPlayerWrapper}>
      <iframe src={url} width="100%" height="380" loading="lazy"></iframe>
    </div>
  );
};
