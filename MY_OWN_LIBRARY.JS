
function isTouching(op1,op2){

    if (op1.x - op2.x < op2.width/2 + op1.width/2
      &&op2.x - op1.x <op2.width/2 + op1.width/2
      && op1.y - op2.y < op2.height/2 +op1.height/2
      && op2.y - op1.y <op2.height/2 + op1.height/2) {
   return true;
  }
  else {
     return false;
  }
  }
  
  