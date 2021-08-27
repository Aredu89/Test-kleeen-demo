import { CustomWidgetContainerProps, CustomWidgetProps } from '@kleeen/types';
import React, { ReactElement } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxHeight: 'calc(var(--wh-L) - var(--pm-L))',
    width: '95%',
    marginLeft: 'var(--pm-2XL)',
  },
  divContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 'var(--wh-S)',
  },
});

export function CustomWidgetContainer({ widget, ...props }: CustomWidgetContainerProps): ReactElement {
  const classes = useStyles();
  const CustomWidget = widget.component;
  const customWidgetProps: CustomWidgetProps = {
    ...props,
    className: classes.divContainer,
    key: widget.id,
    title: widget.title,
    widget,
  };

  return <CustomWidget {...customWidgetProps} />;
}

export default CustomWidgetContainer;
