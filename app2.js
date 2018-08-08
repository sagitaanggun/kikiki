var string = 'W F G H J T 8 9 10 # @ 8 !'

   
    var huruf = /[^A-Za-z]/g
    stringlagi = string.replace(huruf, '');
    
    huruf = stringlagi.split('');
    console.log(huruf);
    
    var angka = /[^0-9]/g
    numberAja = string.replace(angka, '');
   
    angka = numberAja.split('');
    console.log(angka)