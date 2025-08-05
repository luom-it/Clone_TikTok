//Layout
import { HeaderOnly } from "../components/layouts";
//pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
//chứa những routes không cần đăng nhập mà vẫn xem được
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/:nickname",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly, // sử dụng HeaderOnly layout cho trang Upload
  },
  {
    path: "/search",
    component: Search,
  },
];

//chứa những routes cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
