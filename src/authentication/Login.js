import {useDispatch, useSelector} from 'react-redux';
import { actions } from '../store/actions';
import {useState} from 'react'

export function Login() {
  const [showPassword,setShowPassword] = useState(false);
    
    const dispatch = useDispatch();
    function login (e) {
        e.preventDefault();
        console.log()
        dispatch(actions.login(e.target['email'].value, e.target['password'].value));
    }

    function showPasswordButton(e) {
      e.preventDefault();
      if(showPassword) {
        setShowPassword(false)
      } else {
        setShowPassword(true);
      }
    }

    console.log("Login");
    return (<section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
      <h1 className="mdl-card__title-text">Login</h1>
    </div>
    <div className="mdl-card__supporting-text">
      <div>
        <p>First time user? <a href="/account">Register</a></p>
      </div>
      <form onSubmit={login}>
  
        <div style={styles.inputDivs}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
            <input id="email" className="mdl-textfield__input" />
            <label className="mdl-textfield__label" htmlFor="email">Email</label>
          </div>
        </div>
  
        <div style={styles.inputDivs}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
            <input id="password" type={showPassword ? "text" : "password"} className="mdl-textfield__input"  />
            <label className="mdl-textfield__label" htmlFor="password">Password</label>
            <button style={styles.showPasswordButton} className="mdl-button mdl-button--colored" onClick={showPasswordButton}>{showPassword?"hide":"show"}</button>
          </div>
        </div>
  
        <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />
  
      </form>
    </div>
  </section>);
}

const styles = {
  showPasswordButton: {
    display: "contents",
    height:"20px",
    padding:"5px",
    fontSize:"12px"

  }
};