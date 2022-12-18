function HellowAndGoodBye(){
  var names = ["bill", "John", "jen", "Jason", "Paul", "bojo", "Steven", "Larry", "Paula", "Laura", "Jim"];
  var sum = 0;
  for (var i=0; i < names.length; i++) {
      if (names[i][0] == 'J' || names[i][0] == 'j') {
            var name = names[i].toUpperCase().charAt(0)+names[i].slice(1);
            speakGoodBye(name);
      } else {
            var name = names[i];
            speakHello(name);
      }
  }
  console.log("Зміна регістру першої букви  і додавання фамілії 'Herrington'  до імен, які починаають на b");
  for (let i=0; i < names.length; i++) {
        if (names[i].charAt(0) == "b") {
            var name = names[i].toUpperCase().charAt(0)+names[i].slice(1) + " Herrington";
            speakHello (name);
       } else {
            var name = names[i];
             speakGoodBye(name);
       }
    }
}
HellowAndGoodBye();