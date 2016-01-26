module.exports = function() {
  return [
    {
      no: 18,
      title1: '',
      title2: 'Listen and put a token on the correct answer.',
      title3: 'Look at pages 10-11 and complete the sentences.',
      exTrigger: {
        bottom: '35%',
        top: '34%'
      },
      ex: {
        name: 'dnd',
        bg: '18ex1',
        data: []
      },
      ex2Trigger: {
        bottom: '35%',
        top: '34%'
      },
      ex2: {
        name: 'mediumselect',
        bg: '18ex2',
        data: [
          {
            identifier: 'one',
            model: '',
            position: 'top: 34.5%; height: 9%; position: absolute; width: 33%',
            answerTrue: 'right: 59.5%',
            answerFalse: 'right: 15.5%'
          },
          {
            identifier: 'two',
            model: '',
            position: 'top: 34.5%; height: 9%; position: absolute; width: 33%; left: 33%',
            answerFalse: 'right: 54.5%',
            answerTrue: 'right: 12.5%'
          },
          {
            identifier: 'three',
            model: '',
            position: 'top: 34.5%; height: 9%; position: absolute; width: 33%; left: 66%',
            answerFalse: 'right: 56.5%',
            answerTrue: 'right: 16.5%'
          },
          {
            identifier: 'four',
            model: '',
            position: 'top: 59.5%; height: 9%; position: absolute; width: 33%',
            answerTrue: 'right: 56.5%',
            answerFalse: 'right: 15.5%'
          },
          {
            identifier: 'five',
            model: '',
            position: 'top: 59.5%; height: 9%; position: absolute; width: 33%; left: 33%',
            answerTrue: 'right: 58.5%',
            answerFalse: 'right: 12.5%'
          },
          {
            identifier: 'six',
            model: '',
            position: 'top: 59.5%; height: 9%; position: absolute; width: 33%; left: 66%',
            answerFalse: 'right: 56.5%',
            answerTrue: 'right: 13.5%'
          }
        ]
      },
      ex3Trigger: {
        bottom: '2%',
        top: '65%'
      },
      ex3: {
        name: 'typer',
        bg: '18ex3',
        data: [
          {
            identifier: 'one',
            position: 'top: 42%; left: 38%; width: 38%',
            model: '',
            solution: 'are going'
          },
          {
            identifier: 'two',
            position: 'top: 47.5%; left: 17%; width: 38%',
            model: '',
            solution: 'friendly'
          },
          {
            identifier: 'three',
            position: 'top: 47.5%; left: 66%; width: 38%',
            model: '',
            solution: 'fun'
          },
          {
            identifier: 'four',
            position: 'top: 53%; left: 37%; width: 37%',
            model: '',
            solution: 'irish'
          },
          {
            identifier: 'five',
            position: 'top: 58.6%; left: 26%; width: 38%',
            model: '',
            solution: 'are waiting'
          },
          {
            identifier: 'six',
            position: 'top: 64%; left: 11%; width: 38%',
            model: '',
            solution: 'is running'
          },
          {
            identifier: 'seven',
            position: 'top: 70%; left: 14%; width: 37%',
            model: '',
            solution: 'isn\'t listening'
          }
        ]
      }
    },
    {
      no: 25,
      title1: 'Look at the table and complete with CAN or CAN\'T.',
      exTrigger: {
        bottom: '28%',
        top: '6%'
      },
      ex: {
        name: 'typer',
        bg: '25ex',
        data: [
          {
            identifier: 'one',
            position: 'top: 64.5%; left: 21%; width: 6%',
            model: '',
            solution: 'can'
          },
          {
            identifier: 'two',
            position: 'top: 64.5%; left: 44%; width: 10%',
            model: '',
            solution: 'can\'t'
          },
          {
            identifier: 'three',
            position: 'top: 70.5%; left: 21.5%; width: 6%',
            model: '',
            solution: 'can'
          },
          {
            identifier: 'four',
            position: 'top: 70.5%; left: 44%; width: 10%',
            model: '',
            solution: 'can\'t'
          },
          {
            identifier: 'five',
            position: 'top: 76.5%; left: 33.5%; width: 7%',
            model: '',
            solution: 'can'
          },
          {
            identifier: 'six',
            position: 'top: 76.5%; left: 58.5%; width: 10%',
            model: '',
            solution: 'can\'t'
          },
          {
            identifier: 'seven',
            position: 'top: 82.5%; left: 23.5%; width: 8%',
            model: '',
            solution: 'can'
          },
          {
            identifier: 'eight',
            position: 'top: 82.5%; left: 52%; width: 10%',
            model: '',
            solution: 'can\'t'
          },
          {
            identifier: 'nine',
            position: 'top: 88.2%; left: 31.5%; width: 9%',
            model: '',
            solution: 'can'
          },
          {
            identifier: 'ten',
            position: 'top: 88.2%; left: 69%; width: 10%',
            model: '',
            solution: 'can\'t'
          }
        ]
      }
    }
  ]
}
