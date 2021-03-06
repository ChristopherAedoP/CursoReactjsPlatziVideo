import React from 'react';

function Icon(props) {
	const { color, size } = props;
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			fill={color}
			width={size}
			height={size}
			viewBox="0 0 32 32"
		>
			{props.children}
		</svg>
	);
}

export default Icon;
