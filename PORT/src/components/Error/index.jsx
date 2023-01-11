import ErrorLogo from '../../assets/404.svg'

function Error() {
    return (
       <div>
          <h1>Oops 🙈 This page doesn't exist</h1>
          <img src={ErrorLogo} alt='404 error'/>
       </div>
    )
 }
 
 export default Error