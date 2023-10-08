import PropTypes from 'prop-types';

export const Statistics = ({ feedback: { good, neutral, bad }, totalFeedback, positiveFeedback, notificationText }) => {
	const color = positiveFeedback >= 50 ? { color: 'rgb(163 230 53)' } : { color: 'rgb(248 113 113)' };
	return (
		<>
			<h2 className="mb-2 text-center text-2xl">Statistics</h2>
			{totalFeedback ? (
				<ul className="mb-2 text-center">
					<li className="text-lime-400">Good: {good}</li>
					<li className='text-yellow-400'>Neutral: {neutral}</li>
					<li className="text-red-400">Bad: {bad}</li>
					<li>Total: {totalFeedback}</li>
					<li style={color}>Positive feedback: {positiveFeedback}%</li>
				</ul>
			) : (<p className="mb-2 text-center">{notificationText}</p>)}
			
		</>
	);
};

Statistics.propTypes = {
	totalFeedback: PropTypes.number.isRequired,
	positiveFeedback: PropTypes.number.isRequired,
	notificationText: PropTypes.string.isRequired,
	feedback: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}).isRequired,
};