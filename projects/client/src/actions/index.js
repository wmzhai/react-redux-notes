import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER, 
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL='http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password} )
      .then( response => {
        // 如果返回正常
        // - 更新状态，显示用户是authenticated
        dispatch({type: AUTH_USER});
        
        // - 保存 JWT token，(到哪里？-> LocalStorage )
        localStorage.setItem('token', response.data.token);

        // - 重定向到路径 '/feature'
        browserHistory.push('/feature');
      })
      .catch(()=>{
        // 如果返回不正常
        // - 显示错误信息
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => dispatch(authError("bad signup")));
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL)
      .then(response => {
        console.log(response);
      });
  }
}

