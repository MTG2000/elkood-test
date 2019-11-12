import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AppointmentCard from "../AppointmentCard";

let intitalAppointments = [
  {
    id: 2,
    name: "Ahmad Al-Mousa",
    blood: "A+",
    date: "2018-02-03T02:45:00",
    phone: "0969783742",
    isEmergency: false,
    inProgress: true
  },
  {
    id: 3,
    name: "Mohammed Diab",
    blood: "A",
    date: "",
    phone: "0961531742",
    isEmergency: false
  },
  {
    id: 4,
    name: "Louis Mardian",
    blood: "B",
    date: "",
    phone: "0969432742",
    isEmergency: true
  },
  {
    id: 5,
    name: "Amir Lababide",
    blood: "O",
    date: "2018-02-17T02:15:00",
    phone: "0969783412",
    isEmergency: false
  },
  {
    id: 6,
    name: "Reem Abel",
    blood: "AB",
    date: "2018-02-17T02:15:00",
    phone: "0969712212",
    isEmergency: false
  },
  {
    id: 7,
    name: "Martin Hazem",
    blood: "B",
    date: "",
    phone: "0969432742"
  },
  {
    id: 8,
    name: "Amir Lababide",
    blood: "O",
    date: "2018-02-17T02:15:00",
    phone: "0969783412",
    isEmergency: false
  },
  {
    id: 9,
    name: "Reem Abel",
    blood: "AB",
    date: "2018-02-17T02:15:00",
    phone: "0969712212",
    isEmergency: false
  },
  {
    id: 11,
    name: "Martin Hazem",
    blood: "B",
    date: "",
    phone: "0969432742"
  },
  {
    id: 12,
    name: "Amir Lababide",
    blood: "O",
    date: "2018-02-17T02:15:00",
    phone: "0969783412",
    isEmergency: false
  },
  {
    id: 13,
    name: "Reem Abel",
    blood: "AB",
    date: "2018-02-17T02:15:00",
    phone: "0969712212",
    isEmergency: false
  },
  {
    id: 14,
    name: "Martin Hazem",
    blood: "B",
    date: "",
    phone: "0969432742"
  },
  {
    id: 15,
    name: "Amir Lababide",
    blood: "O",
    date: "2018-02-17T02:15:00",
    phone: "0969783412",
    isEmergency: false
  },
  {
    id: 16,
    name: "Reem Abel",
    blood: "AB",
    date: "2018-02-17T02:15:00",
    phone: "0969712212",
    isEmergency: false
  },
  {
    id: 17,
    name: "Martin Hazem",
    blood: "B",
    date: "",
    phone: "0969432742"
  }
];

let appointmentsSorted = false;

//Here We Sort the apppointments so that the InProgress is first
//then the emergencies then people with appointments then everybody else
const SortAppointments = (appointmentsArr, setAppointments) => {
  let inProgressItems = [];
  let emergrncyItems = [];

  appointmentsArr = appointmentsArr.map(a => {
    if (a.isEmergency) {
      emergrncyItems.push(a);
      return null;
    }
    if (a.inProgress) {
      inProgressItems.push(a);
      return null;
    }

    return a;
  });

  appointmentsArr = appointmentsArr.filter(a => a);
  appointmentsArr.sort((a, b) => {
    if (!a.date) return -1;
    else if (!b.date) return 1;
    return 0;
  });
  appointmentsArr = appointmentsArr.concat(emergrncyItems, inProgressItems);
  appointmentsArr.reverse();
  appointmentsSorted = true;
  setAppointments(appointmentsArr);
};

const Appointments = () => {
  const handleDelete = id => {
    const newAppointments = appointments.filter(a => a.id !== id);
    setAppointments(newAppointments);
  };

  const handleLettingIn = id => {
    //Set the appointment inProgress to true and then resort
    const newAppointments = appointments.map(a => {
      if (a.id === id) a.inProgress = true;
      return a;
    });

    appointmentsSorted = false;
    setAppointments(newAppointments);
  };

  const [appointments, setAppointments] = useState(intitalAppointments);
  if (!appointmentsSorted) SortAppointments(appointments, setAppointments);

  return (
    <Container className="pb-5 pt-6">
      {appointments.length > 0 ? (
        appointments.map(a => (
          <AppointmentCard
            key={a.id}
            id={a.id}
            name={a.name}
            blood={a.blood}
            date={a.date}
            phone={a.phone}
            isEmergency={a.isEmergency}
            inProgress={a.inProgress}
            onDelete={handleDelete}
            onLettingIn={handleLettingIn}
          />
        ))
      ) : (
        <h2 className="h1 text-white">No Appointments Left ... :)</h2>
      )}
    </Container>
  );
};

export default Appointments;
