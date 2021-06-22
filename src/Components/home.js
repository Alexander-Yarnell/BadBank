import React from "react";
import Card from "./Card";
import bankImg from "./bank.png";

function Home() {
  return (
    <div>
    <Card
      bgcolor="white"
      txtcolor="black"
      header="BadBank Landing Page"
      title="Welcome to the Bank"
      text="You can use this bank"
      body={<img src={bankImg} className="img-fluid" alt="Responsive image" />}
    />
    </div>
  );
}

export default Home;
