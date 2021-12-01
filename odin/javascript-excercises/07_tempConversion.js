const ftoc = function(f) {
    return Math.round((5 / 9 * (f - 32)) * 10) / 10;
  };
  
  const ctof = function(c) {
    return Math.round(((c * 9 / 5) + 32) * 10) / 10;
  };
  
  console.log(ftoc(100))
  console.log(ctof(37.8)) 

  /*
  This is the proper way for the challenge.
  
  As you can see, the code is pretty straighforward and need nothing other than
  mathematical operator and Math.round(). 

  For the rounding method, I utilized the method mentioned in the link below:
  https://stackoverflow.com/a/7343013
  */