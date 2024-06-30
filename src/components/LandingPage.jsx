import { Carousel } from 'antd';
import "../css/landingpage.css";



const contentStyle = {
  margin: 0,
  color: 'black',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'transparent',
  height: '100vh',
  alignContent: 'center',

};
const LandingPage = () => (
  <>
    <div className="landingpagebg">
        <Carousel arrows dotPosition="left" infinite={true} autoplay 
            style={{
                width: '100%',
                textAlign: 'center',}}
        >
        <div>
            <h3 style={contentStyle} >1</h3>
        </div>
        </Carousel>
    </div>
  </>
);

export default LandingPage;