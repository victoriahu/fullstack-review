import React from 'react';
import $ from "jquery";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    console.log(this.state.term);
    this.setState({
      term: e.target.value
    });
    //ajax post request to /repos
    //jquery in react??? not the same as fetch?
    $.post("/repos", function(data) {
      alert("success");
    })
    .done(function() {
      alert("test done");
    })
    .fail(function() {
      alert("error");
    })
  }

  search() {
    this.props.onSearch(this.state.term);
    //clear search after

  }
//this.props ???
//wtf is onSearch. must be like onClick, onSubmit. except all it does is console.log, apparently. 


//terms??
  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;