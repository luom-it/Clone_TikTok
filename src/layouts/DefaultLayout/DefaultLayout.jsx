import classNames from "classnames/bind";
import Header from "../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        {/* phần content sẽ được truyền từ ngoài vào */}
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
