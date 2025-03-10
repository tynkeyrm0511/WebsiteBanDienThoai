import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Chính Sách Bảo Mật - 2N Store"}>
      <div className="row contactus ">
      <hr/>
        <div className="col-md-6 ">
          <img
            src="/images/policy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <b>1. Mục đích và phạm vi thu thập thông tin</b>
          <br/>
          <b>2. Phạm vi sử dụng thông tin</b>
          <br/>
          <b>3. Thời gian lưu trữ thông tin</b>
          <br/>
          <b>4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân</b>
          <br/>
          <b>5. Cam kết bảo mật thông tin cá nhân khách hàng</b>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
