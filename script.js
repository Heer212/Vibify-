// // console.log("Welcome to Spotify");

// // // Initialize the variables
// // let songIndex = 0;
// // let audioElement = new Audio('music/1.mp3');
// // let masterPlay = document.getElementById('masterPlay');
// // let myProgressBar = document.getElementById('myProgressBar');
// // let gif = document.getElementById('gif');
// // let masterSongName = document.getElementById('masterSongName');
// // let songItems = Array.from(document.getElementsByClassName('songItem'));

// // // Load from localStorage or initialize empty array
// // let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// // let isPlayingFavorites = false; //whether to loop through favorites
// // let favoritePlayIndex =0; //index in the fav array


// // let songs = [
// //     { songName: "Apna Bana Le - Bhediya", filePath: "music/1.mp3", coverPath: "images/apna bana le piya2.jpg" },
// //     { songName: "Shiddat Title Track - Shiddat", filePath: "music/2.mp3", coverPath: "images/shiddat.png" },
// //     { songName: "Tum Se Hi - Jab We Met ", filePath: "music/3.mp3", coverPath: "images/tum_se_hi.png" },
// //     { songName: "Tera hone Laga Hoon - Ajab Prem Ki Gajab Kahani", filePath: "music/4.mp3", coverPath: "images/tera_hone.png" },
// //     { songName: "Vhalam Avo Ne - Love Ni Bhavai", filePath: "music/2.mp3", coverPath: "images/vhalam_avo_ne.png" },
// //     { songName: "Shershaan - Shershaan", filePath: "music/2.mp3", coverPath: "images/shershaah.jpeg" },
// //     { songName: "Man Mast Magan - 2 States", filePath: "music/2.mp3", coverPath: "images/mast_magan.png" },
// //     { songName: "Tum Se - Teri Baato Me Esa Uljha Jiya", filePath: "music/2.mp3", coverPath: "images/Tum_se.jpg" },
// // ]

// // songItems.forEach((element, i) => {
// //     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
// //     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// //     //set correct data-index on fav icon
// //     const favIcon = element.querySelector('.favorite-icon');
// //     if(favIcon)
// //     {
// //         favIcon.dataset.index =i;
// //     }
// // });


// // // Handle play/pause click on master play
// // masterPlay.addEventListener('click', () => {
// //     if (audioElement.paused || audioElement.currentTime <= 0) {
// //         audioElement.play();
// //         masterPlay.classList.remove('fa-play-circle');
// //         masterPlay.classList.add('fa-pause-circle');
// //         gif.style.opacity = 1;

// //         // Update current song play icon
// //         const currentSongIcon = document.getElementById(songIndex);
// //         makeAllPlays();
// //         currentSongIcon.classList.remove('fa-play-circle');
// //         currentSongIcon.classList.add('fa-pause-circle');
// //     } else {
// //         audioElement.pause();
// //         masterPlay.classList.remove('fa-pause-circle');
// //         masterPlay.classList.add('fa-play-circle');
// //         gif.style.opacity = 0;

// //         // Update current song pause icon
// //         const currentSongIcon = document.getElementById(songIndex);
// //         currentSongIcon.classList.remove('fa-pause-circle');
// //         currentSongIcon.classList.add('fa-play-circle');
// //     }
// // });

// // // Listen to audio time updates
// // audioElement.addEventListener('timeupdate', () => {
// //     let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
// //     myProgressBar.value = progress;
// // });

// // myProgressBar.addEventListener('change', () => {
// //     audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
// // });

// // // Reset all song play buttons
// // const makeAllPlays = () => {
// //     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// //         element.classList.add('fa-play-circle');
// //         element.classList.remove('fa-pause-circle');
// //     })
// // }

