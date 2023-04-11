import DeclarativeIcon from "../../assets/images/icon1.png";
import ComponentIcon from "../../assets/images/icon2.png";
import { Card } from "../Card";

export function ContentSection() {
  return (
    <div>
      <Card
        cardTitle="Declarative"
        content="React makes it painless to create interactive UIs."
        img={DeclarativeIcon}
      />
      <Card
        cardTitle="Components"
        content="Build encapsulated components that manage their state."
        img={ComponentIcon}
      />
      <Card />
      <Card />
    </div>
  );
}
