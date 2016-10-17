import React, { PropTypes } from 'react';
import SongQueueTile from './SongQueueTile.jsx';

const SongQueue = ({ songInfo, handleNewSongClick }) => {
  // iterating over json to make song divs
  const songList = songInfo.map((songDataObject, i) =>
    (<SongQueueTile
      key={i}
      itemNum={i}
      artist={songDataObject.artist}
      title={songDataObject.title}
      album={songDataObject.album}
      videoId={songDataObject.videoId}
      artistImg={songDataObject.artistImg}
      albumImg={songDataObject.albumImg}
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
  songInfo: PropTypes.object.isRequired,
  handleNewSongClick: PropTypes.func.isRequired,
};

export default SongQueue;
