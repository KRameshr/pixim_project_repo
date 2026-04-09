// import React from "react";
// import PhotoContextProvider from "./context/PhotoContext";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
// import Search from "./components/Search";
// import NotFound from "./components/NotFound";
// import "./App.css";

// function App() {
//   function handleSubmit(e, history, searchInput) {
//     e.preventDefault();
//     e.currentTarget.reset();
//     let url = `/search/${searchInput}`;
//     history.push(url);
//   }

//   return (
//     <PhotoContextProvider>
//       <Router>
//         <div className="container">
//           <Route
//             render={(props) => (
//               <Header handleSubmit={handleSubmit} history={props.history} />
//             )}
//           />
//           <Switch>
//             <Route
//               path="/search/:searchInput"
//               render={(props) => (
//                 <Search searchTerm={props.match.params.searchInput} />
//               )}
//             />
//             <Route component={NotFound} />
//           </Switch>
//         </div>
//       </Router>
//     </PhotoContextProvider>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PhotoContextProvider from "./context/PhotoContext";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  function handleSubmit(e, history, searchInput) {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  return (
    <PhotoContextProvider>
      <Router>
        <Navbar />
        <div className="container my-4">
          <Route
            render={(props) => (
              <Header handleSubmit={handleSubmit} history={props.history} />
            )}
          />
          <Switch>
            {/* Default home page with nature images */}
            <Route exact path="/" render={() => <Search searchTerm="" />} />

            {/* Search results */}
            <Route
              path="/search/:searchInput"
              render={(props) => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
            />

            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </PhotoContextProvider>
  );
}

export default App;
