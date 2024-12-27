// import react from "react";

// export default function Header() {
//     return(
//         <strong>
//             HOME
//         </strong>
//     );
// }

import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1>ชื่อเว็บไซต์</h1>
      <p>คำแนะนำหรือข้อความต้อนรับ</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center",
    padding: "1em 0",
  },
};

export default Header;
