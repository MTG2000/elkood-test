import React, { useState } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from "@material-ui/pickers";
import {
  Container,
  TextField,
  Box,
  Grid,
  Checkbox,
  Button,
  Select,
  FormControl,
  InputLabel
} from "@material-ui/core";

const AppointmentInput = ({ handleAdding }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [blood, setBlood] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(Date.now());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const phoneRegex = /^09[0-9]{8}$/;

  const handleSubmit = e => {
    e.preventDefault();
    //Add The data to the original List
    if ((phone && !phone.match(phoneRegex)) === true) return;
    handleAdding({
      name,
      isEmergency,
      date: new Date(selectedDate),
      blood,
      phone
    });

    //Clear The input Fields
    setName("");
    setSelectedDate(Date.now());
    setIsEmergency(false);
    setBlood("");
    setPhone("");
    //Scroll Back To Top
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Box bgcolor="#ffffff9e" mt={40} py={10} px={9} boxShadow={6}>
        <form onSubmit={handleSubmit}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <h2 data-aos="flip-left">New Appointment</h2>
            <Grid
              container
              spacing={3}
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={12} md={5} data-aos="fade-right">
                <TextField
                  required={true}
                  id="patient-name-input"
                  label="Patient Name"
                  variant="outlined"
                  margin="normal"
                  className="w-100"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoCorrect="off"
                />
              </Grid>
              <Grid item xs={12} md={5} data-aos="fade-left">
                <h6 className="d-inline">Is Emergency</h6>
                <Checkbox
                  checked={isEmergency}
                  onChange={e => setIsEmergency(e.target.checked)}
                  value={isEmergency}
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5} data-aos="fade-right">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Appointment Date"
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                  minDate={Date.now()}
                  className="w-100"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Grid>
              <Grid item xs={12} md={5} data-aos="fade-left">
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Appointment Time"
                  className="w-100"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
              <Grid item xs={12} md={5} data-aos="fade-right">
                <TextField
                  error={(phone && !phone.match(phoneRegex)) === true}
                  helperText="Enter A number in the format 09********"
                  id="patient-phone"
                  label="Patient Phone"
                  variant="outlined"
                  margin="normal"
                  className="w-100"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12} md={5} data-aos="fade-left">
                <FormControl className="w-50">
                  <InputLabel htmlFor="patient-blood-label">Blood</InputLabel>
                  <Select
                    native
                    value={blood}
                    onChange={e => setBlood(e.target.value)}
                    inputProps={{
                      name: "blood",
                      id: "patient-blood-label"
                    }}
                  >
                    <option value="" />
                    <option value={"A"}>A</option>
                    <option value={"B"}>B</option>
                    <option value={"O"}>O</option>
                    <option value={"AB"}>AB</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                data-aos="fade-up"
              >
                Add To List
              </Button>
            </Box>
          </MuiPickersUtilsProvider>
        </form>
      </Box>
    </Container>
  );
};

export default AppointmentInput;
