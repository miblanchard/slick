import React, { PropTypes } from 'react';

const SongPlayTile = ({ currSong: { albumImg, artist, title, album } }) => (
  <div className="song-play-tile" >
    <img src={albumImg} role="presentation" />
    <ul className="song-tile-list">
      <li>{artist}</li>
      <li>{title}</li>
      <li>{album}</li>
    </ul>
  </div>
);

SongPlayTile.propTypes = {
  currSong: PropTypes.object,
  albumImg: PropTypes.string,
  artist: PropTypes.string,
  title: PropTypes.string,
  album: PropTypes.string,
};

export default SongPlayTile;
