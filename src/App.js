import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', interests: [] });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img src="https://via.placeholder.com/350" alt="My profile pic" />
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Links Section */}
      <div>
        <a href="https://github.com" aria-label="GitHub">GitHub</a>
        <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="interest1">
          <input
            id="interest1"
            name="interests"
            type="checkbox"
            value="interest1"
            checked={formData.interests.includes("interest1")}
            onChange={handleChange}
          />
          Interest 1
        </label>

        <label htmlFor="interest2">
          <input
            id="interest2"
            name="interests"
            type="checkbox"
            value="interest2"
            checked={formData.interests.includes("interest2")}
            onChange={handleChange}
          />
          Interest 2
        </label>

        <label htmlFor="interest3">
          <input
            id="interest3"
            name="interests"
            type="checkbox"
            value="interest3"
            checked={formData.interests.includes("interest3")}
            onChange={handleChange}
          />
          Interest 3
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Thank you for submitting!</p>}
    </main>
  );
}

export default App;
