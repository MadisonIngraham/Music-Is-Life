export default class Song {
  constructor (data) {
    this.title = data.trackName || data.title
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, '100x100')
    this.artist = data.artistName || data.artist
    this.album = data.collectionName || data.album
    this.price = data.trackPrice || data.price
    this.preview = data.previewUrl || data.preview
    this._id = data.trackId || data._id
  }

  get Template () {
    return `
    <results>
                <div class="card border-primary m-3" style="width: 15rem;">
                    <div class="card-body d-flex flex-column">

                    <div class="d-flex justify-content-center mb-2">
                      <img src=${this.albumArt}></img>
                      </div>

                      <div class="d-flex justify-content-center text-center">
                      <h6 class="card-title">${this.title} by ${
  this.artist
}</h6>
                      </div>

                      <button type="button" class="btn btn-secondary btn-sm" onclick="app.songsController.playSong('${
  this._id
}')"> Play Song </button>

                      <button type="button" class="btn btn-secondary btn-sm" onclick="app.songsController.addSong('${
  this._id
}')">Add Song to Playlist</button>

                    </div>
                  </div>
            </results>
       
        `
  }

  get previewTemplate () {
    return `
    <preview>

    <div>
    <h4>Now Playing</h4>
    </div>

    <div>
            <img src=${this.albumArt} id="playing-art"></img>
            </div>
            
            <div>
            <h2>${this.title} by ${this.artist}</h2>
            <audio src="${this.preview}" controls autoplay="true"></audio>
            <h5>
              Buy: $${this.price} | ${this.album}
            </h5>
            </div>

    </preview>
    `
  }

  get playlistTemplate () {
    return `
    <div class="card border-primary m-3" style="width: 15rem;">
    <div class="card-body d-flex flex-column">

    <div class="d-flex justify-content-center mb-2">
      <img src=${this.albumArt}></img>
      </div>

      <div class="d-flex justify-content-center text-center">
      <h6 class="card-title">${this.title} by ${this.artist}</h6>
      </div>

      <button type="button" class="btn btn-secondary btn-sm" onclick="app.songsController.playSong('${
  this._id
}', true)"> Play Song </button>

<button type="button" class="btn btn-secondary btn-sm" onclick="app.songsController.removeSong('${
  this._id
}')"> Remove Song </button>

    </div>
  </div> 
        `
  }
}
