import React from 'react'

export default class Breadcrumb extends React.Component {
  render () {
    return(
      <>
        <ol className="safe container breadcrumb">
          <li><a href="#">Home</a></li>&nbsp;>&nbsp;
          <li><a href="#">Library</a></li>&nbsp;>&nbsp;
          <li className="active">Data</li>
        </ol>
        {/*
        <nav className="breadcrumb">
            <a className="breadcrumb-item" href="#">Home</a>
            <a className="breadcrumb-item" href="#">Library</a>
            <span className="breadcrumb-item active">Data</span>
        </nav>
        */}
      </>
    )
  }
}
