import PropTypes from 'prop-types';

export const Notification = ({ notificationText }) => {
  return (
		<>
			<p className="mb-2 text-center">{notificationText}</p>
		</>
	);
};

Notification.propTypes = {
  notificationText: PropTypes.string.isRequired,
};
