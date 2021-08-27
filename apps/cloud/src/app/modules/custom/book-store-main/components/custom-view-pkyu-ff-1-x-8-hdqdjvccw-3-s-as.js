import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function CustomViewPkyuFf1X8Hdqdjvccw3SAs({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://chimesnewspaper.com/wp-content/uploads/2011/10/IMG_9359.jpg" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(CustomViewPkyuFf1X8Hdqdjvccw3SAs);
