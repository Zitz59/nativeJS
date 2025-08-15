import {readFile} from "node:fs"
import * as process from "node:process";


//  const readFilePromise = (path:string) =>{
// 	return new Promise((resolve,reject)=>{
// 		readFile(path, (err, data) => {
// 			console.log('from callback')
// 			if (err) {
// 				reject(err)
// 			} else {
// 				resolve(data)
// 			}
// 		})
// 	})
//  }
//
// const filePromise = readFilePromise('./index.js').then((data) => {
// 	console.log(data)
// 	return readFilePromise('./main2.js')
// }).then((data) => {
// 	console.log(data)
// }).then(data => {
// 	console.log('3')
// }).catch((err)=>{
// 	console.log('CATCH',err)
// return readFilePromise('./main.ts')
// }).then((data) => {
// 	console.log('final then')
// }).catch((err)=>{
// 	console.log('FINAL CATCH',err)
// }).finally(()=>{
// 	console.log('finally')
// })

// fetch('http://localhost:8080').then((data) => {
// 	return data.url
// }).then((data) => {})

// Первая: Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние resolved через ms миллисекунд. Пример использования:
// delay(1000).then(() => console.log('Hello!'))

// function delay(ms: number) {
// 	return new Promise<void>(resolve => setTimeout(resolve, ms))
// }
// console.log(delay(1000))


const promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		// res("reject1");
		rej("reject1");
	}, 1000);
});


promise1
	.catch((t) => t + "catch1")
	.catch((t) => t + "catch2")
	.then((t) => t + "then1")
	.finally((t) => t + "finally")
	.then((t) => console.log(t)); /// ??


process.on("unhandledRejection", (err) => {})
//метод в Next.js для отлова глобальных непойманых ошибок