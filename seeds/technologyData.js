//Imports............................................
const { Technology } = require('../models');


//Seeds............................................
const technologyData = [
  {
    id: 1,
    techname: 'JavaScript',
  },
  {
    id: 2,
    techname: 'CSS',
  },
  {
    id: 3,
    techname: 'HTML',
  },
  {
    id: 4,
    techname: 'SQL',
  },
  {
    id: 5,
    techname: 'Python',
  },
  {
    id: 6,
    techname: 'C',
  },
  {
    id: 7,
    techname: 'C#',
  },
  {
    id: 8,
    techname: 'C++',
  },
  {
    id: 9,
    techname: 'PHP',
  },
  {
    id: 10,
    techname: 'Perl',
  },
  {
    id: 11,
    techname: 'PowerShell',
  },
  {
    id: 12,
    techname: 'Assembly Language',
  },
  {
    id: 13,
    techname: 'Cobol',
  },
  {
    id: 14,
    techname: 'MFortran',
  },
  {
    id: 15,
    techname: 'ABAP',
  },
  {
    id: 16,
    techname: 'Scratch',
  },
  {
    id: 17,
    techname: 'Julia',
  },
  {
    id: 18,
    techname: 'Java',
  },
  {
    id: 19,
    techname: 'Go',
  },
  {
    id: 20,
    techname: 'Ruby',
  },
  {
    id: 21,
    techname: 'Swift',
  },
  {
    id: 22,
    techname: 'Scala',
  },
  {
    id: 23,
    techname: 'R',
  },
  {
    id: 24,
    techname: 'Objective-C',
  },
  {
    id: 25,
    techname: 'Arduino',
  },
  {
    id: 26,
    techname: 'MATLAB',
  },
  {
    id: 27,
    techname: 'Rust',
  },
  {
    id: 28,
    techname: 'TypeScript',
  },
  {
    id: 29,
    techname: 'Kotlin',
  },
  {
    id: 30,
    techname: 'Groovy',
  },
  {
    id: 31,
    techname: 'Dart',
  },
  {
    id: 32,
    techname: 'Scheme',
  },
  {
    id: 33,
    techname: 'Shell',
  },
  {
    id: 34,
    techname: 'Prolog',
  },
  {
    id: 35,
    techname: 'VBScript',
  },
  {
    id: 36,
    techname: 'Haskell',
  },
  {
    id: 37,
    techname: 'Hack',
  },
  {
    id: 38,
    techname: 'Delphi',
  },
  {
    id: 39,
    techname: 'Visual Basic',
  },
  {
    id: 40,
    techname: 'Lua',
  },
  {
    id: 41,
    techname: 'Ada',
  },
  {
    id: 42,
    techname: 'Lisp',
  },
  {
    id: 43,
    techname: 'Bash',
  },
  {
    id: 44,
    techname: 'MQL4',
  },
  {
    id: 45,
    techname: 'Clojure',
  },
  {
    id: 46,
    techname: 'Apex',
  },
  {
    id: 47,
    techname: 'LabVIEW',
  },
  {
    id: 48,
    techname: 'D',
  },
  {
    id: 49,
    techname: 'SAS',
  },
  {
    id: 50,
    techname: 'ABL',
  },
  {
    id: 51,
    techname: 'Logo',
  },
  {
    id: 3,
    techname: 'node.js',
  },
  {
    id: 4,
    techname: 'jquery',
  },
  {
    id: 5,
    techname: 'express.js',
  },
  {
    id: 6,
    techname: 'mysql',
  },
];


//Init............................................
const seedTechnologies = () => Technology.bulkCreate(technologyData);


//Exports............................................
module.exports = seedTechnologies;