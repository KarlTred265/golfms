import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ContactUsForm from "./pages/auth/ContactUsForm";
import AboutUsForm from "./pages/auth/AboutUsForm";



function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        <Route exact path="/" render={() => <h1>Golf Home</h1>} />
          <Route exact path="/about us" render={() => <AboutUsForm />} />
          <Route exact path="/contact us" render={() => <ContactUsForm />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
