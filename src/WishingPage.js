import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventImage from "./img/diwali2024.jpg";

const WishingPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/result/${name}`);
  };

  return (
    <div style={styles.container}>
      <img src={EventImage} alt="Festival Event" style={styles.image} />
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Generate Wish
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "10px",
    margin: "0 auto", // Center the container horizontally
    width: "100%", // Ensure it takes full width on smaller screens
    maxWidth: "400px", // Limit max width to 400px
    backgroundColor: "#f9f9f9", // Light background (for fallback)
    backgroundImage: `url('./img/background.jpg')`, // Add background image here
    backgroundSize: "cover", // Ensure the image covers the entire container
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Prevent the image from repeating
    fontFamily: '"Roboto", sans-serif',
    animation: "fadeIn 1.5s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
  },

  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    animation: "slideDown 1s ease-in-out",
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.15)",
    animation: "slideUp 0.8s ease",
    maxWidth: "400px", // Limit input group width to 400px
    margin: "0 auto", // Center the input group on the screen
  },
  input: {
    padding: "10px 15px",
    fontSize: "16px",
    flex: 1,
    border: "1px solid #ccc",
    borderRadius: "5px",
    transition: "border-color 0.3s ease",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 123, 255, 0.3)",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "@keyframes slideDown": {
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
  },
  "@keyframes slideUp": {
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
  },
};

export default WishingPage;
