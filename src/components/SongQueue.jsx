import React, { PropTypes } from 'react';
import SongQueueTile from './SongQueueTile.jsx';

const SongQueue = ({ songInfo, handleNewSongClick }) => {
  // iterating over json to make song divs
  const songList = songInfo.map((song, i) =>
    (<SongQueueTile
      key={i}
      itemNum={i}
      artist={song.artist}
      title={song.title}
      album={song.album}
      videoId={song.videoId}
      artistImg={song.artistImg}
      albumImg={song.albumImg}
      handleNewSongClick={handleNewSongClick}
      numberOfSongs={songInfo.length}
    />)
  );

  return (
    <div className="song-queue">
      {songList}
    </div>
  );
};

SongQueue.propTypes = {
  songInfo: PropTypes.array,
  handleNewSongClick: PropTypes.func,
};

export default SongQueue;
