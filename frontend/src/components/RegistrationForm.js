import React, { useState } from "react";
import axios from "axios";
import logo from "../images/logo.jpg";


// ** CTRL + p opens the filefinder 
const RegistrationForm = () => {

// to be reviewed, nothing happens with this state on button click so far
const[intermediate,setIntermediate]=useState("intermediate")


  const [coachName, setCoachName] = useState("");
  const [date, setDate] = useState("");
  const [athleteName, setAthleteName] = useState("");
  const [parentName, setParentName] = useState("");
  
  
/************* saving the current state of the fields as the user types in the input fields ***********/
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

  /**** removed the (e) from the register user because the event now goes to the registerAndMessage function onSubmit */
 
  /********************************** RADIO button State code **************************/
  const [skillOneYes, setSkillOneYes] = useState("");
  const [skillOneNo, setSkillOneNo] = useState("");
  const [skillTwoYes, setSkillTwoYes] = useState("");
  const [skillTwoNo, setSkillTwoNo] = useState("");
  const [skillThreeYes, setSkillThreeYes] = useState("");
  const [skillThreeNo, setSkillThreeNo] = useState("");
  const [skillFourYes, setSkillFourYes] = useState("");
  const [skillFourNo, setSkillFourNo] = useState("");

  /***** recording first skill yes or no ********/

  const recordSkillOneYes = (e) => {
    setSkillOneYes(e.target.value);
    console.log(e.target.value);
  };

  const recordSkillOneNo = (e) => {
    setSkillOneNo(e.target.value);
    console.log(e.target.value);
  };

  /****** recording second skill yes or no *******/

  const recordSkillTwoYes = (e) => {
    setSkillTwoYes(e.target.value);
    console.log(e.target.value);
  };

  const recordSkillTwoNo = (e) => {
    setSkillTwoNo(e.target.value);
    console.log(e.target.value);
  };

  /********** recording third skill yes or no **********/

  const recordSkillThreeYes = (e) => {
    setSkillThreeYes(e.target.value);
    console.log(e.target.value);
  };

  const recordSkillThreeNo = (e) => {
    setSkillThreeNo(e.target.value);
    console.log(e.target.value);
  };

  /*********** recording fourth skill yes or no *********/

  const recordSkillFourYes = (e) => {
    setSkillFourYes(e.target.value);
    console.log(e.target.value);
  };

  const recordSkillFourNo = (e) => {
    setSkillFourNo(e.target.value);
    console.log(e.target.value);
  };
/************* function that evaluates athletes and sends body data to the database via a post route ***********/
  const evaluateAthlete = async (e) => {
    e.preventDefault();
    setHideForm(true)
    const athleteResult = {
      skillOneYes: skillOneYes,
      skillOneNo: skillOneNo,
      skillTwoYes: skillTwoYes,
      skillTwoNo: skillTwoNo,
      skillThreeYes: skillThreeYes,
      skillThreeNo: skillThreeNo,
      skillFourYes: skillFourYes,
      skillFourNo: skillFourNo,
    };
    
    skillLogic();
    const res = await axios.post(
      "http://localhost:3001/evaluations",
      athleteResult
    );
    console.log(res);
  };
  

  /*****************  This function does conditional rendering for the radio buttons  ***************/
  const skillLogic = () => {
    if (skillOneYes && skillTwoYes && skillThreeYes && skillFourYes === "Yes") {
   setIntermediate(intermediate)
    }
  };
/*********** Made a new state in order to show the message on submit of the form, the setSubmitted(true) is within the showFormMessage function **********/
  const[submitted, setSubmitted]=useState(false);

  /********** This function sets the display of the message to true on submit of the form , i also removed the (e) from this function as the event now falls on the registrationAndMessage function */
  

  /****** When the form submits this function is called, i combined the showFormMessage and registerUser function in order to carry out two actions at once. The (e) is placed on this function as this is the one we call onSubmit of the form */
  const registrationAndMessage = async (e) => {
    e.preventDefault()
    setSubmitted(true);
    const newUser = {
      coachName: coachName,
      athleteName: athleteName,
      date: date,
      parentName: parentName,
    };
    const res = await axios.post("http://localhost:3001/evaluations", newUser);
    console.log(res);
    setCoachName("")
    setAthleteName("")
    setDate("")
    setParentName("")
  }

  const[hideForm,setHideForm]=useState(false)
  
  return (
    <div>
      <img src={logo} alt="logo" width="100px" />

      <h1> Gotham Gymnastics</h1>
      <h2>Skill Assesment</h2>
      <form onSubmit={registrationAndMessage}>
        Coache's Name:
        <input
          type="text"
          name="coach name"
          placeholder="Enter Name"
          onChange={recordCoachName}
          value={coachName}
        />
        Date:
        <input type="date" name="date" onChange={recordDate} value={date}/>
        Athlete Name:
        <input
          type="text"
          name=" athlete name"
          placeholder="Athlete Name"
          onChange={recordAthleteName}
          value={athleteName}
        />
        Parent/Guardian Name:
        <input
          type="text"
          name=" parent name"
          placeholder="Parent Name"
          onChange={recordParentName}
          value={parentName}
        />
        <button type="submit">Register</button>
      </form>
      {/* short circuit evaluation; is submitted true? if so run the code to the right of the && */} 
     { submitted ? <div className='success-message'>Information Submitted Successfully!</div> : null }

      <section>
        <h1> Intermediate</h1>
        <h1> Advanced</h1>
        <h1> IGC </h1>
      </section>
      

      {/*************** Radio buttons for Intermediate  ************/}


      <h2>Intermediate</h2>
{hideForm ? null :
      <form onSubmit={evaluateAthlete}>

        <h3>Front Walkover</h3>
        <input
          type="radio"
          name="skill-one"
          id="skill-one-yes"
          value="Yes"
          onChange={recordSkillOneYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-one"
          id="skill-one-no"
          value="No"
          onChange={recordSkillOneNo}
        />
        <label>No</label>
        <h3>Back Walkover</h3>
        <input
          type="radio"
          name="skill-two"
          id="skill-two-yes"
          value="Yes"
          onChange={recordSkillTwoYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-two"
          id="skill-two-no"
          value="No"
          onChange={recordSkillTwoNo}
        />
        <label>No</label>
        <h3>Hand-Stand Forward-Roll</h3>
        <input
          type="radio"
          name="skill-three"
          id="skill-three-yes"
          value="Yes"
          onChange={recordSkillThreeYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-three"
          id="skill-three-no"
          value="No"
          onChange={recordSkillThreeNo}
        />
        <label>No</label>
        <h3>Round-Off</h3>
        <input
          type="radio"
          name="skill-four"
          id="skill-four-yes"
          value="Yes"
          onChange={recordSkillFourYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-four"
          id="skill-four-no"
          value="No"
          onChange={recordSkillFourNo}
        />
        <label>No</label>
        <br />
        <br />
        <button type="submit">Evaluate</button>
      </form>    
}
{hideForm && skillLogic}

      {/*************** Radio buttons for Advanced  ************/}

      <h2>Advanced</h2>

      <form onSubmit={evaluateAthlete}>

        <h3>Front Walkover</h3>
        <input
          type="radio"
          name="skill-one"
          id="skill-one-yes"
          value="Yes"
          onChange={recordSkillOneYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-one"
          id="skill-one-no"
          value="No"
          onChange={recordSkillOneNo}
        />
        <label>No</label>
        <h3>Back Walkover</h3>
        <input
          type="radio"
          name="skill-two"
          id="skill-two-yes"
          value="Yes"
          onChange={recordSkillTwoYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-two"
          id="skill-two-no"
          value="No"
          onChange={recordSkillTwoNo}
        />
        <label>No</label>
        <h3>Hand-Stand Forward-Roll</h3>
        <input
          type="radio"
          name="skill-three"
          id="skill-three-yes"
          value="Yes"
          onChange={recordSkillThreeYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-three"
          id="skill-three-no"
          value="No"
          onChange={recordSkillThreeNo}
        />
        <label>No</label>
        <h3>Round-Off</h3>
        <input
          type="radio"
          name="skill-four"
          id="skill-four-yes"
          value="Yes"
          onChange={recordSkillFourYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-four"
          id="skill-four-no"
          value="No"
          onChange={recordSkillFourNo}
        />
        <label>No</label>
        <br />
        <br />
        <button type="submit">Evaluate</button>
      </form>

      {/*************** Radio buttons for IGC  ************/}

      <h2>IGC</h2>

      <form onSubmit={evaluateAthlete}>

        <h3>Front Walkover</h3>
        <input
          type="radio"
          name="skill-one"
          id="skill-one-yes"
          value="Yes"
          onChange={recordSkillOneYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-one"
          id="skill-one-no"
          value="No"
          onChange={recordSkillOneNo}
        />
        <label>No</label>
        <h3>Back Walkover</h3>
        <input
          type="radio"
          name="skill-two"
          id="skill-two-yes"
          value="Yes"
          onChange={recordSkillTwoYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-two"
          id="skill-two-no"
          value="No"
          onChange={recordSkillTwoNo}
        />
        <label>No</label>
        <h3>Hand-Stand Forward-Roll</h3>
        <input
          type="radio"
          name="skill-three"
          id="skill-three-yes"
          value="Yes"
          onChange={recordSkillThreeYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-three"
          id="skill-three-no"
          value="No"
          onChange={recordSkillThreeNo}
        />
        <label>No</label>
        <h3>Round-Off</h3>
        <input
          type="radio"
          name="skill-four"
          id="skill-four-yes"
          value="Yes"
          onChange={recordSkillFourYes}
        />
        <label>Yes</label>
        <input
          type="radio"
          name="skill-four"
          id="skill-four-no"
          value="No"
          onChange={recordSkillFourNo}
        />
        <label>No</label>
        <br />
        <br />
        <button type="submit">Evaluate</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

