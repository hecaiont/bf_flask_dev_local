
function fun_1(){
    var x1=document.getElementById("id_1_1").value;
    var x2=document.getElementById("id_1_2").value;
    var x3=document.getElementById("id_1_3").value;
    
    var ans=(x1-x2)/x2*x3
    document.getElementById("an_1").innerHTML=ans.toFixed(1);
    }
    
    function fun_2(){
    var x1=document.getElementById("id_2_1").value;
    var x2=document.getElementById("id_2_2").value;
    var x3=document.getElementById("id_2_3").value;
    var x4=document.getElementById("id_2_4").value;
    
    var ans1=(x2-x3)/(x1-x3)*x4
    var ans2=(x1-x2)/(x1-x3)*x4
    
    document.getElementById("an_2_1").innerHTML=ans1.toFixed(1);
    document.getElementById("an_2_2").innerHTML=ans2.toFixed(1);
    }
    
    function fun_3(){
    var x1=document.getElementById("id_3_1").value;
    var x2=document.getElementById("id_3_2").value;
    var x3=document.getElementById("id_3_3").value;
    var x4=document.getElementById("id_3_4").value;
    
    var ans=(x2-x1)/(100-x2)*x3*x4
    document.getElementById("an_3").innerHTML=ans.toFixed(1);
    }
    
    function fun_4(){
    var x1=document.getElementById("id_4_1").value;
    var x2=document.getElementById("id_4_2").value;
    var x3=document.getElementById("id_4_3").value;
    
    var ans=(x1-x2)/x2*x3
    document.getElementById("an_4").innerHTML=ans.toFixed(1);
    }
    
    function fun_5(){
    var x11=document.getElementById("id_5_A1").value;
    var x12=document.getElementById("id_5_A2").value;
    var x21=document.getElementById("id_5_B1").value;
    var x22=document.getElementById("id_5_B2").value;
    var x31=document.getElementById("id_5_C1").value;
    var x32=document.getElementById("id_5_C2").value;
    var x41=document.getElementById("id_5_D1").value;
    var x42=document.getElementById("id_5_D2").value;
    
    var ans1=x11*1+x21*1+x31*1+x41*1
    var ans2=((x11*x12)+(x21*x22)+(x31*x32)+(x41*x42))/(x11*1+x21*1+x31*1+x41*1)
    
    document.getElementById("an_5_1").innerHTML=ans1.toFixed(1);
    document.getElementById("an_5_2").innerHTML=ans2.toFixed(1);
    }
    
    function fun_6(){
    var x1=document.getElementById("id_6_1").value;
    var x2=document.getElementById("id_6_2").value;
    var x3=document.getElementById("id_6_3").value;
    var x4=document.getElementById("id_6_4").value;
    
    var ans=((x3*x4)/(x1*x2))*100
    
    document.getElementById("an_6").innerHTML=ans.toFixed(1);
    }
    
    