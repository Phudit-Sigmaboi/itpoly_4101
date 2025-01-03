import React from "react";

function Courses() {
  return (
    <section id="courses" style={styles.section}>
      <h2>Courses</h2>
      <p>ด้านล่างนี้คือเอกสารหลักสูตร:</p>
      <iframe
        public="/31901v5.pdf"
        title="PDF Viewer"
        style={styles.iframe}
      />
    </section>
  );
}

const styles = {
  section: {
    padding: "2em",
    textAlign: "center",
  },
  iframe: {
    width: "100%",
    height: "600px",
    border: "1px solid #ccc",
  },
};

export default Courses;
