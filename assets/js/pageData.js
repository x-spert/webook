module.exports = function() {
  return [
    {no: 2},{no: 3},{no: 4},{no: 5},{no: 6},{no: 7},
    {
      no: 8
    },
    {
      no: 9
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
      no: 11
    },
    {
      no: 12
    },
    {
      no: 13,
      title: 'Kreuze sinngemass an!',
      audio: '13.mp3',
      ex: {
        name: 'mediumselect',
        bg: '13ex',
        data: [
          {
            identifier: 'yellow',
            answerTrue: 'top: 26.4%; right: 15.8%',
            answerFalse: 'top: 13.7%; right: 9.5%'
          },
          {
            identifier: 'green',
            answerTrue: 'top: 26.4%; right: 32.4%',
            answerFalse: 'top: 13.7%; right: 26.1%'
          },
          {
            identifier: 'blue',
            answerTrue: 'top: 9.6%; right: 3.1%',
            answerFalse: 'top: 22.15%; right: 8.1%'
          },
          {
            identifier: 'pink',
            answerTrue: 'top: 22.15%; right: 29.5%',
            answerFalse: 'top: 9.6%; right: 23.7%'
          }
        ]
      }
    },
    {no: 14},{no: 15},{no: 16},{no: 17}
  ]
} 