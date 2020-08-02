import React from 'react';
import './App.css';
import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";

function App(){
  return(
    <main>
      <h1> 
        Greetings, Nayab! 
      </h1>
      <h2>
        Today is... (date)
      </h2>
      <Weather/>
      <section>
        <div>
          <h3>headlines</h3>
          <News/>
        </div>
        <div>
          <h3>Today's Agenda</h3>
          <ToDo/>
        </div>
      </section>
    </main>
  );
}

export default App;
