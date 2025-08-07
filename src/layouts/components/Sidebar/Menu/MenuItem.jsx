//NavLink hỗ trợ active
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cx("menu-item", { active: isActive })}
    >
      {({ isActive }) => (
        <>
          {isActive ? iconActive : icon}
          <span className={cx("menu-item__title")}>{title}</span>
        </>
      )}
    </NavLink>
  );
}

export default MenuItem;
