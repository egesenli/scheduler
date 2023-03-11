import React, { useState } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const ERROR_SAVE = "Could not save appointment";
const ERROR_DELETE = "Could not delete appointment";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const [error, setError] = useState(false);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => {
        transition(ERROR_SAVE, true);
        setError(true);
      });
  };

  const deleteAppointment = () => {
    transition(DELETING);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
        setError(false);
      })
      .catch(() => {
        transition(ERROR_DELETE, true);
        setError(true);
      });
  };

  const onDelete = () => {
    transition(CONFIRM);
  };

  const onEdit = () => {
    transition(EDIT);
  };

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === ERROR_SAVE && (
        <Error
          message="Could not save appointment"
          onClose={() => {
            setError(false);
            back();
          }}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not delete appointment"
          onClose={() => {
            setError(false);
            back();
          }}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete this appointment?"
          onCancel={() => {
            setError(false);
            back();
          }}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      {(mode === CREATE || mode === EDIT) && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => {
            setError(false);
            back();
          }}
          onSave={save}
          name={props.interview ? props.interview.student : null}
          interviewer={props.interview ? props.interview.interviewer.id : null}
        />
      )}
    </article>
  );
}
