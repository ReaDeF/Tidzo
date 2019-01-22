// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
// #endregion
// #region components
import AutoComplete from 'antd/lib/auto-complete';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
// #endregion

const { Option, OptGroup } = AutoComplete;

const dataSource = [
  {
    title: 'Module User',
    children: [
      {
        title: 'List User',
        count: 10000,
      }, {
        title: 'Use Detail',
        count: 10600,
      },
    ],
  },
  {
    title: 'Module Branch',
    children: [
      {
        title: 'Branch List',
        count: 60100,
      }, {
        title: 'Branch Detail',
        count: 30010,
      },
    ],
  },
];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        {'subTitle'}
      </a>
    </span>
  );
}

const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-count">{opt.count}</span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'footer'}
    </a>
  </Option>,
]);

/**
 * @file components/presentational/Search/index.js
 * @module components/presentational/Search
 * @desc This is the stateless functional component for Search.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Search component
 * @example
 * <Search />
 */
const NavMenu = () => (
  <AutoComplete
    className="certain-category-search"
    dropdownClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={false}
    dropdownStyle={{ width: 300 }}
    size="large"
    style={{ width: '70%' }}
    dataSource={options}
    placeholder="input here"
    optionLabelProp="value"
  >
    <Input suffix={<Icon type="search" className="certain-category-icon" />} />
  </AutoComplete>
);

/**
 * @name NavMenu PropTypes
 * @memberof components/presentational/Search
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
NavMenu.propTypes = {
  // items: PropTypes.array.isRequired,
};

export default NavMenu;
