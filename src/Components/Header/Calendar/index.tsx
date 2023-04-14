// import  React from 'react';
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
// import './styles.css';

// fu


// import { useState, useEffect } from 'react';
// // import { Frame, Header, Button, Body, Day} from './styles'
// import styled, { css } from "styled-components";

//  const Frame = styled.div`
//     width: 400px;
//     border: 1px solid lightgrey;
//     box-shadow: 2px 2px 2px #eee;
// `;

// const Header = styled.div`
//     font-size: 18px;
//     font-weight: bold;
//     padding: 10px 10px 5px 10px;
//     display: flex;
//     justify-content: space-between;
//     background-color: ${props => props.theme.colors["background-dark"]};
// `;
//  const Button = styled.div`
//     cursor: pointer;
// `;


//  const Body = styled.div`
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
// `;

//  interface DayProps{
//     isToday?: boolean;
//     isSelected?: boolean;
// }
//  const Day = styled.div`
//     width: 14.2%;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;

//     ${props =>
//       props.isToday &&
//       css`
//         border: 1px solid #eee;
//       `}

//       ${props => 
//         props.isSelected && 
//         css`
//             background-color: #eee
//     `}
// `;
// export function Calendar() {
//   const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
//   const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

//   const today = new Date();
//   const [date, setDate] = useState(today);
//   const [day, setDay] = useState(date.getDate());
//   const [month, setMonth] = useState(date.getMonth());
//   const [year, setYear] = useState(date.getFullYear());
//   const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

//   useEffect(() => {
//     setDay(date.getDate());
//     setMonth(date.getMonth());
//     setYear(date.getFullYear());
//     setStartDay(getStartDayOfMonth(date));
//   }, [date]);

//   function getStartDayOfMonth(date: Date) {
//     const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//     return startDate === 0 ? 7 : startDate;
//   }

//   function isLeapYear(year: number) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//   }

//   const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

//   return (
//     <Frame>
//       <Header>
//         <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
//         <div>
//           {MONTHS[month]} {year}
//         </div>
//         <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
//       </Header>
//       <Body>
//         {DAYS_OF_THE_WEEK.map((d) => (
//           <Day key={d}>
//             <strong>{d}</strong>
//           </Day>
//         ))}
//         {Array(days[month] + (startDay - 1))
//           .fill(null)
//           .map((_, index) => {
//             const d = index - (startDay - 2);
//             return (
//               <Day
//                 key={index}
//                 isToday={d === today.getDate()}
//                 isSelected={d === day}
//                 onClick={() => setDate(new Date(year, month, d))}
//               >
//                 {d > 0 ? d : ''}
//               </Day>
//             );
//           })}
//       </Body>
//     </Frame>
//   );
// }
