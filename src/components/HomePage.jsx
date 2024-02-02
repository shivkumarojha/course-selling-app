import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`login`}>Login Page</Link>
      <br />
      <Link to={`signup`}>Sign up</Link>
    </div>
  );
}
