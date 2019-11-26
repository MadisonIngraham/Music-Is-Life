import _store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private

function _drawResults() {
  let template = "";
  let songs = _store.State.songs;
  songs.forEach(song => (template += song.Template));
  document.querySelector("#results").innerHTML = template;
}

/**Draws the Users saved songs to the page */
function _drawPlaylist() {}

//Public
export default class SongsController {
  constructor() {
    _store.subscribe("songs", _drawResults);
    _drawResults();
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {}

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {}
}
