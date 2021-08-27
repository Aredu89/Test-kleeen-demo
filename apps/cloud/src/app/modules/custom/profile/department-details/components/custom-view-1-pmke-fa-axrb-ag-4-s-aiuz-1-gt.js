import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function CustomView1PmkeFaAxrbAg4SAiuz1Gt({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://jasonchinftw.files.wordpress.com/2011/11/stormtroopers-in-love-reading-in-the-fiction-section.png" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(CustomView1PmkeFaAxrbAg4SAiuz1Gt);
