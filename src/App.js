import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Social Golf World</h1>} />
          <Route exact path="/about us" render={() => <h1>About us</h1>} />
          <Route exact path="/contact us" render={() => <h1>Contact us</h1>} />
          <Route exact path="/settings" render={() => <h1>Settings</h1>} />
          <Route exact path="/sign in" render={() => <h1>Sign in</h1>} />
          <Route exact path="/sign up" render={() => <h1>Sign up</h1>} />
          <Route render={() => <p>Page not found!</p>} />
          </Switch>
      </Container>
    </div>
  );
}

export default App;
