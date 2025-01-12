import './components/Alert/Alert';
import Alert from './components/Alert/Alert';

const App = () => {
  return (
    <>
      <Alert variant="info">Please update your email!</Alert>
      <Alert variant="error">There was an error during transaction!</Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variant="warning">
        Payment received, thank you for your purchase!
      </Alert>
    </>
  );
};

export default App;
