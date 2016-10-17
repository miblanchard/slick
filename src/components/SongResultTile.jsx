import React, { PropTypes } from 'react';

const SongResultTile = ({ addSongToQueue, itemNum, albumImg, artist, title, album }) => {
  const addSong = () => {
    addSongToQueue(itemNum);
  };

  return (
    <div className="song-result-tile" onClick={addSong}>
      <img src={albumImg} role="presentation" />
      <ul className="song-tile-list">
        <li>{artist}</li>
        <li>{title}</li>
        <li>{album}</li>
      </ul>
    </div>
  );
};

SongResultTile.propTypes = {
  addSongToQueue: PropTypes.func.isRequired,
  itemNum: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  albumImg: PropTypes.string.isRequired,
};


export default SongResultTile;
