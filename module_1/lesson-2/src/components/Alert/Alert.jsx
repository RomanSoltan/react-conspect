import './Alert.css';

const Alert = ({ variant, children }) => {
  const classNames = ['alert', variant];
  return <p className={classNames.join(' ')}>{children}</p>;
};

export default Alert;
