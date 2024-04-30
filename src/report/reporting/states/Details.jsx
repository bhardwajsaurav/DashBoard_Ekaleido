import React from "react";

const Details = (props) => {
	const {xpos, ypos, stateName} = props;

	return (
		<div style={{top: ypos, left: xpos}} className="details-popup">
			<p>{stateName}</p>
		</div>
	);
};

export default Details;
