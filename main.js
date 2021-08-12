// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(e){
  let key = e.target;
  key.style.backgroundColor = '#ff0000'
}

function keyReturn(e){
  let key = e.target;
  key.style.backgroundColor = ''
}

// Write a named function with event handler properties
function playingKeys(note){
  // Key is pressed
  if (note.addEventListener){
    note.addEventListener('mousedown', keyPlay, false)
  } else {
    note.attachEvent('onmousedown', keyPlay)
  }

  // Key is released
  if (note.addEventListener){
    note.addEventListener('mouseup', keyReturn, false)
  } else {
    note.attachEvent('onmouseup', keyReturn)
  }
}

// Write a loop that runs the array elements through the function
notes.forEach(playingKeys)

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
let letterNoteOne = document.getElementById('letter-note-one');
let letterNoteTwo = document.getElementById('letter-note-two');
let letterNoteThree = document.getElementById('letter-note-three');
let letterNoteFour = document.getElementById('letter-note-four');
let letterNoteFive = document.getElementById('letter-note-five');
let letterNoteSix = document.getElementById('letter-note-six');
let wordFive = document.getElementById('word-five');
let wordSix = document.getElementById('word-six');

if (nextOne.addEventListener){
  nextOne.addEventListener('click', function(){
    nextOne.hidden = true
    nextTwo.hidden = false
    letterNoteFive.innerText = 'D'
    letterNoteSix.innerText = 'C'
  }, false)
} else {
  nextOne.attachEvent('onclick', function(){
    nextOne.hidden = true
    nextTwo.hidden = false
    letterNoteFive.innerText = 'D'
    letterNoteSix.innerText = 'C'
  })
}

// Write anonymous event handler property and function for the second progress button
if (nextTwo.addEventListener){
  nextTwo.addEventListener('click', function(){
    nextTwo.hidden = true
    nextThree.hidden = false
    wordFive.innerText = 'DEAR'
    wordSix.innerText = 'FRI-'
    lastLyric.style.display = 'inline-block'
    letterNoteThree.innerText = 'G'
    letterNoteFour.innerText = 'E'
    letterNoteFive.innerText = 'C'
    letterNoteSix.innerText = 'B'
  }, false)
} else {
  nextTwo.attachEvent('onclick', function(){
    nextTwo.hidden = true
    nextThree.hidden = false
    wordFive.innerText = 'DEAR'
    wordSix.innerText = 'FRI-'
    lastLyric.style.display = 'inline-block'
    letterNoteThree.innerText = 'G'
    letterNoteFour.innerText = 'E'
    letterNoteFive.innerText = 'C'
    letterNoteSix.innerText = 'B'
  })
}


// Write anonymous event handler property and function for the third progress button

if (nextThree.addEventListener){
  nextThree.addEventListener('click', function(){
    nextThree.hidden = true
    startOver.hidden = false
    wordFive.innerText = 'TO'
    wordSix.innerText = 'YOU'
    lastLyric.style.display = 'none'
    letterNoteOne.innerText = 'F'
    letterNoteTwo.innerText = 'F'
    letterNoteThree.innerText = 'E'
    letterNoteFour.innerText = 'C'
    letterNoteFive.innerText = 'D'
    letterNoteSix.innerText = 'C'
  }, false)
} else {
  nextThree.attachEvent('onclick', function(){
    nextThree.hidden = true
    startOver.hidden = false
    wordFive.innerText = 'TO'
    wordSix.innerText = 'YOU'
    lastLyric.style.display = 'none'
    letterNoteOne.innerText = 'F'
    letterNoteTwo.innerText = 'F'
    letterNoteThree.innerText = 'E'
    letterNoteFour.innerText = 'C'
    letterNoteFive.innerText = 'D'
    letterNoteSix.innerText = 'C'
  })
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerText = 'HAP-';
  document.getElementById('letter-note-one').innerText = 'G';
  document.getElementById('word-two').innerText = 'PY';
  document.getElementById('letter-note-two').innerText = 'G';
  document.getElementById('word-three').innerText = 'BIRTH-';
  document.getElementById('letter-note-three').innerText = 'A';
  document.getElementById('word-four').innerText = 'DAY';
  document.getElementById('letter-note-four').innerText = 'G';
  document.getElementById('word-five').innerText = 'TO';
  document.getElementById('letter-note-five').innerText = 'C';
  document.getElementById('word-six').innerText = 'YOU!';
  document.getElementById('letter-note-six').innerText = 'B';
}