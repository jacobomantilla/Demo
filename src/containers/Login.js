import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Login = () =>{
  return(
    <Authenticator>
       {({signOut}) =>(
          <div>
            <h1>
              Hello,welcome to profile page.
            </h1>
            <h3>you're Authenticated,this is your profile page</h3>
            <button onClick={signOut}>sign out</button>
          </div>
       )}
    </Authenticator>
  );
};
export default Login;