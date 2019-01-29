const baseHost = process.env.apiDomain;
export const securityUrls = {
  login: `${baseHost}seguridad/autenticacion`,
};

export const userUrls = {
  list: `${baseHost}login`,
};
