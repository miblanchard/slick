import $ from 'jquery';
import React, { Component } from 'react';
import SongQueue from './components/SongQueue.jsx';
import SongPlayer from './components/SongPlayer.jsx';
import SongSearch from './components/SongSearch.jsx';

const socket = io();

class Slick extends Component {
  constructor() {
    super();
    this.state = {
      currentSong: '',
      songInfo: [], // the queue of songs
      searchResults: [],
      player: null,
    };
    // All methods need to be registerd here
    this.newSongClick = this.newSongClick.bind(this);
    this.addSongToQueue = this.addSongToQueue.bind(this);
    this.handleServerPlayEvent = this.handleServerPlayEvent.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.searchForNewSongs = this.searchForNewSongs.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.handleServerPlayCurrentSongEvent = this.handleServerPlayCurrentSongEvent.bind(this);
    this.onPause = this.onPause.bind(this);
    this.handleServerPauseCurrentSongEvent = this.handleServerPauseCurrentSongEvent.bind(this);
    this.updateYoutubePlayer = this.updateYoutubePlayer.bind(this);
  }

  newSongClick(i) {
    const songQueueArray = this.state.songInfo;
    const newSongState = {
      currentSong: songQueueArray.splice(i, 1)[0],
      songInfo: songQueueArray,
    };
    socket.emit('playSong', newSongState);
    this.setState(newSongState);
  }

  addSongToQueue(i) {
    // when the result is clicked we want to take the whole object and add it to the songInfo state object.
    const currSongList = this.state.songInfo;
    const searchResultList = this.state.searchResults;
    currSongList.push(searchResultList.splice(i, 1)[0]);
    const newSongClientState = {
      songInfo: currSongList,
      searchResults: searchResultList,
    };
    const newSongSharedState = { songInfo: currSongList };
    // send event to socket to update all clients
    socket.emit('updateQueue', newSongSharedState);
    this.setState(newSongClientState);
  }

  handleServerPlayEvent(newSongState) {
    this.setState(newSongState);
  }

  onPlay(e) { socket.emit('playCurrent'); }
  handleServerPlayCurrentSongEvent() { this.state.player.playVideo(); }

  onPause(e) { socket.emit('pauseCurrent'); }
  handleServerPauseCurrentSongEvent() { this.state.player.pauseVideo(); }

  onEnded() {
    const songList = this.state.songInfo;
    const nextSong = songList.splice(0, 1)[0];
    socket.emit('updateQueue', { songInfo: songList, currentSong: nextSong });
    this.setState({ songInfo: songList, currentSong: nextSong });
  }

  updateYoutubePlayer(event) {
    this.setState({
      player: event.target,
    });
  }

  // Adding ajax post request for song searches
  // Input JSON object with artist and title
  // Receives JSON object array data of length 5 with info
  searchForNewSongs(e) {
    e.preventDefault();
    const searchData = {
      artist: document.getElementById('song-search-artist').value,
      title: document.getElementById('song-search-title').value,
    };
    // console.log('searchData ', searchData);
    $.ajax({
      method: 'POST',
      url: '/search',
      data: searchData,
      // contentType: 'application/json',
      error: (err) => {
        // console.log('error getting search results');
        console.log(err);
      },
      success: data => {
        // data sets state for search results
        // data should come in formatted as needed
        const searchResults = JSON.parse(data);
        this.setState({
          searchResults,
        });
      },
    });
  }

  componentDidUpdate() {
    // console.log('state is ', this.state);
    $('#content').css('background-image', `url(${this.state.currentSong.artistImg})`);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/songQueue',
      contentType: 'application/json',
      dataType: 'json',
      success: data => {
        this.setState(data);
      },
    });
    // listen for emit events from the server
    socket.on('playSong', this.handleServerPlayEvent);
    socket.on('playCurrent', this.handleServerPlayCurrentSongEvent);
    socket.on('pauseCurrent', this.handleServerPauseCurrentSongEvent);
    socket.on('updateQueue', (newSongState) => {
      this.setState(newSongState);
    });
    // add event listener for song added and song deleted
    socket.on('songEnded', this.onEnded);
  }

  render() {
    // songplayer gets an empty string as props before the component mounts
    return (
      <div className="app">
        <SongSearch
          addSongToQueue={this.addSongToQueue}
          searchResults={this.state.searchResults}
          handleSearchEvent={this.searchForNewSongs}
        />
        <SongPlayer
          currSong={this.state.currentSong}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onEnded={this.onEnded}
          onReady={this.updateYoutubePlayer}
          player={this.state.player}
        />
        <SongQueue
          songInfo={this.state.songInfo}
          handleNewSongClick={this.newSongClick}
        />
      </div>
    );
  }
}

export default Slick;
