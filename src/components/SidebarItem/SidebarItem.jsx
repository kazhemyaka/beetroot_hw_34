import styles from "./SidebarItem.module.scss";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

function SidebarItem({ icon, path, children }) {
  const { setIsSidebarOpen } = useSidebar();

  const handleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <li className={styles.sidebar__item}>
      <NavLink
        to={path}
        className={styles.sidebar__link}
        onClick={handleSidebar}
      >
        <IconContext.Provider value={{ size: "25px" }}>
          {icon}
        </IconContext.Provider>
        <span>{children}</span>
      </NavLink>
    </li>
  );
}

export default SidebarItem;
