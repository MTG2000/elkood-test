import React from "react";
import { Row, Col, ProgressBar, Button } from "react-bootstrap";
import date_time from "date-and-time";
import styles from "./appointments.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppointmentCard = ({
  id,
  name,
  blood,
  date,
  phone,
  isEmergency,
  inProgress,
  onDelete,
  onLettingIn
}) => {
  let dateStr = "-";
  if (date) dateStr = date_time.format(new Date(date), "D MMM  HH:mm");

  let statusIcon;
  if (isEmergency) {
    statusIcon = (
      <FontAwesomeIcon
        icon="heartbeat"
        color="red"
        size="lg"
        className={styles.heartIcon}
      />
    );
  }

  return (
    <Row
      className={`${styles.card} py-5 px-3 ${inProgress && styles.inProgess}`}
    >
      <FontAwesomeIcon
        icon="times"
        size="lg"
        className={styles.trashIcon}
        onClick={() => onDelete(id)}
      />
      <Col md={1}>{statusIcon}</Col>
      <Col md={2} className="col-md-4">
        <h4 className="text-primary">{name}</h4>
      </Col>
      <Col md={1}>
        <h4 className="text-danger font-weight-bold">{blood}</h4>
      </Col>
      <Col md={2} className="d-flex align-items-center">
        <h5 className="text-success text-center w-100">{dateStr}</h5>
      </Col>
      <Col md={2} className="d-flex align-items-center">
        <h5 className="text-dark text-center w-100">{phone}</h5>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        {/** either show the progressbar or the Let in Button */}
        {inProgress && (
          <div className="px-4 w-100">
            <ProgressBar animated variant="success" now={100} />{" "}
          </div>
        )}
        {!inProgress && (
          <div className="d-flex justify-content-center">
            <Button onClick={() => onLettingIn(id)}>Let In</Button>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default AppointmentCard;
