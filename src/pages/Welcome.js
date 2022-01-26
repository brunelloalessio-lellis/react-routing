import { Link, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Link to="new-user"> New user </Link>
      <Routes>
        <Route path="new-user" element={<h3>Hello new user!</h3>} />
      </Routes>
    </section>
  );
};

export default Welcome;
