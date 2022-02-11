import {useDispatch, useSelector} from 'react-redux';
import { actions } from '../store/actions';
import { useState } from 'react';

export function Account() {
    const dispatch = useDispatch();
    const [showPassword,setShowPassword] = useState(false);

    function register(e)  {
        e.preventDefault();
        const user = {
            email: e.target['email'].value,
            password: e.target['password'].value,
            name: { given: e.target['given'].value, family: e.target['family'].value },
            phone: e.target['phone'].value,
            credit_card: {
                 number: e.target['number'].value,
                expiration: e.target['expiration'].value
                }
            };
            dispatch(actions.register(user)); 
    }

    function showPasswordButton(e) {
        e.preventDefault();
        if(showPassword) {
          setShowPassword(false)
        } else {
          setShowPassword(true);
        }
      }

   
    console.log("Account");
    return (<section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
            <h1 className="mdl-card__title-text">Register</h1>
        </div>
        <div className="mdl-card__supporting-text">
            <form onSubmit={register}>
                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input id="email" className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="email">Email</label>
                    </div>
                </div>

                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
                        <input id="password" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="password">Password</label>
                        <button style={styles.showPasswordButton} className="mdl-button mdl-button--colored" onClick={showPasswordButton}>{showPassword?"hide":"show"}</button>
                    </div>
                </div>

                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
                        <input id="password2" type={showPassword ? "text" : "password"} className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="password2">Password (again)</label>
                        <button style={styles.showPasswordButton} className="mdl-button mdl-button--colored" onClick={showPasswordButton}>{showPassword?"hide":"show"}</button>
                    </div>
                </div>

                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input id="given" className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="given">First name (given name)</label>
                    </div>
                </div>

                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input id="family" className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="family">Last name (family name)</label>
                    </div>
                </div>

                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input id="phone" className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
                    </div>
                </div>

                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input id="number" className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="number">Credit card</label>
                    </div>
                </div>

                <div style={styles.inputDivs}>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input id="expiration" type="date" className="mdl-textfield__input" />
                        <label className="mdl-textfield__label" htmlFor="expiration">Expiration</label>
                    </div>
                </div>

                <input type='submit' value='Save' className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />
            </form>
        </div>
    </section>);
}

const styles ={
    showPasswordButton: {
        display: "contents",
        height:"20px",
        padding:"5px",
        fontSize:"12px"
    
      }
};