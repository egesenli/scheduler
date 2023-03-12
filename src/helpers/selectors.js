//This file contains the functions that will be used to retrieve data from the state object

export function getAppointmentsForDay(state, day) {
  const appointmentIds = state.days //Getting the appointment ids from the state object
    .filter(d => d.name === day)
    .map(d => d.appointments)
    .flat();
  //Mapping through the appointment ids and returning the appointments for the day
  const appointments = appointmentIds.map(id => state.appointments[id]);
  return appointments;
}

export function getInterview(state, interview) {
  //If there is no interview, return null
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer; //Getting the interviewer id from the interview object
  const interviewers = state.interviewers; //Getting the interviewers from the state object

  //Returning the interview object with the student and the interviewer
  return {
    student: interview.student,
    interviewer: interviewers[interviewerId],
  };
}

export function getInterviewersForDay(state, day) { //Getting the interviewers for the day from the state object and returning an array of interviewers for the day
  const dayObj = state.days.find(d => d.name === day); //Finding the day object from the state object
  if (!dayObj || !dayObj.interviewers) { //If there is no day object or no interviewers for the day, return an empty array
    return [];
  }
  //Mapping through the interviewers and returning the interviewers for the day
  const interviewers = dayObj.interviewers.map(id => state.interviewers[id]);
  return interviewers;
}