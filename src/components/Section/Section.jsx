import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section className="w-80 rounded-lg border p-2 max-[375px]:w-72">
      <h2 className="mb-4 text-center text-2xl">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
