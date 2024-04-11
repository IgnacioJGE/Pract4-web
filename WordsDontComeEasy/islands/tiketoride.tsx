import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Shower from "../components/Shower.tsx";
import HiButton from "../islands/HiButton.tsx";
import { useState } from "preact/hooks";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";

export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext) => {
        const formData = await req.formData(); // Parse form data
        const name = formData.get("nombre");
        const apellido = formData.get("apellido");
        console.log(name, apellido);
        // You might want to do something with the data here
        return ctx.render({ name, apellido });
    },
  };
const Formulariohi: FunctionComponent = () => {
    const name=useSignal("")
    const apellido=useSignal("")
    const [showShower, setShowShower] = useState(false);

    const submitfunciona = (e) => {
        e.preventDefault();
        name.value=(e.target.nombre.value);
        apellido.value=(e.target.apellido.value);
        setShowShower(true); 
      };
    
      return (
        <div className="formBody">
          <form className="formBox" method="Post" action="/hihihi" onSubmit={submitfunciona}>
            <h3>Say hi hi hi</h3>
            <input type="text" name="nombre" value={name} placeholder="Name"  />
            <br />
            <input type="text" name="apellido" value={apellido} placeholder="Last name"  />
            <br />
            <HiButton type="submit"> 
                Hi!
            </HiButton>
          </form>
          {showShower && (
            <div>
            <Shower
              name={name}
              shurname={apellido}
            />

            </div>
          )}

        </div>
      );
    };

export default Formulariohi;
