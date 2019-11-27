export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "100x100");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `
    <results>
                <div class="card border-primary m-3" style="width: 15rem;">
                    <div class="card-body d-flex flex-column">

                    <div class="d-flex justify-content-center mb-2">
                      <img src=${this.albumArt}></img>
                      </div>

                      <div class="d-flex justify-content-center text-center">
                      <h6 class="card-title">${this.title} by ${this.artist}</h6>
                      </div>

                      <button type="button" class="btn btn-secondary btn-sm">Play Song</button>

                    </div>
                  </div>
            </results>
       
        `;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
