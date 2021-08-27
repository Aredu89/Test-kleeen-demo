import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function WidgetRkFNdXz9O2GbEyjQpwnHqQ({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://m.media-amazon.com/images/I/51FPEBBs0HL.jpg" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(WidgetRkFNdXz9O2GbEyjQpwnHqQ);
