import React from 'react'
import SearchGithub from './SearchGithub'

// Main component has history as a prop because it is being controller by the router
const Main = ({ children, history }) => (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
     <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
       <SearchGithub history={history}/>
     </div>
    </nav>
    <div className="container">
      {/* child components rendered here */}
      {children}
    </div>
  </div>
)

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
}

export default Main
