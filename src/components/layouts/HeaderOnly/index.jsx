import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        {/* phần content sẽ được truyền từ ngoài vào */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
