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
  handleNewSongClick: PropTypes.func.isRequired,
  itemNum: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  albumImg: PropTypes.string.isRequired,
  numberOfSongs: PropTypes.number.isRequired,
};

export default SongQueueTile;
