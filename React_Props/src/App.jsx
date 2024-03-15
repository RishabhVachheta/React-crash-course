import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductItems(){
  return (
  <>
    <h1>Child</h1>
  </>
  )
}

function App() {
  let HeaderInfo = {
    name: "Rishabh",
    phone: "83647826876",
  };

  return (
    <>
      <div className="main">
        <Header HeaderInfo={HeaderInfo}>
          <h1>Welcome to Header Section</h1>
        </Header>
        <div className="container-fluid">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        {/* <Container>
          <Row></Row>
        </Container> */}
        <ProductItems></ProductItems>
      </div>
    </>
  );
}

export default App;


