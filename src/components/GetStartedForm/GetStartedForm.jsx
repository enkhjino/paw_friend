import React, { useState } from "react";
import * as surveyAPI from "../../utilities/survey-api"
import "./GetStartedForm.css";

export default function NewInfoForm({getMatches}) {
  const [newInfo, setNewInfo] = useState({
    species:"cat",
    experience:"first-time",
    havePets:"no dog(s) or cat(s)",
    age:"baby",
    gender:"female",
    size:"small"
  });

  function handleChangeState(evt) {
    const updatedNewInfo = {
      ...newInfo,
      [evt.target.name]: evt.target.value
    };
    setNewInfo(updatedNewInfo);
  }

  async function handleAddInfo(evt) {
    evt.preventDefault();
    getMatches(newInfo);
    const survey = await surveyAPI.addSurvey(newInfo)
    console.log(survey) 
  }
console.log(newInfo)
  return (
    <form className="NewSkillForm" onSubmit={handleAddInfo}>
      <label>I'd like to adopt a </label>
      <select name="species" value={newInfo.answer} onChange={handleChangeState}>
        <option value="cat">cat</option>
        <option value="dog">dog</option>
      </select>
      <label>I am a ____ pet owner</label>
      <select name="experience" value={newInfo.answer} onChange={handleChangeState}>
        <option value="first-time">first-time</option>
        <option value="previous">previous</option>
        <option value="current">current</option>
      </select>
      <label>I currently have </label>
      <select name="havePets" value={newInfo.answer} onChange={handleChangeState}>
        <option value="no dog(s) or cat(s)">no dog(s) or cat(s)</option>
        <option value="cat(s)">cat(s)</option>
        <option value="dog(s)">dog(s)</option>
        <option value="dog(s) and cat(s)">dog(s) and cat(s)</option>
        <option value="children">children</option>
      </select>
      <label>My ideal dog/cat is </label>
      <select name="age" value={newInfo.answer} onChange={handleChangeState}>
        <option value="baby">puppy/kitten</option>
        <option value="young">young cat/dog</option>
        <option value="adult">adult cat/dog</option>
        <option value="senior">seniour cat/dog</option>
      </select>
      <label>I would like to adopt </label>
      <select name="gender" value={newInfo.answer} onChange={handleChangeState}>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <label>I prefer a dog that is </label>
      <select name="size" value={newInfo.answer} onChange={handleChangeState}>
        <option value="small">small (0-25lbs)</option>
        <option value="medium">medium (26-60lbs)</option>
        <option value="large">large(61-100lbs)</option>
        <option value="xLarge">extra large (101lbs or more)</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}