import clsx from 'clsx';
import './Alert.css';

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx('alert', variant, {
        'is-outlined': outlined,
        'is-elevated': elevated,
      })}
    >
      {children}
    </p>
  );
};

export default Alert;
