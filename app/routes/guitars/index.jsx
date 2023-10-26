import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server.js";
import GuitarList from "~/components/guitarList";
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
      <GuitarList guitars={guitars} />
  );
}

export default Store;
