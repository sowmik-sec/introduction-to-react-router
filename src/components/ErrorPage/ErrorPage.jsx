import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h2>Ooopps</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
