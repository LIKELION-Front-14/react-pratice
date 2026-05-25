let name = "김찬주";
console.log("첫번째 이름 = " + name);

name = "홍길동";
console.log("두번째 이름 = " + name);

const age = 24;
console.log("첫번째 나이 = " + age);

// age = 30;
// console.log("두번째 나이 = " + age);


let weight;
console.log("무게 = " + weight);

let height = null;
console.log("키 = " + height);

//조건문 (연습하기)
if (age > 20) {  
console.log("성인");
} else {  
console.log("미성년자");
}

const message = age >= 20 ? "성인입니다." : "미성년자입니다.";
console.log(message)

// 3. 함수
const greet = (name) => {
  return console.log("안녕 " + name);
};
greet("찬주");

//배열
let fruits = ["사과", "바나나", "딸기"];

console.log(fruits[0]); // 사과

//객체
let user1 = {
  name: "서은",
  age: 24,
  birth : "0907"
};

console.log(user1.name);
console.log(user1.birth);

let user2 = {
  name: "찬주",
  age: 23,
 address: {
    city: "용인시",
    district: "기흥구"
  },
};

console.log(user2.address.city)
console.log(user2.address.district)


//map함수
const arr = [1,2,3];

const result = arr.map((item)=> {
    return item * 2;
});

console.log(result);

farm = ["apple", "banana", "orange"];

const furits = farm.map((furits) => fruits + "good");
console.log(furits);



