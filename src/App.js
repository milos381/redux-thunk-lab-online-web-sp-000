import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions';
import CatList from './CatList.js';
class App extends Component {   
  componentDidMount() {
    //second, an initial state
    console.log(this.props)
    //fifth is calling the fetch and getting back the results
    this.props.fetchCats()
  }
  render() {
    //first this, an emptu array as a result of an initial, first render
    //fourth, again empty as a result of 
    //sending our first dispatch({type: 'LOADING_CATS'}), 
    //which happens before the fetch request is executed.
    console.log(this.props.catPics)
    
    return (
      <div className="App">
        <h1>CatBook</h1>
        {<CatList catPics={this.props.catPics} loading={this.props.loading}/>}
      </div>
    );
  }
} 
const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
const dispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect (mapStateToProps, dispatchToProps)(App)
/*
.then(() => { console.log("World!"); })
  .then(() => {
    sleep(2000)
      .then(() => { console.log("Goodbye!"); })
    });    */
