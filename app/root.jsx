import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
/* import { useCatch } from "@remix-run/dev"; */
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Index from "~/routes/index";
import Footer from "~/components/footer";

export function meta() {
  return [
    {
      charset: "utf-8",
      title: "Guitar LA - Remix",
      viewport: "width=device-width,initial-scale=1",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function app() {
  return (
    <Document>
      <Outlet>
        <Index />
      </Outlet>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/** Handling errors **/
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <h1 className="error-title">Oops theres no guitars like that</h1>
        <p className="error">Status: {error.status}</p>
        <p className="error">{error.data.message}</p>
        <Link className="error-link" to="/">You may want to visit the homoepage</Link>
      </Document>
    );
  }
}
