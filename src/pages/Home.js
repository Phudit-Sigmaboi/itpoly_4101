// import React from "react";

// export default function Home() {
//     const people = [
//         {
//         name: 'MissMayulee Chailangka',
//         description: "นางสาวมยุลีย์ พงษ์บุพศิริกุล <br> หัวหน้าสาขางานเทคโนโลยีสารสนเทศ",
//         img: 'https://www.lannapoly.ac.th/online/Tea_picture/10402.jpg'
//         },
//         {
//         name: 'MissNutthakan Pirom',
//         description: "นางสาวณัฐกานต์ ภิรมณ์ <br> รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ",
//         img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
//         },
//         {
//         name: 'MissSawitta Pratoom',
//         description: "นางสาวสวิตตา ประทุม <br> ครูเทคโนโลยีสารสนเทศ",
//         img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
//         },
//         {
//         name: 'MissThunyalak Kuntha',
//         description: "นางสาวธัญญลักษณ์ กันธะ <br> ครูเทคโนโลยีสารสนเทศ",
//         img: 'https://www.lannapoly.ac.th/online/Tea_picture/10421.jpg'
//         },
//         {
//         name: 'Mr.Paisan N.Lampang',
//         description: "นางสาวสวิตตา ประทุม <br> ครูเทคโนโลยีสารสนเทศ",
//         img: 'https://www.lannapoly.ac.th/online/Tea_picture/10439.jpg'
//         },
//     ];
//     return(
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-4">
//             {people.map((person) => (
//                 <div className="col-span-1">
//                     <Card
//                         name={person.name}
//                         description={person.description}
//                         img={person.img}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }

// function Card({name, description, img}){
//     return(
//         <div className="flex items-start gap-4">
//             <img
//                 src={img}
//                 alt={name}
//                 className="size-20 rounded-lg object-cover"
//             />
//             <div className="text-start">
//                 <h3 className="text-lg/tight font-medium text-gray-900">{name}</h3>
//                 <p className="mt-0.5 text-gray-700"> {description} </p>
//             </div>
//         </div>
//     );
// }


import React from "react";

function Home() {
  return (
    <section id="home" style={styles.section}>
      <h2>Home</h2>
      <p>
สาขาเทคโนโลยีสารสนเทศ (IT) คือการศึกษาและพัฒนาเทคโนโลยีที่ใช้ในการจัดการข้อมูล ระบบเครือข่าย และซอฟต์แวร์ มีเนื้อหาหลัก ได้แก่:</p>
      <p>การพัฒนาซอฟต์แวร์: เขียนโปรแกรม, พัฒนาเว็บไซต์และแอปพลิเคชัน</p>
      <p>เครือข่ายและการสื่อสาร: ออกแบบและจัดการระบบเครือข่าย</p>
      <p>การบริหารข้อมูล: จัดการฐานข้อมูล, วิเคราะห์ข้อมูล, Big Data</p>
      <p>ความปลอดภัยไซเบอร์: ป้องกันข้อมูลและระบบจากภัยคุกคาม</p>
    </section>
  );

}

const styles = {
  section: {
    padding: "2em",
  },
};

export default Home;
