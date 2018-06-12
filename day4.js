var dicevalue=3

function getrandomint(range){
  return Math.floor(Math.random() * Math.floor(range))
  
}

var randomvalue= getrandomint(6)

if(dicevalue==randomvalue)
  {
    console.log('true')
  }
else{
  console.log('false')
}
