import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function CustomViewBdeJgHgibVurxBxCkfFx2G({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://content.fortune.com/wp-content/uploads/2015/11/screen-shot-2015-11-03-at-7-04-13-am.png" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(CustomViewBdeJgHgibVurxBxCkfFx2G);
