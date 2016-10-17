import React from 'react';
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

export default SongQueue;
// || 'http://3.bp.blogspot.com/-PzpJFD56NmM/U4OEGvGR5pI/AAAAAAAAIO8/s9UBNaw800A/s1600/soundcloud.png'
