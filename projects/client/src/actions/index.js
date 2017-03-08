import axios from 'axios';

const ROOT_URL='http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password} );

    // Submit email/password to the server

    // 如果返回正常
    // - 更新状态，显示用户是authenticated
    // - 保存 JWT token，(到哪里？)
    // - 重定向到路径 '/feature'

    // 如果返回不正常
    // - 显示错误信息

  };


}