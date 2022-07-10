import logo from './logo.svg';
import './App.css';
import Row from './row';
import requests from './request';
import Banner from './Banner'
import Nav from './Nav';



function App() {
  return (
    <div className="app">
      {/* Nav Bar */}

    <Nav/>
    <Banner/>

     
     <Row title = 'Netflix Originals' 
     fetchUrl ={requests.fetchMovies } 
     isLargeRow = {true} />

     <Row title = 'Trending Now' 
     fetchUrl ={requests.fetchHorrorMovies}/>

     <Row title = 'Top Rated' 
     fetchUrl ={requests.fetchTopRated}/>

     <Row title = 'Action Movies' 
     fetchUrl ={requests.fetchActionMovies}/>

     <Row title = 'Comedy Movies' 
     fetchUrl ={requests.fetchComedyMovies}/>

     <Row title = 'Horror Movies' 
     fetchUrl ={requests.fetchHorrorMovies}/>

     <Row title = 'Romance Movies' 
     fetchUrl ={requests.fetchRomanceMovies}/>

     <Row title = 'Documentary' 
     fetchUrl ={requests.fetchDocumentaries}/>

    </div>

  
  );
}



export default App;
