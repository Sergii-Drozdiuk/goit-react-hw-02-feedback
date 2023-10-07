import PropTypes from 'prop-types';

export const StatisticsTitle = ({ title }) => {
   return (
     <>
         <h2 className="mb-2 text-center text-2xl">{title}</h2>
      </>
  );
};

StatisticsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};