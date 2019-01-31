/**
 * @name mainNavItems
 * @memberof common/constant/mainNavItems
 * @type {Object}
 * @return {Object} List of items object with label, to, exact and icon properties
 */
const base = '/';
const admin = '/administration';
const user = '/user';
export default [
  {
    id: 1,
    label: 'Inicio',
    to: `${base}`,
    icon: 'home',
  },
  {
    id: 2,
    label: 'Administración',
    to: `${admin}`,
    icon: 'audit',
    items: [
      {
        id: 1,
        label: 'User',
        to: `${user}/list`,
        icon: 'user',
      },
    ],
  },
];
