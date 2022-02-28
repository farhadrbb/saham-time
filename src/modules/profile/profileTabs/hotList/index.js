import React from "react";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import data from "../../../../db";
import Table from '../../../../pages/dashboard/components/tableList'
import s from "../../index.module.scss";

function isEven(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

const HotList = () => {
  return (
    <>
    <h5>هات لیست ها</h5>
      <div className={s["table-hotlist-parent"]}>
      <Row>
            {data?.hotlists?.slice(0, 3).map((item, index) => (
              <Col key={index} sm={12} lg={6}>
                <Table item={item} />
              </Col>
            ))}
          </Row>
      </div>
    </>
  );
};

export default HotList;
const listItems = [
  "Entertainment",
  "Private Time",
  "Rest",
  "Meal",
  "Exercise",
  "Work",
  "Home Projects",
  "Fff",
  "Fff",
  "Fff",
  "Fff",
  "Fff",
  "Fff",
  "Fff",
  "Fff",
];
