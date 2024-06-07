import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <h2>O Aplikacji</h2>
      <p>Aplikacja ta została stworzona na potrzeby zaliczenia przedmiotu IWAI</p>
      <p>Wykorzystuje ona React, Redux i Typescript</p>
      <br />
      <p>Można w niej dodać zadania dzienne i jednorazowe.</p>
      <p>Jednorazowe można tylko usunąć, dzienne dodatkowo odznaczyć.</p>
      <p>O północy zadania dzienne ustawiane są jako niewykonane</p>
      <br />
      <p>Dane przechowywane są w localstorage przeglądarki,</p>
      <p>dzięki czemu każdy unikalny użytkownik ma swoją własną listę zadań</p>
    </div>
  );
};

export default About;
