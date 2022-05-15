
var room = 0;
function ingredient_filed() {
 
    room++;
    var objTo = document.getElementById('ingredient_filed')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
      // divtest.innerHTML = '<div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="rice" name="rice#'+room+'" value="" placeholder="쌀"></div></div><div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="water" name="water#'+room+'" value="" placeholder="물"></div></div><div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="yeast" name="yeast#'+room+'" value="" placeholder="누룩"></div></div><div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="flour" name="flour#'+room+'" value="" placeholder="밀가루"></div></div><div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="subMaterials" name="subMaterials#'+room+'" value="" placeholder="부재료"></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group"><input type="number" class="form-control" id="interval" name="interval#'+room+'" value="" placeholder="기간"><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_ingredient_filed('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>';
      // divtest.innerHTML = '<div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="rice" name="rice#'+room+'" value="" placeholder="쌀"></div></div><div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="water" name="water#'+room+'" value="" placeholder="물"></div></div><div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="yeast" name="yeast#'+room+'" value="" placeholder="누룩"></div></div><div class="col-sm-2 nopadding"><div class="form-group"> <input type="number" class="form-control" id="subMaterials" name="subMaterials#'+room+'" value="" placeholder="부재료"></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group"><input type="number" class="form-control" id="interval" name="interval#'+room+'" value="" placeholder="기간"></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_ingredient_filed('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div>';
      divtest.innerHTML = '<div class="col-sm-2"><div class="form-group"><input type="number" class="form-control" id="rice" name="rice#'+room+'" value="" placeholder="쌀"></div></div><div class="col-sm-2"><div class="form-group"><input type="number" class="form-control" id="water" name="water#'+room+'" value="" placeholder="물"></div></div><div class="col-sm-2"><div class="form-group"><input type="number" class="form-control" id="yeast" name="yeast#'+room+'" value="" placeholder="누룩"></div></div><div class="col-sm-2"><div class="form-group"><input type="number" class="form-control" id="subMaterials" name="subMaterials#'+room+'" value="" placeholder="부재료"></div></div><div class="col-sm-4"><div class="form-group"><div class="input-group"><input type="number" class="form-control" id="interval" name="interval#'+room+'" value="" placeholder="기간"><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_ingredient_filed('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>'

    objTo.appendChild(divtest)
    check_room_number()
}

function remove_ingredient_filed(rid) {
  $('.removeclass'+rid).remove();
}

var btn = document.getElementById("plusrowbtn");

function check_room_number() {
    if(room > 20) {
        btn.style.display = "none";
    } else {
        btn.style.display = "block";
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



function checkForm(){
  var rice = document.getElementById("rice"); 

  if(rice.value == ""){
    alert("값을 입력해 주세요.");
    return false;
  }
}