// // // Handle click on individual song items
// // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
// //     element.addEventListener('click', (e) => {
// //         makeAllPlays();
// //         songIndex = parseInt(e.target.id);
// //         e.target.classList.remove('fa-play-circle');
// //         e.target.classList.add('fa-pause-circle');
// //         audioElement.src = `music/${songIndex + 1}.mp3`;
// //         masterSongName.innerText = songs[songIndex].songName;
// //         audioElement.currentTime = 0;
// //         audioElement.play();
// //         gif.style.opacity = 1;
// //         masterPlay.classList.remove('fa-play-circle');
// //         masterPlay.classList.add('fa-pause-circle');
// //     })
// // })

// // // Next button
// // document.getElementById('next').addEventListener('click', () => {
// //     if (songIndex >= songs.length - 1) {
// //         songIndex = 0;
// //     } else {
// //         songIndex += 1;
// //     }
// //     audioElement.src = `music/${songIndex + 1}.mp3`;
// //     masterSongName.innerText = songs[songIndex].songName;
// //     audioElement.currentTime = 0;
// //     audioElement.play();
// //     masterPlay.classList.remove('fa-play-circle');
// //     masterPlay.classList.add('fa-pause-circle');

// //     makeAllPlays();
// //     const currentSongIcon = document.getElementById(songIndex);
// //     currentSongIcon.classList.remove('fa-play-circle');
// //     currentSongIcon.classList.add('fa-pause-circle');
// // })

// // // Previous button
// // document.getElementById('previous').addEventListener('click', () => {
// //     if (songIndex <= 0) {
// //         songIndex = 0;
// //     } else {
// //         songIndex -= 1;
// //     }
// //     audioElement.src = `music/${songIndex + 1}.mp3`;
// //     masterSongName.innerText = songs[songIndex].songName;
// //     audioElement.currentTime = 0;
// //     audioElement.play();
// //     masterPlay.classList.remove('fa-play-circle');
// //     masterPlay.classList.add('fa-pause-circle');

// //     makeAllPlays();
// //     const currentSongIcon = document.getElementById(songIndex);
// //     currentSongIcon.classList.remove('fa-play-circle');
// //     currentSongIcon.classList.add('fa-pause-circle');
// // })


// // //Auto play next song when current song ends
// // audioElement.addEventListener('ended',()=>{
// //     if(songIndex >=songs.length -1)
// //     {
// //         songIndex =0;
// //     }
// //     else
// //     {
// //         songIndex +=1;
// //     }
// //     audioElement.src = `music/${songIndex +1}.mp3`;
// //     masterSongName.innerText = songs[songIndex].songName;
// //     audioElement.currentTime =0;
// //     audioElement.play();

// //     makeAllPlays();
// //     const currentSongIcon = document.getElementById(songIndex);
// //     currentSongIcon.classList.remove('fa-play-circle');
// //     currentSongIcon.classList.add('fa-pause-circle');

// //     masterPlay.classList.remove('fa-play-circle');
// //     masterPlay.classList.add('fa-pause-circle');
// // });

// // //Update fav icon 
// // function updateFavoriteIcons() 
// // {
// //     document.querySelectorAll('.favorite-icon').forEach((icon) => {
// //         const index = parseInt(icon.dataset.index);

// //         if (favorites.includes(index)) {
// //             icon.classList.remove('far');       // Remove outline style
// //             icon.classList.add('fas');          // Add solid style
// //             icon.style.color = 'red';           // Make heart red
// //         } else {
// //             icon.classList.remove('fas');       // Remove solid style
// //             icon.classList.add('far');          // Add outline style
// //             icon.style.color = '';              // Reset color
// //         }
// //     });
// // }


// // function initializeFavoriteListeners()
// // {
// //     document.querySelectorAll('.favorite-icon').forEach((icon)=>{
// //         icon.addEventListener('click',(e)=>{
// //             const songId = parseInt(e.target.dataset.index);
// //             if(favorites.includes(songId))
// //             {
// //                 favorites =favorites.filter((id)=>id !== songId);
// //             }
// //             else
// //             {
// //                 favorites.push(songId);
// //             }

