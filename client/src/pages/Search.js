import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
      <hr/>
      <br/>
      <br/>
        <div className="text-center">
          <h1>Kết Quả Tìm Kiếm</h1>
          <h6>
            {values?.results.length < 1
              ? "Không tìm thấy sản phẩm"
              : `Tìm thấy ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> {p.price}đ</p>
                  <button class="btn btn-primary ms-1">Chi Tiết</button>
                  <button class="btn btn-secondary ms-1">Thêm Vào Giỏ Hàng</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
