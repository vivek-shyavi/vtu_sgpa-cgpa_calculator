

function cgpafunction() {
    var sem1=document.getElementById("sem1").value;
    var sem2=document.getElementById("sem2").value;
    var sem3=document.getElementById("sem3").value;
    var sem4=document.getElementById("sem4").value;
    var sem5=document.getElementById("sem5").value;
    var sem6=document.getElementById("sem6").value;
    var sem7=document.getElementById("sem7").value;
    var sem8=document.getElementById("sem8").value;

    if(sem1){
        document.getElementById("cgparesult").innerHTML = sem1;
        if(sem2){
            var result=parseFloat(sem1) + parseFloat(sem2);
            document.getElementById("cgparesult").innerHTML = result/2;
            if(sem3){
                var result=parseFloat(sem1) + parseFloat(sem2) + parseFloat(sem3);
                document.getElementById("cgparesult").innerHTML = result/3;
                if(sem4){
                    var result=parseFloat(sem1) + parseFloat(sem2) + parseFloat(sem3) + parseFloat(sem4);
                    document.getElementById("cgparesult").innerHTML = result/4;
                    if(sem5){
                        var result=parseFloat(sem1) + parseFloat(sem2) + parseFloat(sem3) + parseFloat(sem4) + parseFloat(sem5);
                        document.getElementById("cgparesult").innerHTML = result/5;
                        if(sem6){
                            var result=parseFloat(sem1) + parseFloat(sem2) + parseFloat(sem3) + parseFloat(sem4) + parseFloat(sem5) + parseFloat(sem6);
                            document.getElementById("cgparesult").innerHTML = result/6;
                            if(sem7){
                                var result=parseFloat(sem1) + parseFloat(sem2) + parseFloat(sem3) + parseFloat(sem4) + parseFloat(sem5) + parseFloat(sem6) + parseFloat(sem7);
                                document.getElementById("cgparesult").innerHTML = result/7;
                                if(sem8){
                                    var result=parseFloat(sem1) + parseFloat(sem2) + parseFloat(sem3) + parseFloat(sem4) + parseFloat(sem5) + parseFloat(sem6) + parseFloat(sem7) + parseFloat(sem8);
                                    document.getElementById("cgparesult").innerHTML = result/8;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
}


function sgpafunction() {
    var gp1=document.getElementById("gp1").value;
    var gp2=document.getElementById("gp2").value;
    var gp3=document.getElementById("gp3").value;
    var gp4=document.getElementById("gp4").value;
    var gp5=document.getElementById("gp5").value;
    var gp6=document.getElementById("gp6").value;
    var gp7=document.getElementById("gp7").value;
    var gp8=document.getElementById("gp8").value;
    var gp9=document.getElementById("gp9").value;
    var gp10=document.getElementById("gp10").value;

    var cp1=document.getElementById("cp1").value;
    var cp2=document.getElementById("cp2").value;
    var cp3=document.getElementById("cp3").value;
    var cp4=document.getElementById("cp4").value;
    var cp5=document.getElementById("cp5").value;
    var cp6=document.getElementById("cp6").value;
    var cp7=document.getElementById("cp7").value;
    var cp8=document.getElementById("cp8").value;
    var cp9=document.getElementById("cp9").value;
    var cp10=document.getElementById("cp10").value;

    
    var tot1= gp1*cp1;
    var tot2= gp2*cp2;
    var tot3= gp3*cp3;
    var tot4= gp4*cp4;
    var tot5= gp5*cp5;
    var tot6= gp6*cp6;
    var tot7= gp7*cp7;
    var tot8= gp8*cp8;
    var tot9= gp9*cp9;
    var tot10= gp10*cp10;

    if(tot1){
        document.getElementById("sgparesult").innerHTML = gp1;
        if(tot2){
            var result=(parseFloat(tot1) + parseFloat(tot2))/(parseFloat(cp1) + parseFloat(cp2));
            document.getElementById("sgparesult").innerHTML = result;
            if(tot3){
                var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3));
                document.getElementById("sgparesult").innerHTML = result;
                if(tot4){
                    var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3) + parseFloat(tot4))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3) + parseFloat(cp4));
                    document.getElementById("sgparesult").innerHTML = result;
                    if(tot5){
                        var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3) + parseFloat(tot4) + parseFloat(tot5))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3) + parseFloat(cp4) + parseFloat(cp5));
                        document.getElementById("sgparesult").innerHTML = result;
                        if(tot6){
                            var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3) + parseFloat(tot4) + parseFloat(tot5) + parseFloat(tot6))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3) + parseFloat(cp4) + parseFloat(cp5) + parseFloat(cp6));
                            document.getElementById("sgparesult").innerHTML = result;
                            if(tot7){
                                var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3) + parseFloat(tot4) + parseFloat(tot5) + parseFloat(tot6) + parseFloat(tot7))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3) + parseFloat(cp4) + parseFloat(cp5) + parseFloat(cp6) + parseFloat(cp7));
                                document.getElementById("sgparesult").innerHTML = result;
                                if(tot8){
                                    var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3) + parseFloat(tot4) + parseFloat(tot5) + parseFloat(tot6) + parseFloat(tot7) + parseFloat(tot8))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3) + parseFloat(cp4) + parseFloat(cp5) + parseFloat(cp6) + parseFloat(cp7) + parseFloat(cp8));
                                    document.getElementById("sgparesult").innerHTML = result;
                                    if(tot9){
                                        var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3) + parseFloat(tot4) + parseFloat(tot5) + parseFloat(tot6) + parseFloat(tot7) + parseFloat(tot8) + parseFloat(tot9))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3) + parseFloat(cp4) + parseFloat(cp5) + parseFloat(cp6) + parseFloat(cp7) + parseFloat(cp8) + parseFloat(cp9));
                                        document.getElementById("sgparesult").innerHTML = result;
                                        if(tot10){
                                            var result=(parseFloat(tot1) + parseFloat(tot2) + parseFloat(tot3) + parseFloat(tot4) + parseFloat(tot5) + parseFloat(tot6) + parseFloat(tot7) + parseFloat(tot8) + parseFloat(tot9) + parseFloat(tot10))/(parseFloat(cp1) + parseFloat(cp2) + parseFloat(cp3) + parseFloat(cp4) + parseFloat(cp5) + parseFloat(cp6) + parseFloat(cp7) + parseFloat(cp8) + parseFloat(cp9) + parseFloat(cp10));
                                            document.getElementById("sgparesult").innerHTML = result;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

    
    
    
    
