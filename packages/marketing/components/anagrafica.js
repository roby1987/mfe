import { useEffect, useState } from "react";
import axios from "axios";

function anagrafica(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authStr =
    "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cG4iOiJBUkRBTlRFUkBwb3N0ZWl0YWxpYW5lLml0IiwiTWF0cmljb2xhIjoiMDA0ODg0MDciLCJBY2NvdW50UG9zdGVJdCI6IlJPQkVSVEEuQVJEQU5URSIsIlRlbmFudCI6IkRpZ2l0YWxIUiIsIm5iZiI6MTY2MzYwMzcwMywiZXhwIjoxNjYzNjMyNTAzLCJpYXQiOjE2NjM2MDM3MDMsImlzcyI6IkRpZ2l0YWxIUiIsImF1ZCI6IkRpZ2l0YWxIUiJ9.NLjEoaLbgL6CtPONhS_fgfGD2EU2_0SYuWWE2QcaDQY";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cG4iOiJBUkRBTlRFUkBwb3N0ZWl0YWxpYW5lLml0IiwiTWF0cmljb2xhIjoiMDA0ODg0MDciLCJBY2NvdW50UG9zdGVJdCI6IlJPQkVSVEEuQVJEQU5URSIsIlRlbmFudCI6IkRpZ2l0YWxIUiIsIm5iZiI6MTY2MzY1NjYzMiwiZXhwIjoxNjYzNjg1NDMyLCJpYXQiOjE2NjM2NTY2MzIsImlzcyI6IkRpZ2l0YWxIUiIsImF1ZCI6IkRpZ2l0YWxIUiJ9.SaA3pGrlgfwzK6kU6_P2rBSQ2Whnrd6963UPEmbr03Y"
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default anagrafica;
// const Anagrafica = (props) => {

//   return (

//     <div>

//       <h1>{props.nome}</h1>

//     </div>

//   );

// };

// export {Anagrafica};

// const [isLoaded, setIsLoaded] = useState(false);

// // Nota: l'array deps vuoto [] significa
// // questo useEffect verrà eseguito una volta
// // simile a componentDidMount()
// useEffect(() => {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cG4iOiJBUkRBTlRFUkBwb3N0ZWl0YWxpYW5lLml0IiwiTWF0cmljb2xhIjoiMDA0ODg0MDciLCJBY2NvdW50UG9zdGVJdCI6IlJPQkVSVEEuQVJEQU5URSIsIlRlbmFudCI6IkRpZ2l0YWxIUiIsIm5iZiI6MTY2MzY1NjYzMiwiZXhwIjoxNjYzNjg1NDMyLCJpYXQiOjE2NjM2NTY2MzIsImlzcyI6IkRpZ2l0YWxIUiIsImF1ZCI6IkRpZ2l0YWxIUiJ9.SaA3pGrlgfwzK6kU6_P2rBSQ2Whnrd6963UPEmbr03Y";
//   const apiURL =
//     "https://digitalhr.poste.it/anagrafiche/dipendenti?matricola=00455875";
//   fetch(apiURL, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   .then(response => response.json())
//   .then(data => setTotalReactPackages(data.total));
// }, []);

// import React from "react";
// import "./App.css";
// import { stockData } from "./data";

// export const Anagrafica = () => {
//   return (
//     <>
//       <div>
//         {stockData.map((data, key) => {
//           return (
//             <div key={key}>
//               {data.company +
//                 " , " +
//                 data.ticker +
//                 " ," +
//                 data.stockPrice +
//                 ", " +
//                 data.timeElapsed}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
