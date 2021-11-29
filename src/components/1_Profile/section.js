import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  // className: PropTypes.string,
  title: PropTypes.string,
  Children: PropTypes.node,
};

// export default Section
