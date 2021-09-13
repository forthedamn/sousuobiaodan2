import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Select, Radio, Form, Row, Col, Input, Button, Table } from "antd";
import fetchDataFormServer from "./fetchDataFormServer";

const SearchForm = () => {
  const [form] = Form.useForm();

  const getDatasource = async (query = {}) => {
    // 模拟从服务端获取数据
    // 这里已经实现好了，你只需要完成下面这行之后的逻辑
    const result = await fetchDataFormServer(query);
  };

  return (
    <>
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
      ></Form>
    </>
  );
};

ReactDOM.render(
  <div style={{ paddingLeft: "20px" }}>
    <SearchForm />
  </div>,
  document.getElementById("container")
);
