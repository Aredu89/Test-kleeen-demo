import { useEffect, useState } from 'react';

import { CardSection } from '@kleeen/react/atomic-elements';
import { CardSectionLayout } from '@kleeen/types';
import { InvestigateBar } from './components';
import { InvestigateProps } from './investigate.model';
import { KUIConnect } from '@kleeen/core-react';
import classNames from 'classnames';
import { getSettings } from '../../../generated/components/navigation/navigation.settings';
import { getWidget } from '@kleeen/widgets';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { useStyles } from './investigate.styles';
import { useUrlQueryParams } from '@kleeen/react/hooks';

const bem = 'ks-investigate';
const settings = getSettings(() => {});

function Investigate({ translate }: InvestigateProps) {
  const classes = useStyles();
  const { paramsBasedOnRoute } = useUrlQueryParams();

  const { initialWidget } = paramsBasedOnRoute;
  const [widgets, setWidgets] = useState([]);
  const firstWidget = widgets[widgets.length - 1];

  useEffect(() => {
    const sourceWidget = getWidget(initialWidget);
    const tempWidgets = [];
    // TODO @cafe use getWidgetsByEntity, to get the first widget
    // from the card registry

    if (!isNilOrEmpty(sourceWidget)) {
      tempWidgets.push(sourceWidget);
    }

    setWidgets(tempWidgets);
  }, [initialWidget]);

  return (
    <div className={bem}>
      <InvestigateBar
        logo={settings.logo}
        onClose={onClose}
        title={firstWidget?.title || '[Original Focus]'} // TODO: @cafe add missing i18n here
        translate={translate}
      />
      <div className={classNames(`${bem}__container`, classes.container)}>
        <CardSection
          cardSectionLayout={CardSectionLayout.SingleWideColumn}
          justifyContent="center"
          key="investigation"
          taskName="investigation"
          widgets={widgets}
        />
      </div>
    </div>
  );
}

function onClose() {
  window.close();
}

export default KUIConnect(({ translate }) => ({ translate }))(Investigate);
