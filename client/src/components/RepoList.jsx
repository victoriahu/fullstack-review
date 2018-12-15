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
    <div>{props.repos}</div>
  </div>
)

export default RepoList;