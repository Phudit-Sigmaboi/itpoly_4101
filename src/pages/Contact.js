import React from "react";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Us</h2>
      <div style={styles.info}>
        <p>ที่อยู่: 123 ถนนเชียงใหม่-ลำปาง, เชียงใหม่, ประเทศไทย</p>
        <p>โทร: 081-234-5678</p>
        <p>อีเมล: example@email.com</p>
      </div>
      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7553.312888284188!2d98.99216!3d18.813458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LmC4Lib4Lil4Li04LmA4LiX4LiE4LiZ4Li04LiE4Lil4Liy4LiZ4LiZ4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1735879699395!5m2!1sth!2sth"
          width="100%"
          height="450"
          style={styles.map}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "2em",
    textAlign: "center",
  },
  info: {
    marginBottom: "1em",
  },
  mapContainer: {
    marginTop: "2em",
  },
  map: {
    border: "0",
  },
};

export default Contact;
