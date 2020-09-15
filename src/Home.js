import React from 'react'
import Jumbotron from './components/Jumbotron'
import Decounter from './components/Decounter'

function HomeBasicInfos(){
  return(
    <section>
      <p>Hurry up guy !</p>
      <p>The Boulder Bike Tour will start soon, and you have to subscribe now !</p>
      <p>Here's a little description of this competition. You'll be seduced (trust me &lt;3) and just subscribe without thinking ^^:</p>
      <article>
        ...description...
      </article>
    </section>
  )
}

export default class Home extends React.Component{
  render(){
    return (
        <Jumbotron data={[<Decounter />,<hr />, <HomeBasicInfos />]} />
    )
  }
}
