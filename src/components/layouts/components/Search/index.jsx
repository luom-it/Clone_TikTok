import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { useState, useEffect, useRef } from "react";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import AccountItem from "../../../AccountItem";
import { Wrapper as PopperWrapper } from "../../../Popper";
import { useDebounce } from "../../../hooks";
const cx = classNames.bind(styles);
function Search() {
  const inpRef = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  //1: ""
  const debounce = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounce
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounce]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inpRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inpRef}
          value={searchValue}
          placeholder="Tìm Kiếm"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {/* loading */}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button className={cx("search-btn")}>
          {/* serach */}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
