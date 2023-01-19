import React from "react";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import data from "./data";

function App() {
  const cardsEl = data.map((cardData) => {
    return <Card key={cardData.id} item={cardData} />;
  });
  return (
    <>
      <Header />
      {cardsEl}
    </>
  );
}

export default App;
