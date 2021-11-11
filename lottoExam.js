
let lottoArr = []
let lottoResult =[]

//1. 1-45까지의 숫자를 배열에 집어넣는 함수
function nums(arr1) {
 for (let i = 1; i <= 45; i++) {
  arr1.push(i)
 }
}

//2. 숫자 6개뽑기
 function randomNum(arr1, arr2) {
  for (let i = 0; i < 6; i++) {

   const index = parseInt(Math.random() * arr1.length)

   arr1.splice(index, 1) // 당첨번호로 1번 뽑힌 숫자는 lottoArr 배열에서 제거
   arr2.push(index) // 당첨번호롤 뽑힌 숫자를 로또당첨 lottoResult 배열에 넣기
  }

  console.log(arr1)
   console.log(arr2)
 }

 //3. 이 모든 과정을 한번에 하는 함수
function lottoFun(arr1, arr2) {
 nums(arr1)
 randomNum(arr1,arr2)

 }

lottoFun(lottoArr, lottoResult)