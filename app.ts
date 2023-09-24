const num1element = document.getElementById('num1') as HTMLInputElement;
const num2element = document.getElementById('num2') as HTMLInputElement;
const btnElement = document.querySelector('button')!;

const numResult:number[] =[];
const txtResult:string[] =[];

type NumOrString = number | string;

function addNums(num1:NumOrString,num2:NumOrString){
    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2;
    }else if(typeof num1==='string' && typeof num2==='string'){
        return num1+num2
    }else{
        return +num1 + +num2
    }
}

function printResult(resultObj:{val:number;timeStamp:Date}){
    console.log(resultObj.val);
}

btnElement.addEventListener('click',()=>{
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = addNums(+num1,+num2);
    numResult.push(result as number)
    const stringResult = addNums(num1,num2);
    txtResult.push(stringResult as string)
    console.log(result);
    console.log(stringResult);
    printResult({val:result as number,timeStamp:new Date()});
    console.log(numResult,txtResult);
})

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(() => {
        resolve('it worked')
    }, 1000);
})

myPromise.then(result=>{
    console.log(result.split('w'))
})