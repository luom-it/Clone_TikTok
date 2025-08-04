import React, { useEffect, useState } from "react";
// import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import Button from "../../../Button";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from "../../../../assets/images/TikTok_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGears,
  faKeyboard,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper, Menu } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import { Message, Notification, UploadIcon } from "../../../Icons";
import Image from "../../../Image";
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
        { type: "language", code: "fr", title: "Francais" },
        { type: "language", code: "es", title: "Espanol" },
        { type: "language", code: "de", title: "Deutsch" },
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
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

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
        <div className={cx("logo")}>
          <img height={42} width={118} src={logo} alt="logo" />
        </div>
        {/* search */}
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type="search" placeholder="Tìm Kiếm" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/* loading */}
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              {/* serach */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <div className={cx("actions-btn__list")}>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <Message />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Notification" placement="bottom">
                <button className={cx("action-btn")}>
                  <Notification />
                </button>
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
