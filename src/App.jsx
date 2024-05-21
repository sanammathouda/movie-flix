import Banner from "./Banner";
import LargeRow from "./LargeRow";
import Nav from "./Nav";
import "./App.css";
import Row from "./Row";
import requests from "./Requests";

function App() {
  return (
    <div className="app">
      {/* nav */}
      <Nav />
      <Banner />
      <LargeRow
        title="Netflix Originals"
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        customStyle="background:white;"
      />
      <Row title="Trending" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomance} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentary} />
    </div>
  );
}

export default App;
