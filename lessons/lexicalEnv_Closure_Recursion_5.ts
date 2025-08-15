//globalLE {} --> null

// startEngine()
let car = 'bmw' //globalLE {car: 'bmw'} --> null

function startEngine() {
	//startEngineLE {car:accessDenied} --> globalLE
	let car = 'audi'

	const func = () => {
		console.log(`Start ${car}`)
	}
	return func
}

startEngine()

const counterCreator = () => {

    let count = 0
    return () => {
        console.log(count++)
    }
}

const counter1 = counterCreator()
const counter2 = counterCreator();

counter1()
counter1()
counter1()

counter2()
counter2()
counter2()

const pow = (x, n) => {
	if (n === 1) {
		return x
	} else {
		return x * pow(x, n - 1)
	}
}
// 2(4) === 2 * 2(3) === 2 * 2 * 2(2) === 2 * 2 * 2 * 2(1)