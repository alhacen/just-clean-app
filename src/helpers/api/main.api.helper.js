import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

const API_TOKENS = 'API_TOKENS';
const API_BASE_URL = 'http://localhost:8000/';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

const REFRESH_ACCESS_TOKEN = 'auth/token/refresh/';

const signInAgainNotification = () => {};
const errorGettingUserInfoNotification = () => {};

export const loadOpenUrl = async (url, config = {}) => {
  return new Promise((resolve, reject) => {
    axios(url, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response));
  });
};

const getAccessToken = () => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const data = reactLocalStorage.getObject(API_TOKENS);

    if (!data) return reject('No User found');

    let accessToken = '';
    const expires = new Date(data.expires * 1000);
    const currentTime = new Date();

    if (expires > currentTime) {
      accessToken = data.tokens.access;
    } else {
      try {
        const newToken = await loadOpenUrl(REFRESH_ACCESS_TOKEN, {
          method: 'post',
          data: {
            refresh: data.tokens.refresh,
          },
        });
        accessToken = newToken.access;

        reactLocalStorage.setObject(API_TOKENS, {
          tokens: {
            ...data.tokens,
            access: accessToken,
          },
          expires: newToken.expires,
        });
      } catch (e) {
        try {
          if (e.data.code === 'token_not_valid') signInAgainNotification();
          else errorGettingUserInfoNotification();
        } catch (er) {
          // pass
        }

        return reject('Error refreshing token');
      }
    }

    return resolve(accessToken);
  });
};

export const loadSecureUrl = (url, config = {}) => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const data = await loadOpenUrl(url, {
        ...config,
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      });
      return resolve(data);
    } catch (e) {
      return reject(e);
    }
  });
};


export const signInWithOtp = (username, otp) => loadOpenUrl('/auth/sign-in/otp/', {
  method: 'POST',
  data: {
    username,
    otp
  }
});

export const signInWithPassword = (username, password) => loadOpenUrl('/auth/sign-in/password/', {
  method: 'POST',
  data: {
    username,
    password
  }
});

export const userMeta = () => loadSecureUrl('/auth/meta/');
