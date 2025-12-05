import { useState } from "react";

const Form = () => {

  // 🔥 Single State Object
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    hobbies: "",
    gender: "",
    skills: [],
  });

  // Generic Handler for text / dropdown / radio
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Checkbox handler (skills array)
  const handleSkillChange = (event) => {
    const value = event.target.value;

    if (formData.skills.includes(value)) {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value),
      });
    } else {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    }
  };

  // Submit
  const handleSubmit = () => {
    console.log("---- FORM DATA ----");
    console.log(formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ borderRadius: "15px", width: "380px" }}>
        <h3 className="text-center mb-4">User Information Form</h3>

        {/* FIRST NAME */}
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="Enter first name"
            onChange={handleChange}
          />
        </div>

        {/* LAST NAME */}
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Enter last name"
            onChange={handleChange}
          />
        </div>

        {/* HOBBIES DROPDOWN */}
        <div className="mb-3">
          <label className="form-label">Hobbies</label>
          <select
            className="form-select"
            name="hobbies"
            onChange={handleChange}
          >
            <option value="">Select Hobby</option>
            <option value="Reading">Reading</option>
            <option value="Cricket">Cricket</option>
            <option value="Travelling">Travelling</option>
            <option value="Gaming">Gaming</option>
          </select>
        </div>

        {/* GENDER RADIO */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>

        {/* SKILLS CHECKBOX */}
        <div className="mb-3">
          <label className="form-label">Skills</label>

          <div className="form-check">
            <input
              type="checkbox"
              value="HTML"
              className="form-check-input"
              onChange={handleSkillChange}
            />
            <label className="form-check-label">HTML</label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              value="CSS"
              className="form-check-input"
              onChange={handleSkillChange}
            />
            <label className="form-check-label">CSS</label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              value="JavaScript"
              className="form-check-input"
              onChange={handleSkillChange}
            />
            <label className="form-check-label">JavaScript</label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              value="React"
              className="form-check-input"
              onChange={handleSkillChange}
            />
            <label className="form-check-label">React</label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button className="btn btn-primary w-100 mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
