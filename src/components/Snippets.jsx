import image1 from '../images/icon1.png';
import image2 from '../images/icon2.png';
import image3 from '../images/icon3.png';
import image4 from '../images/icon4.png';

const Snippets = () => {

    return (
        <div className='snippet-container'>
          <div className='declarative'> <img src= {image1} alt='declarative' /> <h3>Declarative</h3> <p>React makes it painless to create interactive UI's.</p></div>
          <div className='components'> <img src= {image2}  alt='components'/><h3>Compoonents</h3><p>Build encapsulated components that manage their state.</p></div>
          <div className='single-way'> <img src= {image3} alt='single' /> <h3>Single-Way</h3><p>A set of inmutable values are pass to each component.</p></div>
          <div className='jsx'> <img src= {image4}  alt='jsx'/><h3>JSX</h3><p>Statically-typed design to run on modern browsers.</p></div>

        </div>
    )
}

export default Snippets;