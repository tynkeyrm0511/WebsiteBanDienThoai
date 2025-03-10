import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Về Chúng Tôi - 2N Store"}>
      <div className="row contactus ">
      <hr/>
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            2N Store được viết tắt từ chữ cái đầu của 2 nhà sáng lập là Ngô Hoàng Nguyên và Nguyễn Minh Ngoan. 2N Store - địa chỉ mua sắm trực tuyến độc đáo dành cho những người đam mê công nghệ và đặc biệt là điện thoại thông minh! Tại 2N Store, chúng tôi tự hào là nguồn cung cấp hàng đầu về điện thoại di động, đảm bảo đem đến cho khách hàng những sản phẩm chất lượng và đa dạng.
          </p>
          <p>
            Với sự đa dạng về thương hiệu, mẫu mã và tính năng, 2N Store cam kết mang đến cho bạn trải nghiệm mua sắm tuyệt vời nhất. Chúng tôi luôn cập nhật những xu hướng mới nhất trong thế giới công nghệ để bạn có thể luôn sở hữu những sản phẩm tiên tiến và hiện đại nhất.
          </p>
          <p>
           Ngoài ra, dịch vụ khách hàng chuyên nghiệp và thân thiện của chúng tôi sẽ luôn sẵn sàng hỗ trợ bạn trong quá trình mua sắm và giải đáp mọi thắc mắc. Hãy đồng hành cùng 2N Store để biến ước mơ công nghệ của bạn thành hiện thực. Hãy truy cập ngay để khám phá thế giới điện thoại thông minh tại www.2nstore.com!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
