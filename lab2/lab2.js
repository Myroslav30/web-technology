console.log('Інструкція \nleg - катет \nhypotenuse - гіпотенуза \nadjacent angle - прилеглий до катета кут \nopposite angle - протилежний до катета кут \nangle - гострий кут \nПриклад: \ntriangle(8, "hypotenuse", 4, "leg") \ntriangle(4, "leg", 8, "hypotenuse")');
function triangle(val, name, val1, name1) {

  var a, b, c, alpha, beta;

   if(val<=0 || val1<=0){
  	return("Помилка! вхідні значення не можуть дорівнювати або бути меншими 0");
  }
  else if((name=="hypotenuse" && name1=="leg") && val<=val1 || (name1=="hypotenuse" && name=="leg") && val1<=val){
  	return("Помилка! Гіпотенуза не може бити меншою за катет");
  }
  else if((name=="adjacent angle")&& val>=90||(name1=="adjacent angle")&&val1>=90){
return("Помилка! Прилеглий кут не може дорівнювати, або бути більшим за 90");
  }
  else if((name=="opposite angle")&& val>=90||(name1=="opposite angle")&&val1>=90){
return("Помилка! Протилежний кут не може дорівнювати, або бути більшим за 90");
  }
   else if((name=="angle")&& val>=90||(name1=="angle")&&val1>=90){
return("Помилка! Гострий кут не може дорівнювати, або бути більшим за 90");
  }
  else if (name == "leg" && name1 == "leg") {
    a = val;
    b = val1;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    alpha = Math.acos(b / c) * 180 / Math.PI;
    beta = Math.acos(a / c) * 180 / Math.PI;
  }
  else if (name == "leg" && name1 == "hypotenuse") {
    a = val;
    c = val1;
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    alpha = Math.acos(b / c) * 180 / Math.PI;
    beta = Math.acos(a / c) * 180 / Math.PI;
  }
  else if (name == "hypotenuse" && name1 == "leg") {
    a = val1;
    c = val;
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    alpha = Math.acos(b / c) * 180 / Math.PI;
    beta = Math.acos(a / c) * 180 / Math.PI;
  }
  else if (name == "leg" && name1 == "adjacent angle") {
    a = val;
    beta = val1;
    c = a / Math.cos(Math.PI / 180 * beta);
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    alpha = 90 - beta;
  }
  else if (name == "adjacent angle" && name1 == "leg") {
    a = val1;
    beta = val;
    c = a / Math.cos(Math.PI / 180 * beta);
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    alpha = 90 - beta;
  }
  else if (name == "leg" && name1 == "opposite angle") {
    a = val;
    alpha = val1;
    c = a / Math.sin(Math.PI / 180 * alpha);
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    beta = 90 - alpha;
  }
   else if (name == "opposite angle" && name1 == "leg") {
    a = val1;
    alpha = val;
    c = a / Math.sin(Math.PI / 180 * alpha);
    b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    beta = 90 - alpha;
  }
  else if (name == "hypotenuse" && name1 == "angle") {
    c = val;
    beta = val1;
    alpha = 90 - beta;
    a = c * Math.sin(Math.PI / 180 * beta);
    b = c * Math.sin(Math.PI / 180 * alpha);
  }
  else if (name == "angle" && name1 == "hypotenuse") {
    c = val1;
    beta = val;
    alpha = 90 - beta;
    a = c * Math.sin(Math.PI / 180 * beta);
    b = c * Math.sin(Math.PI / 180 * alpha);
  }
  console.log('a = ' + a, '\nb = ' + b, '\nc = ' + c, '\nalpha = ' + alpha, '\nbeta = ' + beta);
  return("success")
}