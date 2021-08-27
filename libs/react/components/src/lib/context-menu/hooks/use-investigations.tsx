import {
  AggregationType,
  DataPointWithFormattedValue,
  KsManagedModulePaths,
  ReactElement,
} from '@kleeen/types';
import {
  ContextMenuClickHandler,
  ContextMenuSectionItem,
  HandleContextMenuClose,
} from '../context-menu.model';
import { LibraryWidget, WidgetScope, entityHasWidgets, getWidgetsByEntity } from '@kleeen/widgets';
import { useEffect, useState } from 'react';

import { DEFAULT_TRANSFORMATION_KEY_TO_USE } from '../utils';
import { Translate } from '@kleeen/core-react';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { isSingleCardinalityTransformation } from '@kleeen/frontend/utils';
import { path } from 'ramda';

// TODO @cafe feature flag to disable feature temporarily
const ENABLE_INVESTIGATION = false;

export function useInvestigations({
  dataPointsToShow,
  handleClose,
  widgetId,
}: {
  dataPointsToShow: DataPointWithFormattedValue[];
  handleClose: HandleContextMenuClose;
  widgetId?: string;
}): ContextMenuSectionItem[] {
  const [investigationSections, setInvestigationSections] = useState<ContextMenuSectionItem[]>([]);

  useEffect(() => {
    if (isNilOrEmpty(dataPointsToShow) || !ENABLE_INVESTIGATION) {
      return;
    }

    const tempInvestigationSections = dataPointsToShow.reduce((acc: ContextMenuSectionItem[], dataPoint) => {
      const investigationItems = getInvestigationItems(dataPoint);

      if (isNilOrEmpty(investigationItems)) {
        return acc;
      }

      const investigationSection: ContextMenuSectionItem = {
        key: 'investigation',
        label: (
          <Translate
            id="app.contextMenu.investigation"
            type="html"
            values={{
              entity: dataPoint.attribute.name,
            }}
          />
        ),
        menuItems: investigationItems.map((item) => {
          return {
            handleClick: getClickHandler({
              handleClose,
              item,
              widgetId,
            }),
            key: `investigation.single`,
            label: item.label,
            roleAccessKey: `investigation.single`,
          };
        }),
      };
      acc.push(investigationSection);
      return acc;
    }, []);

    setInvestigationSections(tempInvestigationSections);
  }, [dataPointsToShow?.length]);

  return investigationSections;
}

//#region Private Members
interface InvestigationItemClickHandler extends ContextMenuClickHandler<InvestigationItem> {
  widgetId?: string;
}

function getClickHandler({ handleClose, item, widgetId }: InvestigationItemClickHandler) {
  return () => () => {
    const investigateURL = `${KsManagedModulePaths.Investigate}?initialWidget=${widgetId}`;
    window.open(investigateURL);
    handleClose();
  };
}

interface InvestigationItem {
  label: ReactElement;
  widgets: LibraryWidget[];
}

function getInvestigationItems(dataPoint: DataPointWithFormattedValue): InvestigationItem[] {
  const { attribute, formattedValue } = dataPoint;

  // TODO @cafe THIS MUST BE REMOVED ONCE WE GET RID OF THE AGGREGATION VS TRANSFORMATION DILEMMA.
  const { transformationKeyToUse = DEFAULT_TRANSFORMATION_KEY_TO_USE } = dataPoint;
  const attributeTransformation = path<AggregationType>([transformationKeyToUse], attribute);

  const isSingleCardinality = isSingleCardinalityTransformation(attributeTransformation);
  const scope = isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection;
  const entityId = attribute.id;

  const showInvestigations = entityHasWidgets({
    entityId: attribute.id,
    scope,
  });

  if (!showInvestigations) {
    return;
  }

  const widgets = getWidgetsByEntity({
    entityId,
    scope,
  });

  const values = {
    entity: attribute.name,
    value: formattedValue,
  };

  if (scope === WidgetScope.Single) {
    return [
      {
        label: <Translate id="app.contextMenu.investigation.single" type="html" values={values} />,
        widgets,
      },
    ];
  } else {
    return [
      {
        label: <Translate id="app.contextMenu.investigation.collection" type="html" values={values} />,
        widgets,
      },
    ];
  }
}
//#endregion
