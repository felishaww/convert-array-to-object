function convert (data) {
  // Your code here

  var result = []
  for (var i = 0; i<data.length; i++){
    var biodata = {
      id: data[i][0],
      firstName: data[i][1],
      lastName: data[i][2],
      email: data[i][3]
    }
    result.push(biodata)
  }

  return result
}

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

console.log(convert([]));
// []