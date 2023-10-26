import { Outlet } from "@remix-run/react";
import styles from "~/styles/guitars.css"

export function links() {
  return [{
    rel:'stylesheet',
    href: styles
  }];
}
function Store() {
  return (
    <main className="conteiner">
      <Outlet />
    </main>
  );
}

export default Store;
