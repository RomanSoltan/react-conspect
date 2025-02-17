import clsx from "clsx";
import s from "./Button.module.css";

const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherPros
}) => {
  return (
    <button
      className={clsx(s.btn, { [s.isSelected]: selected })}
      type={type}
      {...otherPros}
    >
      {children}
    </button>
  );
};
export default Button;
