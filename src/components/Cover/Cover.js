import React from 'react';
import { Link } from 'react-scroll';

const Cover=()=>{
    return (
        <div className='tc pv7' id='cover'>
            <h1 className='f1 white'>Hello, I'm Akram Ansari<br/>
            I am a Web Developer</h1>
            <Link 
                className="btn btn-dark btn-lg mt-3" 
                to="about"
                smooth={true}
                duration={800}>
                    Know More
            </Link>
        </div>
    );

}

export default Cover;