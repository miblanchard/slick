import React from 'react';

const SongResultTile = ({ addSongToQueue, itemNum, albumImg, artist, title, album }) => {
  const addSong = () => {
    addSongToQueue(itemNum);
  };

  return (
    <div className="song-result-tile" onClick={addSong}>
      <img src={albumImg} />
      <ul className="song-tile-list">
        <li>{artist}</li>
        <li>{title}</li>
        <li>{album}</li>
      </ul>
    </div>
  );
};

export default SongResultTile;
