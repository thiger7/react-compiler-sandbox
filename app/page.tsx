"use client";

import { ChangeEventHandler, useState } from "react";
import { NameView } from "./NameView";
import { AgeView } from "./AgeView";
import style from "./page.module.css";

export default function App() {
  const [name, setName] = useState("テスト太郎");
  const [age, setAge] = useState(30);

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAge(Number(e.target.value));
  };

  return (
    <main className={style.main}>
      <label>
        name <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <label>
        age <input type="number" value={age} onChange={handleChangeAge} />
      </label>

      <hr />

      <NameView name={name} />
      <AgeView age={age} />
    </main>
  );
}
