
var room = 0;
function ingredient_filed() {
 
    room++;
    var objTo = document.getElementById('ingredient_filed')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group m-0 removeclass"+room);
	var rdiv = 'removeclass'+room;
      divtest.innerHTML = '<ul class="nav justify-content-center m-1"><li class="nav-item col-sm-2"><div class="form-group m-0"><input type="number" min="0" class="form-control" name="rice#'+room+'" value="" placeholder="쌀"></div></li><li class="nav-item col-sm-2">  <div class="form-group m-0"><input type="number" min="0" class="form-control" name="water#'+room+'" value="" placeholder="물">  </div></li><li class="nav-item col-sm-2">  <div class="form-group m-0"><input type="number" min="0" class="form-control" name="yeast#'+room+'" value="" placeholder="누룩">  </div></li><li class="nav-item col-sm-2">  <div class="form-group m-0"><input type="number" min="0" class="form-control" name="subMaterials#'+room+'" value="" placeholder="부재료">  </div></li><li class="nav-item col-sm-2">  <div class="form-group m-0"><input type="number" min="0" class="form-control" name="interval#'+room+'" value="" placeholder="기간">  </div></li><li class="nav-item col-sm-2"><button type="button" class="btn btn-block btn-primary" onclick="remove_ingredient_filed('+ room +')">제거</button></li></ul>'
    objTo.appendChild(divtest)
    check_room_number()
}

function remove_ingredient_filed(rid) {
  $('.removeclass'+rid).remove();
  check_room_number()
}

var btn = document.getElementById("plusrowbtn");

function check_room_number() {
    if(document.getElementsByClassName("nav justify-content-center m-1").length > 15) {
        $('#plusrowbtn').prop('disabled', true);
    } else {
        $('#plusrowbtn').prop('disabled', false);
    } 
}

function calculateRW() {
  var totalRice = 0;
  var totalWater = 0;
  var totalYeast = 0;
  var totalFlour = 0;
  var totalSubMaterials = 0;
  var totalIntervals = 0;


  for (i = 0; i < room; i++) {
    totalRice += Number(document.getElementsByName("rice")[i].value);
    totalWater += Number(document.getElementsByName("water")[i].value);
    totalYeast += Number(document.getElementsByName("yeast")[i].value);
    totalFlour += Number(document.getElementsByName("flour")[i].value);
    totalSubMaterials += Number(document.getElementsByName("subMaterials")[i].value);
    totalIntervals += Number(document.getElementsByName("interval")[i].value);

  }
  document.getElementById("expected").innerHTML="전체 쌀 : " +totalRice+ ", 전체 물 : " +totalWater+", 전체 술 : " +Number(totalRice+totalWater)+ ", 쌀과 물의 비율 : " +(Number(totalRice/(totalRice+totalWater))*100).toFixed(1)+" 대 "+(Number(totalWater/(totalRice+totalWater))*100).toFixed(1)+", 전체 누룩 : "+totalYeast+", 전체 밀가루 : "+totalFlour+", 전체 부재료 : "+totalSubMaterials+", 총 기간 : "+totalIntervals;
}


// 전체 내용물 다 체크해서 없으면 경고창으로 변경해야함.
function checkForm(){
  var inputs = document.getElementsByTagName('input');
  // console.log(inputs[0].name);

  let result = inputs.every(function (e) {
      if (e.value != ''){
        return false
      } else {
        return false
      }
  });
  
  console.log(result);

  // if (inputs[0].value != '') {
  //   console.log(inputs[0].value)
  // } else {
  //   console.log('empty input')
  // }
  

  // var neededElements = [];

  // // if (inputs.length == 0) {
  // //   alert ('작업을 추가해주세요.');
  // //   return false
  // // }
  // //   else {
  // for (var i = 0, length = inputs.length; i < length; i++) {
  //   if (inputs[i].className.indexOf('rice') >= 0) {
  //       neededElements.push(inputs[i]);
  //   }
  // }
  // console.log(neededElements[0].value);
  return false
// }
  

  // if (allinputs.value == ""){
  //   alert("값을 입력해 주세요.");
  //   return false;
  // }
}

