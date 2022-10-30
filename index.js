document.getElementById("btnCalcDay").onclick = function () {
  var month = document.getElementById("Month2").value * 1;
  var year = document.getElementById("Year2").value * 1;
  var day = !0;
  var result = "";

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result = 30;
      break;
    case 2:
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
      result = day ? 28 : 29;
  }

  document.getElementById("txtCalcDay").innerHTML =
    "Tháng: " + month + " Năm " + year + " Có " + result + " Ngày";
};

document.getElementById("btnReadInt").onclick = function () {
  var So = document.getElementById("Read").value * 1;
  var hangtram = Math.floor(So / 100);
  var hangchuc = Math.floor((So % 100) / 10);
  var hangdonvi = (So % 100) % 10;
  var Sotram = "";
  var Sochuc = "";
  var Sodonvi = "";
  var Soso = "";


  switch (hangtram) {
    case 0:
      Sotram = "";
      break;
    case 1:
      Sotram = " một trăm";
      break;
    case 2:
      Sotram = "hai trăm ";
      break;
    case 3:
      Sotram = "ba trăm ";
      break;
    case 4:
      Sotram = "bốn trăm ";
      break;
    case 5:
      Sotram = "năm trăm ";
      break;
    case 6:
      Sotram = "sáu trăm ";
      break;
    case 7:
      Sotram = "bảy trăm ";
      break;
    case 8:
      Sotram = "tám trăm ";
      break;
    case 9:
      Sotram = "chín trăm ";
      break;
  }

  switch(hangchuc){
    case 0:
        Sochuc = "lẻ ";
        break;
      case 1:
        Sochuc = "mười ";
        break;
      case 2:
        Sochuc = "hai mươi ";
        break;
      case 3:
        Sochuc = "ba mươi ";
        break;
      case 4:
        Sochuc = "bốn mươi ";
        break;
      case 5:
        Sochuc = "năm mươi ";
        break;
      case 6:
        Sochuc = "sáu mươi ";
        break;
      case 7:
        Sochuc = "bảy mươi ";
        break;
      case 8:
        Sochuc = "tám mươi ";
        break;
      case 9:
        Sochuc = "chín mươi ";
        break;
  }
  switch (hangdonvi) {
    case 0:
      Sodonvi = "";
      break;
    case 1:
      Sodonvi = "một";
      break;
    case 2:
      Sodonvi = "hai";
      break;
    case 3:
      Sodonvi = "ba";
      break;
    case 4:
      Sodonvi = "bốn";
      break;
    case 5:
      Sodonvi = "năm";
      break;
    case 6:
      Sodonvi = "sáu";
      break;
    case 7:
      Sodonvi = "bảy"
      break;
    case 8:
      Sodonvi = "tám";
      break;
    case 9:
      Sodonvi = "chín";
      break;
}

  if(hangtram == 0){
    Soso = " Nhập sai số ";
  }
  else if(hangchuc == 0){
    Soso = Sotram + " lẻ " + Sodonvi;
  }
  else if(hangchuc == 1){
    Soso = Sotram + Sodonvi;
  }else{ 
    Soso = Sotram + " " + Sochuc +  Sodonvi;
   }

     document.getElementById("txtReadInt").innerHTML = Soso;

}


