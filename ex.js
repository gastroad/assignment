const X = 0 // DEAD
const O = 1 // ALIVE

let initialState = [
	[X,X,X,X,X],
	[X,X,X,X,X],
	[X,O,O,O,X],
	[X,X,X,X,X],
	[X,X,X,X,X],

]

let secondState = [
	[X,X,X,X,X],
	[X,X,O,X,X],
	[X,X,O,X,X],
	[X,X,O,X,X],
	[X,X,X,X,X],
]

function findcell(){
	let find = new Array()
	for(let i =0; i<initialState.length;i++){
		for(let j=0; j<initialState[0].length;j++){
				if (initialState[i][j] === O){
					find.push([i,j])

				}
		}
	}

return find
}

function calculateNextState(prevState) {
        let nextState


        // write your code
	return nextState
}

const str = JSON.stringify
// 결과로 true가 찍혀야 합니다.
console.log(
        str(calculateNextState(initialState)) === str(secondState)
)
