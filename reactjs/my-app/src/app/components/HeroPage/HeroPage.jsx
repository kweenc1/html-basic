import './HeroPage.css';
import Button from '../Button';

export const HeroPage = () => {
    return(
       <main className='heropage'>
         <h1>Get Premium free for 1 month</h1>
         <h4>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</h4>
         
         <div className='btn'>
         <button className="btnblack">GET STARTED</button>
         
         <button className="btnoutline">SEE OTHER PLANS</button>
         </div>
        <br />
         <p className='conditions'><a href="#/Conditions" className='link'>Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
       </main>

    )
        
    }
