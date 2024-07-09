import styles from "./Sidebar.module.scss";
import classNames from "classnames";
import { useSidebar } from "../../context/SidebarContext";
import SidebarItem from "../SidebarItem/SidebarItem";
import { IoGrid, IoCash, IoImages, IoPeople, IoChatbox } from "react-icons/io5";

function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  const sidebarClasses = classNames(styles.sidebar, {
    [styles["sidebar--open"]]: isSidebarOpen,
  });

  return (
    <aside className={sidebarClasses}>
      <nav>
        <ul className={styles.sidebar__list}>
          <SidebarItem icon={<IoGrid />} path="/">
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<IoCash />} path="/sales">
            Sales
          </SidebarItem>
          <SidebarItem icon={<IoImages />} path="/catalog">
            Catalog
          </SidebarItem>
          <SidebarItem icon={<IoPeople />} path="/customers">
            Customers
          </SidebarItem>
          <SidebarItem icon={<IoChatbox />} path="/reviews">
            Reviews
          </SidebarItem>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
