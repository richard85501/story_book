import React from 'react';
import { Select } from './conponents/Select';

export default {
  title: 'Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

const listItems = [
  {
    id: '1',
    value: 'eleanor',
  },
  {
    id: '2',
    value: 'cinnamon',
  },
];

export const Normal = Template.bind({});
Normal.args = {
  width: 190,
  disabled: false,
  error: false,
  placeholder: '選擇人選',
  onChange: (e) => console.log('click', e),
  listItems: listItems,
  caption: 'value',
  idKey: 'id',
};

export const NoneData = Template.bind({});
NoneData.args = {
  width: 190,
  disabled: false,
  error: false,
  placeholder: '請選擇',
  onChange: () => console.log('click'),
};

export const DisabledItem = Template.bind({});
DisabledItem.args = {
  width: 190,
  disabled: false,
  error: false,
  placeholder: '請選擇',
  onChange: () => console.log('click'),
  listItems: [
    {
      id: 'eleanor',
      value: 'eleanor',
    },
    {
      id: 'cinnamon',
      value: 'cinnamon',
      disabled: true,
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  width: 190,
  disabled: true,
  error: false,
  placeholder: '請選擇',
  onChange: () => console.log('click'),
  listItems: listItems,
};

export const Error = Template.bind({});
Error.args = {
  width: 190,
  disabled: false,
  error: true,
  placeholder: '請選擇',
  onChange: () => console.log('click'),
  listItems: listItems,
};

export const Loading = Template.bind({});
Loading.args = {
  width: 190,
  disabled: true,
  error: false,
  placeholder: '請選擇',
  onChange: () => console.log('click'),
  listItems: listItems,
  loading: true,
};
