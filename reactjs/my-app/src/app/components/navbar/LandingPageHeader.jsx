import './LandingPageHeader.css'
import {Logo} from '../Logo'


export const LandingPageHeader = () => {
    return (<header className="header">
        <div className="logo">
            <Logo useWhite={true}/>
        </div>
        
        <div className="menu">
            <ul>
                <li> <a href='#/Premium'>Premium</a>
                </li>
                <li><a href='#/Support'>Support</a>
                </li>
                <li><a href='#/Download'>Download</a>
                </li>
                <li>|</li>
                <li  className='active'><a href='#/SignUp'>Sign Up</a>
                </li>
                <li className='active'><a href='#/Login' >Login</a>
                </li>
            </ul>
        </div>
    </header>)
}

// export class LandingPageHeader extends component {
//     render() {
//         return (<header className="header">
//         <div className="logo">Logo</div>
//         <div className="menu">Menu</div>
//     </header>)
//     }
// }