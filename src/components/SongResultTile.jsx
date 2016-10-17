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
  addSongToQueue: PropTypes.func,
  itemNum: PropTypes.number,
  artist: PropTypes.string,
  title: PropTypes.string,
  album: PropTypes.string,
  albumImg: PropTypes.string,
};


export default SongResultTile;
