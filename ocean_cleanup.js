/*
 thhis will calculate the estimated waste produce and give the tip 
*/
function calculate(){
    var sum =0 , max=0;
    const data = new Map();

    if(sum==0){
        document.getElementById('total').innerHTML=sum.toFixed(2);
         
        document.getElementById('tip').innerHTML="unknown resource";

    }
    // get the value plastics bottles input filed 
    var platicsbottles = document.getElementById("Plastic bottles").value;
    sum+=platicsbottles*0.730;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(platicsbottles*0.730)){
        document.getElementById('tip').innerHTML="Plastic bottles";
        max=(platicsbottles*0.730)
    }
     //get the value plastics bags input filed
    
    var platicsbags = document.getElementById("Plastic bags").value;
    sum+=platicsbags*0.471;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(platicsbags*0.471)){
        document.getElementById('tip').innerHTML="Plastic bags";
        max=(platicsbags*0.471)
    }


             // get the value the food wrapping field

    var foodwrapping= document.getElementById("Food wrapping").value;
    sum+=foodwrapping*0.730;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(foodwrapping*0.730)){
        document.getElementById('tip').innerHTML="Food wrapping";
        max=(foodwrapping*0.730)
    }


            // get the value the yogurt field

    document.getElementById("total").innerHTML=sum;
    var yogurt = document.getElementById("Yogurt, cream, etc. containers").value;
    sum+=yogurt*0.383;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(yogurt*0.383)){
        document.getElementById('tip').innerHTML= "Yogurt, cream, etc. containers" 

        max(yogurt*0.383);

    }
   
              // get the value the plastics bottles field

    var platicsboxes = document.getElementById("Take-away plastic boxes").value;
    sum+=platicsboxes*0.383;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(platicsboxes*0.383)){
        document.getElementById('tip').innerHTML= "Take-away plastic boxes";

        max=(platicsboxes*0.383);

    }
            // get the value the take away cups  field 

    var cups = document.getElementById("Take-away cups ").value;
    sum+=cups*0.240;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(cups*0.240)){
        document.getElementById('tip').innerHTML= "Take-away cups";

        max=(cups*0.240);

    }
              // get the value the wrapped input  field

    var wrapped = document.getElementById("Plastic-wrapped packages").value;
    sum+=wrapped*0.834;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(wrapped*0.240)){
        document.getElementById('tip').innerHTML="Plastic-wrapped packages" ;
        max=(wrapped*0.240);
    }
            // get the value the detergent  field

    var detergent = document.getElementById("Detergent & cleaning product bottles").value;
    sum+=detergent*0.120;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(detergent*0.120)){
        document.getElementById('tip').innerHTML= "Detergent & cleaning product bottles";
        max=(detergent*0.120);
    }


        // get the value the shampoo hold share field

    var shampoo = document.getElementById("Shampoo, conditioner & toiletries").value;
    sum+=shampoo*0.080;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(shampoo*0.080)){
        document.getElementById('tip').innerHTML="Shampoo, conditioner & toiletries";
        max=(shampoo*0.080);
    }


        // get the value the toothbrushes hold share field
    var  toothbrushes = document.getElementById("Plastic toothbrushes").value;
    sum+=toothbrushes*0.020;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(toothbrushes*0.020)){
        document.getElementById('tip').innerHTML="Plastic toothbrushes";
        max=(toothbrushes*0.020);
    }


         // get the value the toothpaste input field  

    var toothpaste = document.getElementById("Toothpaste").value;
    sum+=toothpaste*0.015;
    document.getElementById("total").innerHTML=sum.toFixed(2);
    if(max<(toothpaste*0.015)){
        document.getElementById('tip').innerHTML="Toothpaste";
        max=(toothpaste*0.015);
    }

   
    // get the value the house hold share field  and divide the sum with it
    var householdSize = document.getElementById('no_of_people').value;
    sum/=householdSize;
    document.getElementById('total').innerHTML=sum.toFixed(2);
  
   
}
calculate();
/*
  This fucntion will reset the calculator when user clicks the reset buttom
*/
function resetCalculator() {
    var inputs = document.getElementsByTagName('input');

    var i;
    for (i = 0; i < inputs.length; i++) {
      inputs[i].value = "0";
    }
    document.getElementById("no_of_people").value="1";

    sum = 0, max=0;// setting the total sum to
    document.getElementById('total').innerHTML =sum.toFixed(2);
    document.getElementById('tip').innerHTML = "unknown resource" ;



 }
