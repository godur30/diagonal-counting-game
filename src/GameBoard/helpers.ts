// Define arrays to hold incides of blue and gold cells
const goldCells = [0, 6, 42, 48];
const blueCells = [
	1, 2, 3, 4, 5, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 43, 44, 45, 46, 47
];

// Define function that accepts matrix loop # and returns bg color
export function getCellType(loop: number): "grey" | "blue" | "gold" {
	if (goldCells.indexOf(loop) != -1) {
		return "gold";
	}
	if (blueCells.indexOf(loop) != -1) {
		return "blue";
	}
	return "grey";
}
