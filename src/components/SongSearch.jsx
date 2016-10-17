import React from 'react';
import SongResultTile from './SongResultTile.jsx'

class SongSearch extends React.Component {

  //create array react components with song info as props
  createSearchResultList() {
    const searchTileArray = this.props.searchResults.map((result, i) =>
      <SongResultTile
        key={i}
        addSongToQueue={this.props.addSongToQueue}
        itemNum={i}
        artist={result.artist}
        title={result.title}
        album={result.album}
        videoId={result.videoId}
        artistImg={result.artistImg}
        albumImg={result.albumImg}
      />
    );
    return (searchTileArray.length > 0) ? searchTileArray : null;
  }

  render() {
    return (
      <div id="search-container">
        <form>
          <div className='search-bar'>
            <input type="text" id="song-search-artist" placeholder="Artist"/>
          </div>
          <div className='search-bar'>
            <input type="text" id="song-search-title" placeholder="Title"/>
          </div>
          <button className='search-button' onClick={this.props.handleSearchEvent.bind(this)}>Search</button>
        </form>
        <div id='search-results-list'>
          {this.createSearchResultList()}
        </div>
      </div>
    )
  }

}

export default SongSearch;
