import { Signal } from "@preact/signals";
import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const Shower: FunctionalComponent<{ name: string,shurname:string }> = ({ name,shurname }) => {
  return (
    <div class="vintage__container">
      <h1 class="vintage vintage__top">{name}</h1>
      <h2 class="vintage vintage__bot">{shurname}</h2>
    </div>
  );
};

export default Shower;
