module.exports = function() {
  return {
    menu: {
      name: "menu",
      next: "Next",
      prev: "Previous",
      jump: "Jump to page",
      search: "Go!",
      toc: "Table of Contents",
      help: "Help"
    },
    pages: {
      toc: {
        title: 'Table of Contents',
        chapters: [
          {
            title: 'Chapter 1: Das Wetter',
            pageno: '5'
          },
          {
            title: 'Chapter 2: Mein Lieblingsessen',
            pageno: '17'
          },
          {
            title: 'Chapter 3: Fernsehen',
            pageno: '39'
          },
          {
            title: 'Chapter 4: Wie geht\'s dir?',
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
      }
    }
  }
}
