import { HiUser } from 'react-icons/hi';
import css from './UserMenu.module.css';

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser className={css.myIcon} />
        {name}
      </p>
    </div>
  );
};

export default UserMenu;
