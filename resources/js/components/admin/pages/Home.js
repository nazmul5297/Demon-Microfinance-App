import React, { Component } from 'react'
import './ho.css'
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <>

                <Header />
            </>



        )
    }
}


// function Home() {
//   return (
//     <div className='home'>
//       <h1>Home</h1>
//     </div>
//   );
// }

export default Home;