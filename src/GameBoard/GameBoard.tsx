import "./GameBoard.css";
import SingleCell from "../SingleCell/SingleCell";
import ToolbarButton from "../ToolbarButton/ToolbarButton";
import { getCellType } from "./helpers";
import { useState } from "react";
import testImage from "../assets/testImage.jpg";

// Interface that defines mandatory (?) props for the GameBoard component
// interface GameBoardProps {
// 	foo: number;
// }

// Define methods for gameboard here

// GameBoard instance - renders collection of SingleCells
const GameBoard = () => {
	// Define Initial Matrix State
	const [matrix /*setMatrix */] = useState<number[][]>([
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0]
	]);

	// Return Grid of SingleCells, passing corresponding matrix value to each
	return (
		<div className="verticalParent">
			<div className="horizontalParent">
				<ToolbarButton
					label="foo"
					onClick={() => console.log("foo")}
					bgColor="green"
					icon={testImage}
				/>
				<ToolbarButton
					label="bar"
					onClick={() => console.log("bar")}
					bgColor="purple"
				/>
			</div>
			<div className="grid7x7">
				{matrix.map((row, rowCount) =>
					row.map((cellValue, cellCount) => {
						const currLoop = rowCount * 7 + cellCount;
						return (
							<SingleCell
								value={cellValue}
								cellType={getCellType(currLoop)}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default GameBoard;
