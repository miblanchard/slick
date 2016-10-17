import React from 'react';

const SongQueueTile = ({ handleNewSongClick, itemNum, albumImg, artist, title, album, numberOfSongs }) => {
  const newSongClick = () => {
    handleNewSongClick(itemNum);
  };

  return (
    <div className="songs-in-queue" onClick={newSongClick}>
      <img src={albumImg}></img><p>{artist} - {title} - {album} - {Number(itemNum) + 1} of {numberOfSongs}</p>
    </div>
  );
};

export default SongQueueTile;
