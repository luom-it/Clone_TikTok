import { useState, forwardRef } from "react";
import classNames from "classnames";
import images from "../../assets/images/img_default.png";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);
const Image = forwardRef(
  (
    { src, alt, className, fallback: customFallback = images, ...props },
    ref
  ) => {
    //bij trungf teen ta có 2 cách
    //1: đổi tên fallback trong state thanaanhf _fallback
    //2: dùng ES6 đổi tên props truyền vào
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };
    return (
      <img
        className={cx("wrapper", className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
