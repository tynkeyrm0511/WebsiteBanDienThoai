import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Liên Hệ Với Chúng Tôi - 2N Store"}>
      <div className="row contactus ">
      <hr/>
        <div className="col-md-6 ">
          <img
            src="/images/contact.PNG"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <p className="text-justify mt-2">
          Bất kỳ câu hỏi và thông tin nào về sản phẩm, vui lòng gọi bất cứ lúc nào chúng tôi sẵn sàng phục vụ 24/7
          </p>
          <p className="mt-3">
            <BiMailSend /> : nguyen2110410@student.nctu.edu.vn
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0334667534</p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