// //             localStorage.setItem('favorites',JSON.stringify(favorites));
// //             updateFavoriteIcons();
// //         });
// //     });
// // }

// // // Call after page load and after song list is rendered
// // updateFavoriteIcons();
// // initializeFavoriteListeners();

// // document.getElementById('viewFavoritesBtn').addEventListener('click', () => {
// //     const favoriteSongs = songs.filter((_, index) => favorites.includes(index));
    
// //     // You can update the DOM to show only favorite songs here
// //     const songContainer = document.querySelector('.songItemContainer');
// //     songContainer.innerHTML = ""; // Clear existing list

// //     favoriteSongs.forEach((song, i) => {
// //         const originalIndex = favorites[i];
// //         songContainer.innerHTML += `
// //             <div class="songItem">
// //                 <img src="${song.coverPath}" alt="cover">
// //                 <span class="songName">${song.songName}</span>
// //                 <span class="timestamp">
// //                     3:45 
// //                     <i class="far fa-play-circle songItemPlay" id="${originalIndex}"></i>
// //                     <i class="fas fa-heart favorite-icon" data-index="${originalIndex}" style="color:red;"></i>
// //                 </span>
// //             </div>
// //         `;
// //     });

// //     // Re-initialize event listeners
// //     updateFavoriteIcons();
// //     initializeSongItemPlayEvents(); // You'll need to define this for play button
// // });


// // document.getElementById('viewFavorites').addEventListener('click', () => {
// //     isPlayingFavorites = true;
// //     favoritePlayIndex = 0;
// //     renderFavoritesSection();
// // });

// // function renderFavoritesSection() {
// //     const favoritesSection = document.getElementById('favoritesSection');
// //     favoritesSection.innerHTML = '';

// //     if (favorites.length === 0) {
// //         favoritesSection.innerHTML = '<p style="color: white;">No favorite songs yet.</p>';
// //         return;
// //     }

// //     favorites.forEach((favIndex) => {
// //         const song = songs[favIndex];
// //         const songItem = document.createElement('div');
// //         songItem.className = 'songItem';
// //         songItem.innerHTML = `
// //             <img src="${song.coverPath}" alt="cover">
// //             <span class="songName">${song.songName}</span>
// //             <span class="songListplay">
// //                 <span class="timestamp">--:-- 
// //                     <i class="far fa-play-circle songItemPlay" data-index="${favIndex}"></i>
// //                     <i class="far fa-heart favorite-icon active" data-index="${favIndex}"></i>
// //                 </span>
// //             </span>
// //         `;
// //         favoritesSection.appendChild(songItem);
// //     });

// //     initializeFavoriteListeners(); // keep hearts working
// //     initializeSongItemPlayEvents(); // handle song clicks
// // }

// // function initializeSongItemPlayEvents() {
// //     document.querySelectorAll('.songItemPlay').forEach((element) => {
// //         element.addEventListener('click', (e) => {
// //             const index = parseInt(e.target.dataset.index);
// //             songIndex = index;
// //             favoritePlayIndex = favorites.indexOf(index);
// //             isPlayingFavorites = true;
// //             playSongByIndex(index);
// //         });
// //     });
// // }

// // function playSongByIndex(index) {
// //     audioElement.src = songs[index].filePath;
// //     masterSongName.innerText = songs[index].songName;
// //     audioElement.currentTime = 0;
// //     audioElement.play();

// //     gif.style.opacity = 1;
// //     masterPlay.classList.remove('fa-play-circle');
// //     masterPlay.classList.add('fa-pause-circle');

// //     makeAllPlays();

// //     const currentSongIcon = document.getElementById(index) || 
// //           document.querySelector(`.songItemPlay[data-index="${index}"]`);

