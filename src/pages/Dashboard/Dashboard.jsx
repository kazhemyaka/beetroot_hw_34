import styles from "./Dashboard.module.scss";
import Statistic from "../../components/Statistic/Statistic";
import Welcome from "../../components/Welcome/Welcome";
import { IoCash, IoCart, IoChatbox, IoPersonAdd } from "react-icons/io5";
import Reviews from "../../components/Reviews/Reviews";
import NewCustomers from "../../components/NewCustomers/NewCustomers";
import Orders from "../../components/Orders/Orders";
import ORDERS from "../../components/Orders/data";
import REVIEWS from "../../components/Reviews/data";
import NEW_CUSTOMERS from "../../components/NewCustomers/data";

function Sections() {
  return (
    <div className={styles.sections}>
      <section className={styles.sections__revenue}>
        <Statistic
          icon={<IoCash />}
          title="Monthly Revenue"
          value="1 385 $US"
          color="#306f8e"
        />
      </section>
      <section className={styles.sections__newOrders}>
        <Statistic
          icon={<IoCart />}
          title="New Orders"
          value={ORDERS.length}
          color="#f09737"
        />
      </section>
      <section className={styles.sections__welcome}>
        <Welcome />
      </section>
      <section className={styles.sections__pendingOrders}>
        <Orders />
      </section>
      <section className={styles.sections__reviews}>
        <Statistic
          icon={<IoChatbox />}
          title="Pending Reviews"
          value={REVIEWS.length}
          color="#ea4134"
        >
          <Reviews />
        </Statistic>
      </section>
      <section className={styles.sections__customers}>
        <Statistic
          icon={<IoPersonAdd />}
          title="New Customers"
          value={NEW_CUSTOMERS.length}
          color="#53af50"
        >
          <NewCustomers />
        </Statistic>
      </section>
    </div>
  );
}

export default Sections;
