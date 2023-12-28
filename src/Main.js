import React from "react";
import { data } from "./data";
import Application from "./Card";

export default function Main() {
  console.log(data);
  return (
    <main className="row">
      {data.map((app) => {
        return <Application app={app} />;
      })}
    </main>
  );
}
