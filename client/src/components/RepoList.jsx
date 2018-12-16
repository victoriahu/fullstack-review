import React from 'react';
// {props.repos.map(repo => {
//   return (
//     <div>{repo}</div>
//   )
// })}
const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>{props.repos.map(repo => {
      return (
        <div><a href={String(repo.html_url)}>{repo.html_url}</a></div>
      )
    })}</div>
  </div>
)

export default RepoList;