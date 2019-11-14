import React from "react";
import date_time from "date-and-time";
import { Grid, Button, CircularProgress, Box } from "@material-ui/core";

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
    <Box
      mb={2}
      py={5}
      px={5}
      className={`${styles.card} ${inProgress && styles.inProgess}`}
      data-aos="fade-up"
    >
      <Grid container spacing={3}>
        <FontAwesomeIcon
          icon="times"
          size="lg"
          className={styles.trashIcon}
          onClick={() => onDelete(id)}
        />
        <Grid item xs={12} md={1}>
          {statusIcon}
        </Grid>
        <Grid item xs={12} md={4}>
          <h4 className="text-primary">{name}</h4>
        </Grid>
        <Grid item xs={12} md={1}>
          <h4 className="text-danger font-weight-bold">{blood}</h4>
        </Grid>
        <Grid item xs={12} md={2}>
          <h5 className="text-success text-center w-100">{dateStr}</h5>
        </Grid>
        <Grid item xs={12} md={2}>
          <h5 className="text-dark text-center w-100">{phone}</h5>
        </Grid>
        <Grid item container md={2} xs={12} justify="center">
          {/** either show the progressbar or the Let in Button */}
          {inProgress && (
            <Grid item>
              <CircularProgress style={{ color: "#00d800" }} />
            </Grid>
          )}
          {!inProgress && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onLettingIn(id)}
              >
                Let In
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentCard;