// //     if (currentSongIcon) {
// //         currentSongIcon.classList.remove('fa-play-circle');
// //         currentSongIcon.classList.add('fa-pause-circle');
// //     }
// // }

console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Load favorites from localStorage or initialize empty
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let isPlayingFavorites = false;
let favoritePlayIndex = 0;

//Search
const searchInput = document.querySelector('.searchText');
const searchIcon = document.getElementById('searchIcon');
const resultsDiv = document.getElementById('results');

let songs = [
    { songName: "Apna Bana Le - Bhediya", filePath: "music/1.mp3", coverPath: "images/apna bana le piya2.jpg", timestamp:"04:32"},
    { songName: "Shiddat Title Track - Shiddat", filePath: "music/2.mp3", coverPath: "images/shiddat.png", timestamp:"04:50" },
    { songName: "Tum Se Hi - Jab We Met ", filePath: "music/3.mp3", coverPath: "images/tum_se_hi.png", timestamp:"05:23"},
    { songName: "Tera hone Laga Hoon - Ajab Prem Ki Gajab Kahani", filePath: "music/4.mp3", coverPath: "images/tera_hone.png", timestamp:"04:46"},
    { songName: "Vhalam Avo Ne - Love Ni Bhavai", filePath: "music/2.mp3", coverPath: "images/vhalam_avo_ne.png", timestamp:"04:40"},
    { songName: "Raatan Lambiyan - Shershaan", filePath: "music/2.mp3", coverPath: "images/shershaah.jpeg", timestamp:"03:46"},
    { songName: "Aayi Nai - Stree 2", filePath: "music/2.mp3", coverPath: "images/aayi_nai.png", timestamp:"05:13"},
    { songName: "Tum Se - Teri Baato Me Esa Uljha Jiya", filePath: "music/2.mp3", coverPath: "images/Tum_se.jpg", timestamp:"04:46" },
];

// Populate song items with cover and song name and assign data-index to fav icons
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    const favIcon = element.querySelector('.favorite-icon');
    if (favIcon) {
        favIcon.dataset.index = i;
    }
});

// Reset all play icons to play state
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    });
}

// Play a song by its index
function playSongByIndex(index) {
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    makeAllPlays();

    const currentSongIcon = document.querySelector(`.songItemPlay[data-index="${index}"]`);
    if (currentSongIcon) {
        currentSongIcon.classList.remove('fa-play-circle');
        currentSongIcon.classList.add('fa-pause-circle');
    }
}

// Initialize play button event listeners for song items
function initializeSongItemPlayEvents() {
    document.querySelectorAll('.songItemPlay').forEach((element) => {
        element.addEventListener('click', (e) => {
            const indexStr = e.currentTarget.getAttribute('data-index');
            console.log("Clicked play button data-index:", indexStr);

            const index = parseInt(indexStr, 10);
            if (isNaN(index)) {
                console.error("Invalid index on clicked element", e.currentTarget);
                return;
            }

            songIndex = index;
            favoritePlayIndex = favorites.indexOf(index);
            isPlayingFavorites = true;
            playSongByIndex(index);
        });
    });
}

// Handle master play button click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

        const currentSongIcon = document.querySelector(`.songItemPlay[data-index="${songIndex}"]`);
        makeAllPlays();
        if (currentSongIcon) {
            currentSongIcon.classList.remove('fa-play-circle');
            currentSongIcon.classList.add('fa-pause-circle');
        }
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

        const currentSongIcon = document.querySelector(`.songItemPlay[data-index="${songIndex}"]`);
        if (currentSongIcon) {
            currentSongIcon.classList.remove('fa-pause-circle');
            currentSongIcon.classList.add('fa-play-circle');
        }
    }
});

// Update progress bar as audio plays
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek audio when progress bar changes
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Next button logic
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSongByIndex(songIndex);
});

// Previous button logic
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    playSongByIndex(songIndex);
});

