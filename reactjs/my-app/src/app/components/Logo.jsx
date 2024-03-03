import SpotifyWhiteLogo from '../assets/images/sportifywhitelogo.png'


export function Logo() {
    return (
                    <a href='#/dashboard'>
                        <img src={SpotifyWhiteLogo} />
                    </a>
                )
    }
    // export function Logo(props) {
    //     return (
    //                     <a href='#/dashboard'>
    //                         <img src={SpotifyWhiteLogo} />
    //                     </a>
    //                 )
    //     }
//     if (props.useWhite) {


//         return (
//             <a href='#/dashboard'>
//                 <img src={SpotifyWhiteLogo} />
//             </a>
//         )
//     } else {
//         return (
//             <a href='#/dashboard'>
//                 <img src={SpotifyBlackLogo} />
//             </a>
//         )
//     }
// }