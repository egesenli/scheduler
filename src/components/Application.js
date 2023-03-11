import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => {
    setState(prevState => ({ ...prevState, day }));
  };

  const setAppointments = appointments => {
    setState(prevState => ({ ...prevState, appointments }));
  };

  const setInterviewers = interviewers => {
    setState(prevState => ({ ...prevState, interviewers }));
  };

  const bookInterview = (id, interview) => {
    // create a copy of the appointments object in state and update the appointment object with the new interview

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    // make a PUT request to the server to update the state there as well
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments
        });
      });
  };

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setAppointments(all[1].data);
      setInterviewers(all[2].data);
      setState(prevState => ({ ...prevState, days: all[0].data }));
    }).catch(error => console.log(error));
  }, []);

  const appointmentsForDay = getAppointmentsForDay(state, state.day);
  const interviewersForDay = getInterviewersForDay(state, state.day);

  const schedule = appointmentsForDay.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = interviewersForDay;
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}