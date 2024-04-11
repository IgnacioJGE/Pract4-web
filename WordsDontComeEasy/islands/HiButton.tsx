import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const HiButton: FunctionComponent<
  { type?: string; children?: any }
> = (
  { type, children },
) => {
  return (
    <button
      class="trippyBackgroundAnimated"
      type={type}
    >
      {children}
    </button>
  );
};

export default HiButton;
