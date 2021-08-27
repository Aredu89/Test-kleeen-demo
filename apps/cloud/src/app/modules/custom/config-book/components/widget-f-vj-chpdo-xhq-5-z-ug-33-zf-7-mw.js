import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';

function WidgetFVjChpdoXhq5ZUg33Zf7Mw({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <div>
        <p>
          Open the code for <strong>Book</strong>'s Widget at
        </p>
        <cite style={{ color: 'var(--secondary-color)', overflowWrap: 'break-word' }}>
          apps/cloud/src/app/modules/custom/config-book/components/widget-f-vj-chpdo-xhq-5-z-ug-33-zf-7-mw.js
        </cite>
        <p>Update the content and save the file to see your changes.</p>
      </div>
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(WidgetFVjChpdoXhq5ZUg33Zf7Mw);
