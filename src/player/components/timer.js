import React from 'react';
import './timer.css';

function Leftpad(number) {
	const pad = '00';

	return pad.substring(0, pad.length - number.length) + number;
}
function FormattedTime(sec) {
	const minutes = parseInt(sec / 60, 10);
	const seconds = parseInt(sec % 60, 10);
	return `${minutes}:${Leftpad(seconds.toString())}`;
}

function Timer(props) {
	return (
		<div className="Timer">
			<p>
				<span>
					{FormattedTime(props.currentTime)} /{' '}
					{FormattedTime(props.duration)}
				</span>
			</p>
		</div>
	);
}

export default Timer;
