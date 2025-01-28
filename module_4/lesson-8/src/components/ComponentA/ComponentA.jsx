import Modal from "../Modal/Modal";
import { useToggle } from "../../hooks/useToggle";

const ComponentA = () => {
  const { isOpen, open, close } = useToggle(false);

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};
export default ComponentA;
