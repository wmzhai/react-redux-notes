import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL='http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password} )
      .then( response => {
        // 如果返回正常
        // - 更新状态，显示用户是authenticated
        dispatch({type: AUTH_USER});
        
        // - 保存 JWT token，(到哪里？)

        // - 重定向到路径 '/feature'
        browserHistory.push('/feature');
      })
      .catch(()=>{
        // 如果返回不正常
        // - 显示错误信息

      });
  };
}