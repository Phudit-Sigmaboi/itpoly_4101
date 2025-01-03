import React from "react";

function About() {
  // รายชื่อและข้อมูลบุคลากร
  const personnel = [
    { id: 1, name: "นางสาวมยุลีย์ พงษ์บุพศิริกุล", position: "หัวหน้าสาขางานเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg" },
    { id: 2, name: "นางสาวณัฐกานต์ ภิรมณ์", position: "รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg" },
    { id: 3, name: "นางสาวสวิตตา ประทุม", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10409.jpg" },
    { id: 4, name: "นางสาวธัญญลักษณ์ กันธะ", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10421.jpg" },
    { id: 5, name: "นายไพศาล ณ ลำปาง", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10426.jpg" },
    { id: 6, name: "นางสาวนาริน พรมมี", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10462.jpg" },
    { id: 7, name: "นายเทวฤทธิ์ วงค์ฉายา", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10466.jpg" },
    { id: 8, name: "นางสาววรัญญา อินชัย", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10476.jpg" },
    { id: 9, name: "นายณัฐพงษ์ นามคำ", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10477.jpg" },
    { id: 10, name: "นางสาวธนัตชนก แก้วยศ", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10478.jpg" },
    { id: 11, name: "นายศรายุทธ ผ่องแผ้ว", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10485.jpg" },
    { id: 12, name: "นายสุรชัย เจริญศรี", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10486.jpg" },
    { id: 13, name: "นางสาวธัญญรัตน์ มาลา", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10488.jpg" },
    { id: 14, name: "นายสุรเวศม์ สุวรรณดำรงผล", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10489.jpg" },
    { id: 15, name: "ว่าที่ร้อยตรีเมธาวิณทร์ เมษาเทียนจันทร์", position: "ครูเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/10490.jpg" },
    { id: 16, name: "นายจิรวัฒน์ จอมมณี", position: "นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/13730.jpg" },
    { id: 17, name: "นายภคพล กองทุม", position: "นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ", img: "https://www.lannapoly.ac.th/online/Tea_picture/13731.jpg" },
  ];

  return (
    <section id="about" style={styles.section}>
      <h2>Meet Our Team</h2>
      <div style={styles.grid}>
        {personnel.map((person) => (
          <div key={person.id} style={styles.card}>
            <img src={person.img} alt={person.name} style={styles.image} />
            <h3 style={styles.name}>{person.name}</h3>
            <p style={styles.position}>{person.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "2em",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    padding: "1em",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "1em",
  },
  name: {
    fontSize: "1.2em",
    fontWeight: "bold",
  },
  position: {
    fontSize: "1em",
    color: "#666",
  },
};

export default About;
