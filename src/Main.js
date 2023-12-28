import React from "react";
import { data } from "./data";
import Application from "./Application";

export default function Main() {
  console.log(data);
  return (
    <main>
      {data.map((app) => {
        return <Application app={app} />;
      })}
    </main>
  );
}
