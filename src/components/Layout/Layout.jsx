import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarProvider } from "../../context/SidebarContext";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default Layout;
