import React from "react";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Us</h2>
      <p>รายละเอียดการติดต่อ เช่น ที่อยู่ เบอร์โทรศัพท์ อีเมล</p>
      <p>แผนที่หรือ Google Maps</p>
    </section>
  );
}

const styles = {
  section: {
    padding: "2em",
  },
};

export default Contact;
