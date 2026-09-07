import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      404 Not Found
      <Link to="/" style={{ display: "block" }}>
        Go back to Home
      </Link>
    </div>
  );
}
