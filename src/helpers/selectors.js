export function getAppointmentsForDay(state, day) {
  const appointmentIds = state.days
    .filter(d => d.name === day)
    .map(d => d.appointments)
    .flat();
  const appointments = appointmentIds.map(id => state.appointments[id]);
  return appointments;
}