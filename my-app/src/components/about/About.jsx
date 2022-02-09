import React, {useContext} from 'react';
import { ThemeContext } from '../../context';
import "./about.css"



const About = () => {
    
    const theme = useContext(ThemeContext);
    const darkMode =theme.state.darkMode;

  return <div className='a'>
      <div className="a-left">
          <div style={{backgroundColor: darkMode && "white"}} className="a-card bg" ></div>
          <div className="a-card">
              <img src='https://images.pexels.com/photos/3585042/pexels-photo-3585042.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt='' className='a-img'/>
          </div>
      </div>
      <div className="a-right">
          <h1 className='a-title'>About Me</h1>
          <p className='a-sub'>it is ajdhdh loakllailfjkl jjf iieeieniididijdalkflaskhd jkaskaklfaf.</p>
          <p className='a-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cupiditate accusamus impedit et quas deleniti tempore consequatur nisi nobis labore dignissimos perferendis suscipit, iste libero ex vero velit culpa facere?</p>
          <div className='a-award'>
              <img src='' alt='' className='a-award-img' />
          </div>
      </div>
  </div>;
};

export default About;
