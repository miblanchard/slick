import React, { PropTypes } from 'react';

const SongQueueTile = ({ handleNewSongClick, itemNum, albumImg, artist, title, album, numberOfSongs }) => {
  const newSongClick = () => {
    handleNewSongClick(itemNum);
  };

  return (
    <div className="songs-in-queue" onClick={newSongClick}>
      <img src={albumImg} role="presentation"></img><p>{artist} - {title} - {album} - {Number(itemNum) + 1} of {numberOfSongs}</p>
    </div>
  );
};

SongQueueTile.propTypes = {
  handleNewSongClick: PropTypes.func,
  itemNum: PropTypes.number,
  artist: PropTypes.string,
  title: PropTypes.string,
  album: PropTypes.string,
  albumImg: PropTypes.string,
  numberOfSongs: PropTypes.number,
};

export default SongQueueTile;
