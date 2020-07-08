
const combine = (handleResult, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
    console.log(number)
  }
  let sum = 0;
  for (const num of numbers) {
    if (operation ==='ADD'){
          sum += validateNumber(num);
    }else{
          sum -= validateNumber(num);
    }
  }
  handleResult(sum);
  console.log(sum)
}

// const subtractUp = (handleResult,...numbers) => {
//   let sum = 0;
//   for (const num of numbers ) {
//     sum -= num;
//   }
//   handleResult(sum);
// };

const showResult = (messageText,result) => {
  console.log(result)
  alert(messageText  + result);
};

combine(showResult.bind(this,'result is :'),'ADD', 1, 2, 4, 5, 6, 7, 8)
combine(showResult.bind(this,'result is :'),'SUBTRACT', 1, 2, 4, 5, 6, 7, 8)

