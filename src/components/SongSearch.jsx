import React, { PropTypes } from 'react';
import SongResultTile from './SongResultTile.jsx';

const SongSearch = ({ addSongToQueue, searchResults, handleSearchEvent }) => {
  const searchTileArray = searchResults.map((result, i) =>
    <SongResultTile
      key={i}
      addSongToQueue={addSongToQueue}
      itemNum={i}
      artist={result.artist}
      title={result.title}
      album={result.album}
      videoId={result.videoId}
      artistImg={result.artistImg}
      albumImg={result.albumImg}
    />
  );
  return (
    <div id="search-container">
      <form>
        <div className="search-bar">
          <input type="text" id="song-search-artist" placeholder="Artist" />
        </div>
        <div className="search-bar">
          <input type="text" id="song-search-title" placeholder="Title" />
        </div>
        <button className="search-button" onClick={handleSearchEvent}>Search</button>
      </form>
      <div id="search-results-list">
        {(searchTileArray.length > 0) ? searchTileArray : null}
      </div>
    </div>
  );
};

SongSearch.propTypes = {
  addSongToQueue: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  handleSearchEvent: PropTypes.func.isRequired,
};

export default SongSearch;
