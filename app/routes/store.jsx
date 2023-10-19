import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server.js";
import Guitar from "~/components/guitar";


export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}
function Store() {
  const guitarrs = useLoaderData();

  return (
    <main className="conteiner">
      <h2 className="heading"> Our Collection! </h2>
      
      {guitarrs?.lenght && (
        <div className="guitars-grid">
          {guitarrs.map( guitar => (
            <Guitar
              key={guitar?.id} 
              guitar={guitar?.attibutes}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Store;
