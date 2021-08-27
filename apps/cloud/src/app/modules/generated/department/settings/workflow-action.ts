import { AddDialog } from '@kleeen/react/atomic-elements';

export const workflowAction = [
  {
    addModalAttributes: [
      {
        id: 189473,
        name: 'bookStoreDepartment',
        label: 'Book Store Department',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'bookStoreDepartment',
        params: {
          baseModel: 'bookStoreDepartment',
          value: { formatType: 'prime', transformation: 'selfSingle', format: { examples: ['Sales'] } },
        },
      },
      {
        id: 189475,
        name: 'manager',
        label: 'Manager',
        hasMany: false,
        elements: { displayComponent: 'Label', inputComponent: 'FieldTextAutoComplete' },
        rawEntityName: 'manager',
        params: {
          baseModel: 'manager',
          value: { formatType: 'full_name', transformation: 'selfSingle', format: {} },
        },
      },
    ],
    areYouSure: false,
    component: AddDialog,
    description: undefined,
    displayName: `Add`,
    name: `add`,
    type: `add`,
  },
  {
    areYouSure: false,
    component: undefined,
    description: undefined,
    displayName: `Delete`,
    name: `_delete_`,
    type: `delete`,
  },
];
