import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function Widget4YMPyuRsFDxp16QXndsSn9({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-YqulMZcEfj9wAhJAG3Xy3FCk2fNHBbi3g&usqp=CAU" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Widget4YMPyuRsFDxp16QXndsSn9);
