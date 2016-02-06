module.exports = function() {
  return {
    menu: {
      name: "Meniu",
      next: "Inainte",
      prev: "Inapoi",
      jump: "Mergi la pagina",
      search: "Hai!",
      toc: "Cuprins",
      help: "Ajutor"
    },
    modal: {
      video: "Mergi la VIDEO",
      static: "Mergi la POZA(E)",
      exercise: "Mergi la EXERCITIU",
      exercise2: "Mergi la EXERCITIU 2"
    },
    pages: {
      toc: {
        title: 'Cuprins',
        chapters: [
          {
            title: 'Capitolul 1: Das Wetter',
            pageno: '5'
          },
          {
            title: 'Capitolul 2: Mein Lieblingsessen',
            pageno: '17'
          },
          {
            title: 'Capitolul 3: Fernsehen',
            pageno: '39'
          },
          {
            title: 'Capitolul 4: Wie geht\'s dir?',
            pageno: '55'
          },
          {
            title: 'Frohe Weihnachten',
            pageno: '71'
          },
          {
            title: 'Wiederholungstest',
            pageno: '73'
          },
          {
            title: 'Glossar',
            pageno: '77'
          }          ,
          {
            title: 'Hörtexte',
            pageno: '81'
          }
        ]
      },
      help: {
        title: 'Ai nevoie de ajutor?',
        introParagraphs: [
          {
            text: 'Pentru a parcurge lectiile manualului selecteaza din meniul din stanga "Cuprins" sau mergi direct la pagina pe care doresti sa o accesezi.'
          },
          {
            text: 'In aceasta carte poti gasi urmatoarele semne:'
          }
        ],
        outroParagraphs: [
          {
            text: 'Dand click pe aceste semne vei putea efectua activitati multimedia interactive si de invatare.'
          }
        ],
        defs: [
          {
            icon: 'static',
            helper: 'mareste imaginea'
          },
          {
            icon: 'audio',
            helper: 'asculta clipul audio'
          },
          {
            icon: 'ex',
            helper: 'rezolva exercitiul'
          },
          {
            icon: 'solve',
            helper: 'vezi solutia'
          },
          {
            icon: 'help',
            helper: 'cere ajutor'
          },
          {
            icon: 'reset',
            helper: 'ia exercitiul de la capat'
          },
          {
            icon: 'play',
            helper: 'asculta cerinta'
          },
          {
            icon: 'pause',
            helper: 'pune pauza cerintei'
          },
          {
            icon: 'stop',
            helper: 'opreste cerinta'
          }
        ]
      }
    }
  }
}
