import React from 'react'

class Contest extends React.Component{
  // constructor(){
  //
  // }
  manageForm = (e) => {
    console.log(e.target);
    // const name = e.target.name, surname = e.target.surname, email = e.target.email, slogan = e.target.slogan
    console.log(fetch("http://localhost:3000/contest/slogan", {
      method: 'POST', mode: 'cors'
    }));
  }
  render(){

    return(
      <>
      <h1>Would you like to participate to the construction of the slogan for the tour bike this year ?</h1>
      <p>Just add your name, surname, email adress so that we can contact you if needed to announce that your slogan has been selected for example !!</p>
      <p>No add, no servey will be targetted to the email adress you fill here</p>
      <hr className="mb-5"/>
      <form onSubmit={this.manageForm} method="post">
        <div className="form-group">
          <label htmlFor="name">Enter your name</label>
          <input name="name" type="text" className="form-control" placeholder="Aazer"/>
        </div>
        <div className="form-group">
          <label htmlFor="surname">Enter your surname</label>
          <input name="surname" type="text" className="form-control" placeholder="Christopher"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter your @email</label>
          <input name="email" type="email" className="form-control" placeholder="aazer.christophe@myemail.com"/>
        </div>
        <hr/>
        <div className="form-group">
          <label htmlFor="slogan">Enter the slogan you want to propose: </label>
          <textarea className='form-control' name="slogan" id="" cols="100" rows="10"></textarea>
        </div>
        <hr/>
        <input type="submit"/>
      </form>
      </>
    )
  }
}
export default Contest
