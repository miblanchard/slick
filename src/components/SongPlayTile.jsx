import React, { PropTypes } from 'react';

const SongPlayTile = ({ currSong: { albumImg, artist, title, album } }) => (
  <div className="song-play-tile" >
    <img src={albumImg} />
    <ul className="song-tile-list">
      <li>{artist}</li>
      <li>{title}</li>
      <li>{album}</li>
    </ul>
  </div>
);

SongPlayTile.propTypes = {
  currSong: PropTypes.object.isRequired,
  albumImg: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default SongPlayTile;
