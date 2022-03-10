import React, { useState } from "react";
// import "./GetStartedForm.css";

export default function NewInfoForm({ addInfo }) {
  const [newInfo, setNewInfo] = useState({question: "", answer:""});

  function handleChangeState(evt) {
    const updatedNewInfo = {
      ...newInfo,
      [evt.target.question]: evt.target.value
    };
    setNewInfo(updatedNewInfo);
  }

  function handleAddInfo(evt) {
    evt.preventDefault();
    addInfo(newInfo);
    setNewInfo({
      question: "",
      answer: "select"
    });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleAddInfo}>
      <label>I'd like to adopt a </label>
      <select name="answer" value={newInfo.answer} onChange={handleChangeState}>
        <option value={1}>cat</option>
        <option value={2}>dog</option>
      </select>
      <label>I am a ____ pet owner</label>
      <select name="answer" value={newInfo.answer} onChange={handleChangeState}>
        <option value={1}>first-time</option>
        <option value={2}>previous</option>
        <option value={2}>current</option>
      </select>
      <label>I currently have </label>
      <select name="answer" value={newInfo.answer} onChange={handleChangeState}>
        <option value={1}>no dog(s) or cat(s)</option>
        <option value={2}>cat(s)</option>
        <option value={2}>dog(s)</option>
        <option value={2}>dog(s) and cat(s)</option>
      </select>
      <label>My ideal dog/cat is </label>
      <select name="answer" value={newInfo.answer} onChange={handleChangeState}>
        <option value={1}>puppy/kitten</option>
        <option value={2}>young cat/dog</option>
        <option value={2}>adult cat/dog</option>
        <option value={2}>seniour cat/dog</option>
      </select>
      <label>I would like to adopt </label>
      <select name="answer" value={newInfo.answer} onChange={handleChangeState}>
        <option value={1}>(no gender preference)</option>
        <option value={2}>female</option>
        <option value={2}>male</option>
      </select>
      <label>I prefer a dog that is </label>
      <select name="answer" value={newInfo.answer} onChange={handleChangeState}>
        <option value={1}>small (0-25lbs)</option>
        <option value={2}>medium (26-60lbs)</option>
        <option value={2}>large(61-100lbs)</option>
        <option value={2}>extra large (101lbs or more)</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}