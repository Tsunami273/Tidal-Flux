// Reflection (sanaas remix)
var Easy = [
{notes: [0,0,0,0], startTime: 0},
{notes: [0,0,0,0], startTime: 0}, 
{notes: [0,0,0,0], startTime: 0}, 
{notes: [0,0,0,0], startTime: 0}, // 4 
{notes: [0,0,0,0], startTime: 0},
{notes: [0,0,0,0], startTime: 0}, 
{notes: [0,0,0,0], startTime: 0}, 
{notes: [4,0,8,0], startTime: 0}, // 8
{notes: [32,0,1,0], startTime: 0},
{notes: [2,0,16,0], startTime: 0}, 
{notes: [32,0,16,0], startTime: 0}, 
{notes: [2,0,1,0], startTime: 0}, // 12
{notes: [4,0,8,0], startTime: 0},
{notes: [1,0,8,0], startTime: 0}, 
{notes: [4,0,32,0], startTime: 0}, 
{notes: [32,16,8,4], startTime: 0}, // 16
{notes: [2,1,2,4], startTime: 0},
{notes: [8,16,32,1], startTime: 0}, 
{notes: [32,8,4,1], startTime: 0}, 
{notes: [32,0,16,0], startTime: 0}, // 20
{notes: [8,0,16,0], startTime: 0},
{notes: [1,0,2,0], startTime: 0}, 
{notes: [4,0,2,0], startTime: 0}, 
{notes: [32,0,1,0], startTime: 0}, // 24
{notes: [8,0,4,0], startTime: 0},
{notes: [16,0,2,0], startTime: 0}, 
{notes: [1,0,4,0], startTime: 0}, 
{notes: [32,8,4,1], startTime: 0}, // 28
{notes: [8,4,8,4], startTime: 0},
{notes: [32,0,4,0], startTime: 0}, 
{notes: [8,0,1,0], startTime: 0}, 
{notes: [4,0,2,0], startTime: 0}, // 32
{notes: [16,0,2,0], startTime: 0},
{notes: [32,0,2,0], startTime: 0}, 
{notes: [1,0,8,0], startTime: 0}, 
{notes: [32,1,16,2], startTime: 0}, //36
{notes: [8,4,8,4], startTime: 0},
{notes: [32,0,1,0], startTime: 0}, 
{notes: [8,0,16,0], startTime: 0}, 
{notes: [4,0,2,0], startTime: 0}, //40
{notes: [1,0,8,0], startTime: 0},
{notes: [16,0,32,0], startTime: 0}, 
{notes: [8,0,1,0], startTime: 0}, 
{notes: [2,0,4,0], startTime: 0}, //44 
{notes: [1,0,32,0], startTime: 0},
{notes: [8,0,2,0], startTime: 0}, 
{notes: [16,0,4,0], startTime: 0}, 
{notes: [32,16,8,4], startTime: 0}, // 48
{notes: [2,1,2,4], startTime: 0},
{notes: [8,16,32,1], startTime: 0}, 
{notes: [32,8,4,1], startTime: 0}, 
{notes: [32,0,16,0], startTime: 0}, // 52
{notes: [8,0,16,0], startTime: 0},
{notes: [1,0,2,0], startTime: 0}, 
{notes: [4,0,2,0], startTime: 0}, 
{notes: [32,0,1,0], startTime: 0}, // 56
{notes: [8,0,4,0], startTime: 0},
{notes: [16,0,2,0], startTime: 0}, 
{notes: [1,0,4,0], startTime: 0}, 
{notes: [32,8,4,1], startTime: 0}, // 60
{notes: [8,4,8,4], startTime: 0},
{notes: [32,0,4,0], startTime: 0}, 
{notes: [8,0,1,0], startTime: 0}, 
{notes: [4,0,2,0], startTime: 0}, // 64
{notes: [8,0,1,0], startTime: 0}, 

]; 
var Medium = [
  {notes: [0,0,0,0], startTime: 0}, 
  {notes: [0,0,0,0], startTime: 0},
  {notes: [0,0,0,0], startTime: 0},
  {notes: [0,0,0,0], startTime: 0}, //4 
  {notes: [0,0,0,0], startTime: 0},
  {notes: [0,0,0,0], startTime: 0},
  {notes: [0,0,0,0], startTime: 0},
  {notes: [8,4,8,4], startTime: 0}, //8
  {notes: [16,2,32,1], startTime: 0}, 
  {notes: [32,16,8,1], startTime: 0},
  {notes: [2,4,16,8], startTime: 0},
  {notes: [32,16,1,2], startTime: 0}, // 12
  {notes: [8,4,16,2], startTime: 0},
  {notes: [32,4,16,2], startTime: 0},
  {notes: [8,1,32,1], startTime: 0},
  {notes: [32,4,16,2,8,1,32,4], startTime: 0}, //16
  {notes: [16,2,8,1,8,4,8,4], startTime: 0},
  {notes: [1,8,2,16,4,32,1,8], startTime: 0},
  {notes: [2,16,4,32,8,4,8,4], startTime: 0},
  {notes: [32,2,16,4], startTime: 0}, //20
  {notes: [8,1,32,4], startTime: 0},
  {notes: [8,2,8,4], startTime: 0},
  {notes: [8,2,8,4], startTime: 0},
  {notes: [32,8,4,1], startTime: 0}, //24
  {notes: [16,1,2,4], startTime: 0},
  {notes: [32,8,16,1], startTime: 0},
  {notes: [16,8,2,4], startTime: 0},
  {notes: [32,16,1,2], startTime: 0}, //28
  {notes: [32,16,8,2], startTime: 0},
  {notes: [32,8,16,4], startTime: 0},
  {notes: [1,2,4,16], startTime: 0},
  {notes: [1,4,2,8], startTime: 0}, //32
  {notes: [32,4,8,1], startTime: 0},
  {notes: [32,16,32,16], startTime: 0},
  {notes: [1,2,1,2], startTime: 0},
  {notes: [8,16,8,16], startTime: 0}, //36
  {notes: [4,2,4,2], startTime: 0}, 
  {notes: [8,2,8,4], startTime: 0},
  {notes: [8,2,8,4], startTime: 0},
  {notes: [32,8,4,1], startTime: 0}, //40
  {notes: [16,1,2,4], startTime: 0},
  {notes: [32,8,16,1], startTime: 0},
  {notes: [16,8,2,4], startTime: 0},
  {notes: [32,16,1,2], startTime: 0}, //44
  {notes: [32,16,8,2], startTime: 0},
  {notes: [32,8,16,4], startTime: 0},
  {notes: [1,2,4,16], startTime: 0},
  {notes: [1,4,2,8], startTime: 0}, //48
  {notes: [32,4,8,1], startTime: 0},
  {notes: [32,16,32,16], startTime: 0},
  {notes: [1,2,1,2], startTime: 0},
  {notes: [8,16,8,16], startTime: 0}, //52
  {notes: [4,2,4,2], startTime: 0}, 
  {notes: [32,16,8,16], startTime: 0}, 
  {notes: [1,2,4,2], startTime: 0}, 
  {notes: [8,4,8,4], startTime: 0}, //56
  {notes: [32,18,1,18], startTime: 0}, 
  {notes: [32,1,32,1], startTime: 0}, 
  {notes: [8,3,4,24], startTime: 0}, 
  {notes: [32,5,4,40], startTime: 0}, // 60
  {notes: [16,3,4,24], startTime: 0}, 
  {notes: [8,33,4,18], startTime: 0}, 
  {notes: [32,18,8,18], startTime: 0},
  {notes: [1,18,4,18], startTime: 0},  //64
  {notes: [1,16,2,8], startTime: 0}, 
];
var Hard = [ 
  { notes: [ 0, 0, 0, 0 ], startTime: 0 },
  { notes: [ 0, 0, 0, 0 ], startTime: 0 },
  { notes: [ 0, 0, 0, 0 ], startTime: 0 },
  { notes: [ 0, 0, 0, 0 ], startTime: 0 }, //4
  { notes: [ 0, 0, 0, 0 ], startTime: 0 },
  { notes: [ 0, 0, 0, 0 ], startTime: 0 },
  { notes: [ 0, 0, 0, 0 ], startTime: 0 },
  { notes: [ 32, 4, 8, 0, 2, 16, 0, 1, 0, 8, 0, 4, 0, 32, 16, 8 ], //8
    startTime: 0 },
  { notes: [ 0, 4, 32, 0, 8, 2, 0, 32, 0, 1, 0, 32, 0, 4, 8, 2 ],
    startTime: 0 },
  { notes: [ 8, 4, 32, 0, 8, 1, 0, 32, 2, 0, 16, 4, 0, 8, 1, 16 ],
    startTime: 0 },
  { notes: [ 0, 32, 4, 0, 16, 1, 0, 8, 4, 0, 32, 16, 0, 8, 2, 16 ],
    startTime: 0 },
  { notes: [ 4, 32, 8, 0, 2, 16, 0, 1, 0, 8, 0, 4, 0, 32, 16, 8 ],
    startTime: 0 },
  { notes: [ 0, 4, 32, 0, 8, 2, 0, 32, 0, 1, 0, 32, 0, 4, 8, 2 ],
    startTime: 0 },
  { notes: [ 8, 4, 32, 0, 8, 1, 0, 32, 2, 0, 16, 4, 0, 8, 1, 16 ],
    startTime: 0 },
  { notes: [ 0, 32, 4, 0, 16, 1, 0, 8, 4, 0, 32, 16, 0, 8, 2, 8 ],
    startTime: 0 },
  { notes: [ 4, 2, 32, 4, 32, 2, 8, 1 ], startTime: 0 },
  { notes: [ 32, 4, 8, 2, 32, 16, 8, 4 ], startTime: 0 },
  { notes: [ 2, 1, 2, 4, 8, 16, 32, 1 ], startTime: 0 },
  { notes: [ 32, 2, 16, 4, 8, 2, 16, 4 ], startTime: 0 },
  { notes: [ 32, 4, 16, 2, 8, 1, 32, 4, 32, 4, 16, 2, 16, 2, 8, 1 ],
    startTime: 0 },
  { notes: [ 8, 1, 2, 8, 1, 32, 4, 16, 2, 8, 4, 16, 1, 8, 4, 32 ],
    startTime: 0 },
  { notes: [ 2, 16, 4, 16, 4, 32, 16, 8, 4, 2, 1, 32, 2, 16, 4, 8 ],
    startTime: 0 },
  { notes: [ 2, 0, 32, 0, 8, 16, 4, 0, 19, 0, 32, 0, 4, 0, 8, 0 ],
    startTime: 0 },
  { notes: [ 2, 8, 4, 0, 4, 2, 0, 16, 0, 4, 8, 2, 0, 4, 1, 8 ],
    startTime: 0 },
  { notes: [ 0, 32, 4, 0, 16, 2, 0, 4, 0, 8, 0, 16, 0, 32, 2, 16 ],
    startTime: 0 },
  { notes: [ 1, 32, 2, 0, 16, 4, 0, 8, 2, 0, 32, 4, 0, 16, 2, 8 ],
    startTime: 0 },
  { notes: [ 1, 2, 4, 0, 32, 16, 0, 2, 4, 0, 16, 2, 0, 16, 8, 32 ],
    startTime: 0 },
  { notes: [ 4, 8, 2, 0, 1, 2, 0, 32, 0, 2, 8, 4, 0, 32, 16, 8 ],
    startTime: 0 },
  { notes: [ 2, 4, 1, 0, 4, 2, 0, 8, 0, 2, 4, 1, 0, 8, 16, 32 ],
    startTime: 0 },
  { notes: [ 2, 8, 4, 0, 16, 1, 0, 8, 4, 0, 32, 8, 0, 16, 2, 32 ],
    startTime: 0 },
  { notes: [ 2, 8, 4, 0, 32, 16, 0, 1, 2, 0, 32, 16, 8, 4, 2, 1 ],
    startTime: 0 },
  { notes: [ 2, 8, 4, 0, 4, 2, 0, 16, 0, 4, 8, 2, 0, 4, 1, 8 ],
    startTime: 0 },
  { notes: [ 0, 32, 4, 0, 16, 2, 0, 4, 0, 8, 0, 16, 0, 32, 2, 16 ],
    startTime: 0 },
  { notes: [ 1, 32, 2, 0, 16, 4, 0, 8, 2, 0, 32, 4, 0, 16, 2, 8 ],
    startTime: 0 },
  { notes: [ 1, 2, 4, 0, 32, 16, 0, 2, 4, 0, 16, 2, 0, 16, 8, 32 ],
    startTime: 0 },
  { notes: [ 4, 8, 2, 0, 1, 2, 0, 32, 0, 2, 8, 4, 0, 32, 16, 8 ],
    startTime: 0 },
  { notes: [ 2, 4, 1, 0, 4, 2, 0, 8, 0, 2, 4, 1, 0, 8, 16, 32 ],
    startTime: 0 },
  { notes: [ 2, 8, 4, 0, 16, 1, 0, 8, 4, 0, 32, 8, 0, 16, 2, 32 ],
    startTime: 0 },
  { notes: [ 2, 8, 4, 0, 32, 16, 0, 1, 2, 0, 32, 16, 8, 4, 2, 1 ],
    startTime: 0 },
  { notes: [ 52, 8, 4, 0, 4, 2, 44, 16, 0, 4, 8, 2, 49, 4, 1, 8 ],
    startTime: 0 },
  { notes: [ 0, 32, 4, 0, 16, 2, 0, 4, 0, 8, 0, 16, 0, 32, 2, 16 ],
    startTime: 0 },
  { notes: [ 1, 32, 2, 0, 16, 4, 0, 8, 50, 0, 32, 4, 0, 16, 2, 8 ],
    startTime: 0 },
  { notes: [ 21, 2, 4, 0, 32, 16, 0, 2, 52, 0, 16, 2, 0, 16, 8, 32 ],
    startTime: 0 },
  { notes: [ 7, 8, 2, 0, 1, 2, 0, 32, 0, 2, 8, 4, 0, 32, 16, 8 ],
    startTime: 0 },
  { notes: [ 2, 4, 1, 0, 4, 2, 0, 8, 48, 2, 4, 1, 0, 8, 16, 32 ],
    startTime: 0 },
  { notes: [ 3, 8, 4, 0, 16, 1, 0, 8, 4, 0, 32, 8, 0, 16, 10, 32 ],
    startTime: 0 },
  { notes: [ 6, 8, 4, 0, 40, 16, 0, 1, 6, 0, 32, 16, 10, 4, 2, 1 ],
    startTime: 0 },
  { notes: [ 34, 8, 4, 0, 4, 2, 0, 16, 0, 4, 8, 2, 40, 4, 1, 8 ],
    startTime: 0 },
  { notes: [ 0, 32, 4, 0, 16, 2, 0, 4, 0, 8, 0, 16, 0, 32, 2, 16 ],
    startTime: 0 },
  { notes: [ 1, 32, 2, 0, 16, 4, 0, 8, 7, 0, 32, 4, 0, 16, 2, 8 ],
    startTime: 0 },
  { notes: [ 49, 2, 4, 0, 32, 16, 0, 2, 37, 0, 16, 2, 0, 16, 8, 32 ],
    startTime: 0 },
  { notes: [ 2, 2, 32, 32, 4, 4, 16, 16 ], startTime: 0 },
  { notes: [ 1, 1, 8, 8, 4, 4, 32, 32 ], startTime: 0 },
  { notes: [ 16, 8, 4, 8, 16, 32, 4, 16, 8, 2, 4, 1, 32, 4, 16, 2 ],
    startTime: 0 },
  { notes: [ 8, 16, 32, 1, 2, 4, 8, 16, 32, 1, 2, 4, 0, 32, 8, 16 ],
    startTime: 0 },
  { notes: [ 2, 8, 34, 4, 16, 4, 40, 2 ], startTime: 0 },
  { notes: [ 32, 4, 6, 2, 32, 8, 40, 4 ], startTime: 0 },
  { notes: [ 32, 1, 9, 8, 32, 16, 10, 2 ], startTime: 0 },
  { notes: [ 32, 8, 20, 1, 4, 8, 48, 2 ], startTime: 0 },
  { notes: [ 8, 16, 6, 32, 8, 16, 5, 32 ], startTime: 0 },
  { notes: [ 1, 4, 40, 16, 2, 8, 5, 32 ], startTime: 0 },
  { notes: [ 16, 8, 16, 32, 16, 8, 16, 32 ], startTime: 0 },
  { notes: [ 2, 4, 8, 4, 2, 4, 8, 4 ], startTime: 0 },
  { notes: [ 2, 32, 4, 32, 4, 16, 2, 16, 2, 8, 1, 8, 1, 32, 16, 8 ],
    startTime: 0 },
  { notes: [ 4, 2, 1, 32, 4, 16, 2, 8, 1, 16, 2, 32, 4, 16, 8, 0 ],
    startTime: 0 } ];

module.exports.Easy = Easy;
module.exports.Medium = Medium;
module.exports.Hard = Hard;
