import React from "react";

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About Us</h2>
      <p>แนะนำการศึกษาเทคโนโลยีในสาขาที่เกี่ยวข้อง</p>
      <p>บอกเป้าหมายและวิสัยทัศน์ของสาขา</p>
    </section>
  );
}

const styles = {
  section: {
    padding: "2em",
  },
};

export default About;
