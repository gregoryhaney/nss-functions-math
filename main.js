 
/* =========================================
   fn to add two values together.
   needs two parameters.
   return the result.  
  ========================================= */

const adding = (firstNumber, secondNumber) => {
        const sum = (firstNumber + secondNumber)
    return sum
}

/* ==========================================
   fn to multiply single number by two.
   needs one parameter.
   return the result.  
   =========================================*/

   const multipying = (thirdNumber) => {
        const product = (thirdNumber * 2)
    return product
}

/* =================================================
   invoke first fn w/ two arguments for params.
   store returned result in variable. 
   ================================================= */
const theyAreAdded = adding(4, 14)


/* ===================================================
   invoke second fn providing last returned result
   as an argument for this fn's param
   ================================================== */
const theyAreMultiplied = multipying(theyAreAdded)


/* =================================================
   display to console the end result of 
   last math operation (multiplication)
   =============================================== */
console.log(theyAreMultiplied)