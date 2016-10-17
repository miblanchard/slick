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
  currSong: PropTypes.object,
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
};

export default SongPlayer;
