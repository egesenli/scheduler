import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  //Using useState to set the name and interviewer state
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  //Using a reset function to reset the name and interviewer state
  const reset = () => {
    setName("");
    setInterviewer(null);
  };
  //Using a cancel function to reset the name and interviewer state and call the onCancel function
  const cancel = () => {
    reset();
    props.onCancel();
  };
  //Using a save function to call the onSave function
  const save = () => {
    props.onSave(name, interviewer);
  };
  //Using a changeName function to set the name state
  const changeName = (event) => {
    setName(event.target.value);
  };
  //Using a changeInterviewer function to set the interviewer state
  const changeInterviewer = (id) => {
    setInterviewer(id);
  };
  //Returning the Form component
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={name}
            placeholder="Enter Student Name"
            onChange={changeName}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={changeInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={save}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
