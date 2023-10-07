import PropTypes from 'prop-types';

export const Statistics = ({ feedback: { good, neutral, bad }, totalFeedback, positiveFeedback }) => {
	const color = positiveFeedback >= 50 ? { color: 'rgb(163 230 53)' } : { color: 'rgb(248 113 113)' };
	return (
		<ul className="mb-2 text-center">
			<li className="text-lime-400">Good: {good}</li>
			<li>Neutral: {neutral}</li>
			<li className="text-red-400">Bad: {bad}</li>
			<li>Total: {totalFeedback}</li>
			<li style={color}>Positive feedback: {positiveFeedback}%</li>
		</ul>
	);
};

Statistics.propTypes = {
	totalFeedback: PropTypes.number.isRequired,
	positiveFeedback: PropTypes.number.isRequired,
	feedback: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}).isRequired,
};