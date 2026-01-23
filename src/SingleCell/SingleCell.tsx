import "./SingleCell.css";

// Interface that defines the mandatory props for a SingleCell instance
interface SingleCellProps {
	cellType: "grey" | "blue" | "gold";
	value: number;
}

// SingleCell instance - displays it's value in a square shape
const SingleCell = (props: SingleCellProps) => {
	return (
		<div className={`singleCell ${props.cellType}`}>
			<p className={`cellText`}>{props.value}</p>
		</div>
	);
};

export default SingleCell;
