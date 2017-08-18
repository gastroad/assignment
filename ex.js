const X = 0 // DEAD
const O = 1 // ALIVE
let lifeCell = 0;
let deadCell = new Array();
let aliveCell = new Array();

let initialState = [
	[X,X,X,X,X],
	[X,X,X,X,X],
	[X,O,O,O,X],
	[X,X,X,X,X],
	[X,X,X,X,X],
]

let secondState = [
	[X,X,X,X,X],
	[X,X,X,X,X],
	[X,O,O,O,X],
	[X,X,X,X,X],
	[X,X,X,X,X],
]

function checkedDead(i, j) {
	if (i === 0) {
		if (j === 0) {
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i][j - 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
		} else {
			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		}

	} else if (i + 1 === initialState.length) {
		if (j === 0) {
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
		} else {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;
		}
	} else {
		if (initialState[i - 1][j - 1] === O) lifeCell++;
		if (initialState[i - 1][j] === O) lifeCell++;
		if (initialState[i - 1][j + 1] === O) lifeCell++;

		if (initialState[i][j - 1] === O) lifeCell++;
		if (initialState[i][j + 1] === O) lifeCell++;

		if (initialState[i + 1][j - 1] === O) lifeCell++;
		if (initialState[i + 1][j] === O) lifeCell++;
		if (initialState[i + 1][j + 1] === O) lifeCell++;
	}

	if (lifeCell < 2 || lifeCell > 3) { deadCell.push([i, j]) }
}

function checkedAlive(i, j) {
	if (i === 0) {
		if (j === 0) {
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i][j - 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
		} else {
			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;

			if (initialState[i + 1][j - 1] === O) lifeCell++;
			if (initialState[i + 1][j] === O) lifeCell++;
			if (initialState[i + 1][j + 1] === O) lifeCell++;
		}

	} else if (i + 1 === initialState.length) {
		if (j === 0) {
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j + 1] === O) lifeCell++;
		} else if (j + 1 === initialState[0].legnth) {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
		} else {
			if (initialState[i - 1][j - 1] === O) lifeCell++;
			if (initialState[i - 1][j] === O) lifeCell++;
			if (initialState[i - 1][j + 1] === O) lifeCell++;

			if (initialState[i][j - 1] === O) lifeCell++;
			if (initialState[i][j + 1] === O) lifeCell++;
		}
	} else {
		if (initialState[i - 1][j - 1] === O) lifeCell++;
		if (initialState[i - 1][j] === O) lifeCell++;
		if (initialState[i - 1][j + 1] === O) lifeCell++;

		if (initialState[i][j - 1] === O) lifeCell++;
		if (initialState[i][j + 1] === O) lifeCell++;

		if (initialState[i + 1][j - 1] === O) lifeCell++;
		if (initialState[i + 1][j] === O) lifeCell++;
		if (initialState[i + 1][j + 1] === O) lifeCell++;
	}


	if (lifeCell === 3) { aliveCell.push([i, j]) }

	lifeCell = 0;
}

function calculateNextState(prevState) {

        let nextState



				for(let i=0; i < initialState.length; i++){
					for (let j = 0; j < initialState[0].length; j++) {
						// deadCell
						if (initialState[i][j] === O) {
							checkedDead(i, j);
							continue;
						}
						// alive
						checkedAlive(i, j)
					}
				}
			console.log(deadCell);
			console.log(aliveCell);

				// killCell(deadCell);

        // write your code
	return

}

const str = JSON.stringify
// 결과로 true가 찍혀야 합니다.
console.log(
        str(calculateNextState(initialState)) === str(secondState)
)
