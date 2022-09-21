import React from "react";
import Button from "../components/Button";
import anagrafica from "../components/anagrafica";

function App() {
  const apiURL =
    "https://digitalhr.poste.it/anagrafiche/dipendenti?matricola=00488407";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cG4iOiJBUkRBTlRFUkBwb3N0ZWl0YWxpYW5lLml0IiwiTWF0cmljb2xhIjoiMDA0ODg0MDciLCJBY2NvdW50UG9zdGVJdCI6IlJPQkVSVEEuQVJEQU5URSIsIlRlbmFudCI6IkRpZ2l0YWxIUiIsIm5iZiI6MTY2MzYwMzcwMywiZXhwIjoxNjYzNjMyNTAzLCJpYXQiOjE2NjM2MDM3MDMsImlzcyI6IkRpZ2l0YWxIUiIsImF1ZCI6IkRpZ2l0YWxIUiJ9.NLjEoaLbgL6CtPONhS_fgfGD2EU2_0SYuWWE2QcaDQY";

  const { data, loading, error } = anagrafica(apiURL);
  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);
  
  return (
     <div className="App">
         <h1>Hello from microfrontend 2</h1>
      <h3>        
        Impiegato:
        {data &&
          data.map((d) => (
            <div>
              <li>Nome: {d.nome}</li>
              <li>Cognome: {d.cognome}</li>
            </div>
          ))}
      </h3>
    </div>
  );
}

export default App;
