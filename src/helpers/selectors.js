export function getAppointmentsForDay(state, day) {
  const appointmentIds = state.days
    .filter(d => d.name === day)
    .map(d => d.appointments)
    .flat();
  const appointments = appointmentIds.map(id => state.appointments[id]);
  return appointments;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerId = interview.interviewer;
  const interviewers = state.interviewers;

  return {
    student: interview.student,
    interviewer: interviewers[interviewerId],
  };
}

export function getInterviewersForDay(state, day) {
  const dayObj = state.days.find(d => d.name === day);
  if (!dayObj || !dayObj.interviewers) {
    return [];
  }
  const interviewers = dayObj.interviewers.map(id => state.interviewers[id]);
  return interviewers;
}