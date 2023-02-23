import image1 from '../images/icon1.png';
import image2 from '../images/icon2.png';
import image3 from '../images/icon3.png';
import image4 from '../images/icon4.png';

const Snippets = () => {

    return (
        <div className='snippet-container'>
          <div className='declarative'> <img src= {image1} /> <h3>React makes it painless to create interactive UI's.</h3></div>
          <div className='components'> <img src= {image2} /><h3>Build encapsulated components that manage their state.</h3></div>
          <div className='single-way'> <img src= {image3} /> <h3>A set of inmutable values are pass to each component.</h3></div>
          <div className='jsx'> <img src= {image4} /><h3>Statically-typed design to run on modern browsers .</h3></div>

        </div>
    )
}

export default Snippets;