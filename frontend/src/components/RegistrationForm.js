import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [coachName, setCoachName] = useState("");
  const [date, setDate] = useState("");
  const [athleteName, setAthleteName] = useState("");
  const [parentName, setParentName] = useState("");

  const recordCoachName = (e) => {
    setCoachName(e.target.value);
    console.log(e.target.value);
  };

  const recordDate = (e) => {
    setDate(e.target.value);
  };

  const recordAthleteName = (e) => {
    setAthleteName(e.target.value);
  };

  const recordParentName = (e) => {
    setParentName(e.target.value);
  };

  const registerUser = async (e) => {
    e.preventDefault()
    const newUser = {
        coachName: coachName,
        athleteName: athleteName,
        date: date,
        parentName: parentName
    }
    const res = await axios.post('http://localhost:3001/user_info', newUser)
    console.log(res)
  }

  return (
    <div>
        <h1> Gotham Gymnastics</h1>
        <h2>Skill Assesment</h2>
      <form onSubmit={registerUser}>
        Coache's Name:
        <input
          type="text"
          name="coach name"
          placeholder="Enter Name"
          onChange={recordCoachName}
        />
        Date:
        <input type="date" name="date" onChange={recordDate} />
        Athlete Name:
        <input
          type="text"
          name=" athlete name"
          placeholder="Athlete Name"
          onChange={recordAthleteName}
        />
        Parent/Guardian Name:
        <input
          type="text"
          name=" parent name"
          placeholder="Parent Name"
          onChange={recordParentName}
        />
        <button type="submit">Register</button>
      </form>

      <section>
          <h1> Intermediate</h1>
          <h1> Advanced</h1>
          <h1> IGC </h1>
      </section>
    </div>
  );
};

export default RegistrationForm;
