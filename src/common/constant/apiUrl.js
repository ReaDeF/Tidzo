import Keys from './keys';

const baseHost = process.env.apiDomain;

export const securityUrls = {
  login: `${baseHost}seguridad/autenticacion`,
};

export const userUrls = {
  list: `${baseHost}list`,
  recoverPassword: `${baseHost}recoverpassword/${Keys.userNameKey}`,
};

export const foo = {

};
