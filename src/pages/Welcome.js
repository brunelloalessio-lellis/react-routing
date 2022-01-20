import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome page</h1>
      <Route path="/welcome/new-user">
        <h3>Hello new user!</h3>
      </Route>
    </section>
  );
};

export default Welcome;
