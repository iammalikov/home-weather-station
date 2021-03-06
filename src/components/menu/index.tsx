import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import './styles.scss';

type MenuProps = {
  isShow: boolean;
};

const Menu: React.FC<MenuProps> = ({ isShow }) => (
  <nav
    className={cx('menu', {
      menu_show: isShow,
    })}
  >
    <NavLink
      to={process.env.PUBLIC_URL}
      className="menu__item"
      activeClassName="menu__item_selected"
      exact
    >
      Main
    </NavLink>
    <div className="menu__item menu__item_disabled menu__item_livingroom">
      Livingroom
    </div>
    <div className="menu__item menu__item_disabled menu__item_kitchen">
      Kitchen
    </div>
    <div className="menu__item menu__item_disabled menu__item_bathroom">
      Bathroom
    </div>
    <div className="menu__item menu__item_disabled menu__item_outdoors">
      Outdoors
    </div>
  </nav>
);

export default Menu;
