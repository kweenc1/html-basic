import './HeroPage.css';
import Button from '../Button';

export const HeroPage = () => {
    return(
       <main className='heropage'>
         <h1>Get Premium free for 1 month</h1>
         <h3>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</h3>
         
         <div>
         <Button className="btnblack">Click me</Button>
         <Button className="btnoutline">Click me</Button>
         </div>

         <p><a href="#/Conditions">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
       </main>

    )
        
    }
