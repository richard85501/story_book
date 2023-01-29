import React from 'react';
import PropTypes from 'prop-types';
import './styles/Select.module.scss';
import { Select as SelectDynamic, Space } from 'antd';

export const Select = ({
  listItems,
  width,
  onChange,
  disabled,
  error,
  placeholder,
  loading,
  idKey,
  caption,
  ...props
}) => {
  Select.propTypes = {
    /**
     * What background color to use
     */
    listItems: PropTypes.array,
    /**
     * width of searchbar
     */
    width: PropTypes.number,
    /**
     * Optional change handler
     */
    onChange: PropTypes.func,
    /**
     * Select disabled
     */
    disabled: PropTypes.bool,
    /**
     * Select error
     */
    error: PropTypes.bool,
    /**
     * Select loading
     */
    loading: PropTypes.bool,
    /**
     * Select placeholder
     */
    placeholder: PropTypes.string,
    /**
     * Select caption
     */
    caption: PropTypes.string,
    /**
     * Select idKey
     */
    idKey: PropTypes.string,
  };

  Select.defaultProps = {
    listItems: [],
    width: 120,
    onChange: null,
    disabled: false,
    error: false,
    placeholder: '請選擇',
    loading: false,
    idKey: 'id',
    caption: 'value',
  };

  const keyModify = () => {
    return listItems.map((o) => {
      return { value: o[idKey], label: o[caption] };
    });
  };

  return (
    <Space wrap>
      <SelectDynamic
        style={{
          width: width,
        }}
        loading={loading}
        onChange={(e) => onChange(e)}
        options={keyModify()}
        disabled={disabled}
        placeholder={placeholder}
        status={error && 'error'}
      />
    </Space>
  );
};
