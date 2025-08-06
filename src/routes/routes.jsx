import config from "../config";
//Layout
import { HeaderOnly } from "../layouts";
//pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
//chứa những routes không cần đăng nhập mà vẫn xem được
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly, // sử dụng HeaderOnly layout cho trang Upload
  },
  {
    path: config.routes.search,
    component: Search,
  },
];

//chứa những routes cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
