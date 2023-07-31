
import styles from '../ContactUs/ContactUs.module.css';
import img1 from './Homeimg1.png';
import img2 from './Homeimg2.png';

import './Home.css';
const Home = () =>{
    
    return(
<div>
    <body>
    <div className={styles.container}>
    
    <div className={styles.right}>
    
    <div className='Item'>
        <img src={img1} alt="" width="100%" height="65%"/>
    
    </div>
    <div className='Item'>
        <img src={img2} alt="" width="100%" height="65%"/>
       
    </div>
    </div>
    </div>
    
    </body>

</div>
    );
}
export default Home;