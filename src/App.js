import "./App.css";
import Heading from "./components/heading";
import NavBar from "./components/navBar";
import SignInBlock from "./components/SignInBlock";

export default function App() {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          margin: "0 35px",
        }}
      >
        <Heading />
        <SignInBlock />
      </div>
    </>
  );
}