// Auto-play next song on current song end
audioElement.addEventListener('ended', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSongByIndex(songIndex);
});

// Update favorite icons based on favorites array
function updateFavoriteIcons() {
    document.querySelectorAll('.favorite-icon').forEach((icon) => {
        const index = parseInt(icon.dataset.index);

        if (favorites.includes(index)) {
            icon.classList.remove('far');       // outline heart
            icon.classList.add('fas');          // solid heart
            icon.style.color = 'red';
        } else {
            icon.classList.remove('fas');       // solid heart
            icon.classList.add('far');          // outline heart
            icon.style.color = '';
        }
    });
}

// Initialize favorite icon click listeners
function initializeFavoriteListeners() {
    document.querySelectorAll('.favorite-icon').forEach((icon) => {
        icon.addEventListener('click', (e) => {
            const songId = parseInt(e.target.dataset.index);
            if (favorites.includes(songId)) {
                favorites = favorites.filter((id) => id !== songId);
            } else {
                favorites.push(songId);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavoriteIcons();
        });
    });
}

// View Favorites button event
document.getElementById('viewFavoritesBtn').addEventListener('click', () => {
    const favoriteSongs = songs.filter((_, index) => favorites.includes(index));

    const songContainer = document.querySelector('.songItemContainer');
    songContainer.innerHTML = ""; // Clear existing

    favoriteSongs.forEach((song, i) => {
        const originalIndex = favorites[i];
        songContainer.innerHTML += `
            <div class="songItem">
                <img src="${song.coverPath}" alt="cover">
                <span class="songName">${song.songName}</span>
                <span class="timestamp">
                    ${song.timestamp || ''}
                    <i class="far fa-play-circle songItemPlay" data-index="${originalIndex}"></i>
                    <i class="fas fa-heart favorite-icon" data-index="${originalIndex}" style="color:red;"></i>
                </span>
            </div>
        `;
    });

    // Re-initialize listeners after rendering
    updateFavoriteIcons();
    initializeSongItemPlayEvents();
    initializeFavoriteListeners();
});

// Initialize everything after DOM is ready
updateFavoriteIcons();
initializeFavoriteListeners();
initializeSongItemPlayEvents();

 const mockSongs = [
    'Apna Bana Le - Bhediya',
    'Shiddat Title Track - Shiddat',
    'Tum Se Hi - Jab We Met ',
    'Tera Hone Laga Hoon - Ajab Prem Ki Gajab Kahani',
    'Vhalam Avo Ne - Love Ni Bhavai',
    'Shershaan - Shershaan',
    'Aayi Nai - Stree 2',
    'Tum Se - Teri Baato Me Esa Uljha Jiya'
  ];

// Search function 
function handleSearch(query) 
{
    const results = mockSongs.filter(song =>
      song.toLowerCase().includes(query.toLowerCase())
    );

    resultsDiv.innerHTML = results.length
      ? '<ul>' + results.map(song => `<li>${song}</li>`).join('') + '</ul>'
      : '<p style="color: white;">No results found.</p>';
}

//Click search icon
  searchIcon.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) handleSearch(query);
  });

// Optional: press Enter to search
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) handleSearch(query);
    }
  });


//Search box container -hide and results
const searchBox = document.getElementById('searchBox');
const resultBox = document.getElementById('results');
const audioPlayer = document.getElementById('audioPlayer');

//Play audio when clicked on result
resultsDiv.addEventListener('click', e => {
  const file = e.target.dataset.file;
  if (file) {
    audioPlayer.src = file;
    audioPlayer.style.display = 'flex';
    audioPlayer.play();
  }
});

searchBox.addEventListener('input', () => {
  const query = searchBox.value.trim();
    if (query === '') 
    {
        resultBox.style.display = 'none';
    } 
    else 
    {
        resultBox.style.display = 'flex'; // Use flex here instead of block
        resultBox.textContent = `Showing results for "${query}"`;
    }
});

