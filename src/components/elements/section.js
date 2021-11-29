import PropTypes from 'prop-types';

export default function Section({ className, children }) {
  return (
    <section className={className}>
      {/* {className && { className }} */}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  Children: PropTypes.node,
};

// export default Section
