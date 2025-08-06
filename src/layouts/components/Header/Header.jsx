// import Tippy from "@tippyjs/react";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "../../../assets/images/TikTok_logo.svg";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGears,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Message, Notification, UploadIcon } from "../../../components/Icons";
import Image from "../../../components/Image";
import Search from "../Search";
import { Menu as Menu } from "../../../components/Popper";
import config from "../../../config";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        { type: "language", code: "en", title: "English" },
        { type: "language", code: "vi", title: "Tiếng Việt" },
        { type: "language", code: "fr", title: "Français" },
        { type: "language", code: "es", title: "Español" },
        { type: "language", code: "de", title: "Deutsch" },
        { type: "language", code: "it", title: "Italiano" },
        { type: "language", code: "pt", title: "Português" },
        { type: "language", code: "ru", title: "Русский" },
        { type: "language", code: "ja", title: "日本語" },
        { type: "language", code: "ko", title: "한국어" },
        { type: "language", code: "zh", title: "中文" },
        { type: "language", code: "ar", title: "العربية" },
        { type: "language", code: "tr", title: "Türkçe" },
        { type: "language", code: "th", title: "ไทย" },
        { type: "language", code: "id", title: "Bahasa Indonesia" },
        { type: "language", code: "ms", title: "Bahasa Melayu" },
        { type: "language", code: "pl", title: "Polski" },
        { type: "language", code: "nl", title: "Nederlands" },
        { type: "language", code: "sv", title: "Svenska" },
        { type: "language", code: "fi", title: "Suomi" },
        { type: "language", code: "no", title: "Norsk" },
        { type: "language", code: "da", title: "Dansk" },
        { type: "language", code: "ro", title: "Română" },
        { type: "language", code: "hu", title: "Magyar" },
        { type: "language", code: "cs", title: "Čeština" },
        { type: "language", code: "el", title: "Ελληνικά" },
        { type: "language", code: "he", title: "עברית" },
        { type: "language", code: "hi", title: "हिन्दी" },
        { type: "language", code: "bn", title: "বাংলা" },
        { type: "language", code: "ur", title: "اردو" },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //handle language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@luom",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGears} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true, //dau gach
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}

        <Link to={config.routes.home} className={cx("logo-link")}>
          <img height={42} width={118} src={logo} alt="logo" />
        </Link>

        {/* search */}
        <Search />
        {/* Actions */}
        <div className={cx("actions")}>
          {currentUser ? (
            <div className={cx("actions-btn__list")}>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <span tabIndex={-1}>
                  <button className={cx("action-btn")}>
                    <UploadIcon />
                  </button>
                </span>
              </Tippy>

              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <span tabIndex={-1}>
                  <button className={cx("action-btn")}>
                    <Message />
                  </button>
                </span>
              </Tippy>

              <Tippy delay={[0, 200]} content="Notification" placement="bottom">
                <span tabIndex={-1}>
                  <button className={cx("action-btn")}>
                    <Notification />
                  </button>
                </span>
              </Tippy>
            </div>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/31272fa6096144472e12f0b6bdf54b4d~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=61bb5f42&x-expires=1754326800&x-signature=yDsfxm7jFC9GmShBhBCW0EJXpPE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Nguyen van a"
                fallback="https://yt3.ggpht.com/ytc/AIdro_n4EABOy6Ijor53Y9vON11pv7lnVa4DCZbpGTyhfVHnh3Pxiux6cQbieChI2FN94xMBGA=s88-c-k-c0x00ffffff-no-rj"
              />
            ) : (
              <Button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
