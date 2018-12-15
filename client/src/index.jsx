import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      term: ''
    }
  this.search = this.search.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    this.setState({term: term});
    // axios.post('/repos', {
    //   term
    // })
    // .then(function(response) {
    //   this.state.repos.push(response);
    //   console.log("THIS.STATE.REPOS", this.state.repos);
    // })
    // .catch(function(error) {
    //   alert("AXIOS ERROR");
    // });

    $.post("/repos",{ data: {owner: term}}, (data) => {
      alert("success");
      console.log("JACK ALKSDASD", data);
      // console.log(this);
      this.setState({
        repos: JSON.parse(data)
      })
      
    })
    .always(function() {
      console.log("test done =================================");
      // $.get("/repos", (data) => {
      //   this.setState({
      //       repos: data
      //       })
      //   alert("Data loaded: ", data);
      // })
      // .fail(function(){
      //   alert("search error");
      // })
    })
    .fail(function() {
      alert("error");
    })
    // var settings = {
    //   data: {owner: term}
    // }
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));