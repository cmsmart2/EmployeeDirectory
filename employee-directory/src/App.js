import React from "react";
import Directory from "./pages/directory";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Directory/>
      </Container>
      <Footer />

    </div>
  );
}

export default App;