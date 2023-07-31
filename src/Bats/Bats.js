
import styles from '../ContactUs/ContactUs.module.css';
import styles2 from './Bats.module.css';

import data from '../Data/data';

const MensHome =({handleCheckout,component})=>{





    return(
        <div>
<body>
<body>
 
        <div className={styles.container}>

          <div className={styles2.right}>
            {data.map((item) => (
                item.type===component &&(
              <div className={styles2.image_container}>
                <img src={item.image} alt="" height="70%" />
                <p1>{item.name}</p1>
                <p2>price:£{item.price}</p2>
                <button onClick={() => handleCheckout(item)} style={{height:"30px"}}>Buy Now</button>
              </div>)
            ))}


          </div>
        </div>
      </body>
</body>
        </div>
    );
}
export default MensHome;