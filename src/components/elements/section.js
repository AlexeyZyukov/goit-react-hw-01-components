import PropTypes from 'prop-types';
import styles from './section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  Children: PropTypes.node,
};

// export default function Section({ className, children }) {
//   return (
//     <section className={className}>
//       {/* {className && { className }} */}
//       {children}
//     </section>
//   );
// }
