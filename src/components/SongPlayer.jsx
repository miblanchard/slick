import React, { PropTypes } from 'react';
import YouTube from 'react-youtube';
import SongPlayTile from './SongPlayTile.jsx';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
    fs: 0,
    enablejsapi: 1,
  },
};

const SongPlayer = ({ currSong, onReady, onPlay, onPause, onEnded }) => (
  <div className="song-player">
    <YouTube
      opts={opts}
      videoId={currSong.videoId}
      onReady={onReady}
      onPlay={onPlay}
      onPause={onPause}
      onEnd={onEnded}
    />
    <SongPlayTile currSong={currSong} />
  </div>
);

SongPlayer.propTypes = {
  currSong: PropTypes.object.isRequired,
  onReady: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onEnded: PropTypes.func.isRequired,
};

export default SongPlayer;
