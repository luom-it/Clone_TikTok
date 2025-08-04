import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentItems = history[history.length - 1];
  const renderItems = () => {
    return currentItems.data.map((item, index) => {
      const isParent = !!item.children; //2 dấu nói thêm ép sang kiểu boolean
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              //push cái mới vào history
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      offset={[12, 8]}
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
