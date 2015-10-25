module.exports = function() {
  return [
    {no: 2},{no: 3},{no: 4},{no: 5},{no: 6},{no: 7},
    {
      no: 8,
      audio: '8.mp3',
      video: '8.mp4'
    },
    {
      no: 9,
      audio: '9.mp3'
    },
    {
      no: 10,
      title: 'Wer spricht? Hor zu und kreis ein!',
      ex: {
        name: 'bigselect',
        bg: '10ex',
        data: [
          {
            identifier: 'erik',
            answerTrue: 'top: 15%; left: 49%',
            answerFalse: 'top: 15%; right: 10%'
          },
          {
            identifier: 'marion',
            answerTrue: 'top: 15%; left: 50%',
            answerFalse: 'top: 15%; right: 9%'
          },
          {
            identifier: 'julia',
            answerTrue: 'top: 4%; right: 7%',
            answerFalse: 'top: 4%; left: 53%'
          },
          {
            identifier: 'nick',
            answerTrue: 'top: 1%; left: 54%',
            answerFalse: 'top: 1%; right: 6%'
          }
        ]
      }
    },
    {
      no: 11,
      title: 'Hoe zu und sing! Mal die buchstaben aus!',
      audio: '11.mp3'
    },
    {no: 12},{no: 13},{no: 14},{no: 15},{no: 16},{no: 17}
  ]
} 