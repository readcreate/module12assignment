// Anshul Kumar's Module 12 assignment for Comp 690 at SDCCE in spring 2024

// Get form and selected album from the DOM
let form = document.getElementById('albumSelectForm')
let chooser = document.getElementById('albumDropdown')
let favForm = document.getElementById('favButtonForm')

let rawAlbumData = [
    {
        "artist": "Operation Ivy",
        "album": "Energy"
    },
    {
        "artist": "Blink 182",
        "album": "Dude Ranch"
    },
    {
        "artist": "New Found Glory",
        "album": "Sticks and Stones"
    }
]

class Jukebox { 
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(id, artist, title) {
        this.id = id
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist}: ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
// const album1 = new Album('Operation Ivy', 'Energy')
// const album2 = new Album('Blink 182', 'Dude Ranch')
// const album3 = new Album('New Found Glory', 'Sticks and Stones')

function loadAlbums(albumData) {
    for (let i = 0; i < albumData.length; i++) {
        const currentAlbumRaw = albumData[i]
        const currentAlbum = new Album(i, currentAlbumRaw.artist, currentAlbumRaw.album)
        jbox.addAlbum(currentAlbum)
        chooser.innerHTML += `<option value="${currentAlbum.id}">${currentAlbum.artist}: ${currentAlbum.title}</option>`

        // let op = document.createElement('option')
        // let text = document.createTextNode(currentAlbum.title)
        // console.log(`HERE'S THE TEXT: ${text}`)
        // op.appendChild(text)
        // console.log(op)
        // chooser.appendChild(op)
    }
}

loadAlbums(rawAlbumData)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const chosenAlbumId = chooser.value
    // let text = document.createTextNode(newItem)

    for (let i = 0; i < jbox.albums.length; i++) {
        // console.log(`chosenAlbumId = ${typeof(chosenAlbumId)}`)
        // console.log(`current album ID in loop = ${typeof(jbox.albums[i].id)}`)
        if (Number(chosenAlbumId)===jbox.albums[i].id) {
            // console.log(`MATCH: ${jbox.albums[i].title}`)
            jbox.albums[i].play()
        }        
    }
    // console.log(`Selected value: ${chosenAlbumId}`)
    // console.log('play button clicked')
})

favForm.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('favoriteShower').innerHTML = `Your favorite album is:<br><br>${jbox.favoriteAlbum()}`
})

// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

// console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)