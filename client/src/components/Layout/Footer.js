import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">2N STORE</h1>
      <p className="text-center mt-3">
        <Link to="/about">Về Chúng Tôi</Link>|<Link to="/contact">Liên Hệ</Link>|
        <Link to="/policy">Chính Sách Bảo Mật</Link>
      </p>
    </div>
  );
};

export default Footer;
