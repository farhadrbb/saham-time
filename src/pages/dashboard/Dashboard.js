import React from "react";
import { Row, Col } from "reactstrap";
import s from "./Dashboard.module.scss";
import TableList from "./components/tableList";
import data from "../../db";
import { Box } from "@mui/material";
import Filters from "./components/filters";

const Dashboard = () => {
  return (
    <div className={s.root}>
      <Row>
        <Col lg={8}>
          <Filters />
        </Col>
      </Row>
      
      <Box className={s.pageTitle}>
        <h3>محبوب ترین ها</h3>
        <span>مشاهده همه</span>
      </Box>

      <Row>
        <Col lg={12}>
          <Row>
            {data?.hotlists?.slice(0, 3).map((item, index) => (
              <Col key={index} lg={4}>
                <TableList item={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Box className={s.pageTitle}>
            <h3>پر بازده</h3>
            <span>مشاهده همه</span>
          </Box>
          <Row>
            {data?.hotlists?.map((item, index) => (
              <Col key={index} lg={4}>
                <TableList item={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
