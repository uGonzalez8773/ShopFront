import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server.js";
import Guitar from "~/components/guitar";
import styles from "~/styles/guitars.css"

export function meta(){
  return [{
    title: 'GuitarLA - Guitar Store',
    description: 'GuitarLA - Guitar Collection!'
  }]

}

export function links() {
  return [{
    rel:'stylesheet',
    href: styles
  }];
}

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}
function Store() {
  const guitars = useLoaderData();

  return (
    <main className="conteiner">
      <h2 className="heading"> Our Collection! </h2>

      {!guitars?.lenght && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Store;
