import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        {/* phần content sẽ được truyền từ ngoài vào */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
