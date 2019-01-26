import Keys from './keys';

export const securityUrls = {
  login: `${process.env.apiDomain}login`,
};

export const userUrls = {
  list: `${process.env.apiDomain}list`,
  recoverPassword: `${process.env.apiDomain}recoverpassword/${Keys.userNameKey}`,
};

export const foo = {

};
