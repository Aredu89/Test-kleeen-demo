import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useState } from 'react';
import {
  CollectionLayoutStyle,
  FilterSection,
  DataViewControlSection,
  getRowsCountFromFirstTable,
  DataViewDisplaySectionAtomic,
} from '@kleeen/react/atomic-elements';
import { filterSectionFilters } from './settings/filter-section-filters';
import { useKleeenActions, useUrlQueryParams } from '@kleeen/react/hooks';
import { viewOptions } from './settings/view-options';
import { workflowAction } from './settings/workflow-action';
import { attributesOnCreate } from './settings/attributes-on-create';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `bestSeller`;
  const entity = `Book`;
  const [selectedViewOption, setSelectedViewOption] = useState(widgets[0]);
  const [cardsNumber, setCardsNumber] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const classes = CollectionLayoutStyle();
  function handleOnChangeFilterVisible(isFilterVisible) {
    setIsFilterOpen(isFilterVisible);
  }
  const workflowName = `Best Seller`;
  function handleOnTabIndexChanged(newTabIndex, option) {
    setSelectedViewOption(option);
  }
  const objectFocus = `book`;
  const bookActions = useKleeenActions(taskName);
  const paramsBasedOnRoute = useUrlQueryParams();
  const currentEntity = { id: paramsBasedOnRoute[entity], entity };

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={`${classes.entityBrowserTask} subhead-dynamic`}>
        <div className={classes.entityBrowserFilterSection}>
          <FilterSection
            filters={filterSectionFilters}
            taskName={taskName}
            onChangeFilterVisible={handleOnChangeFilterVisible}
            hasDateFilter
          />
        </div>
        <div
          className={
            isFilterOpen
              ? `${classes.entityBrowserAreaWithFilterSection} openFilterSection`
              : `${classes.entityBrowserArea} browserArea`
          }
        >
          <div
            className={`${classes.gridPageIntro} ${cardsNumber > 0 ? `max-card-${cardsNumber}` : ''}`}
            data-testid="page-intro"
          >
            <DataViewControlSection
              actions={workflowAction}
              attributes={attributesOnCreate}
              entity={entity}
              entityActions={bookActions}
              hideRefreshControl
              objectValue={objectFocus}
              onTabIndexChanged={handleOnTabIndexChanged}
              parent={currentEntity}
              results={`${getRowsCountFromFirstTable(widgets)} Count of ${entity}`}
              selectedOption={selectedViewOption}
              setSelectedOption={setSelectedViewOption}
              taskName={taskName}
              title={workflowName}
              viewOptions={viewOptions}
            />
          </div>
          <div
            className={`${classes.gridGridSection} ${
              selectedRows.length > 0 && selectedViewOption.sortOrder === 0 ? classes.snackbar : ''
            }`}
            data-testid="content-section"
          >
            <DataViewDisplaySectionAtomic
              widgets={widgets}
              entityName={entity}
              selectedOption={selectedViewOption}
              selectedRows={selectedRows}
              setCardsNumber={setCardsNumber}
              setSelectedRows={setSelectedRows}
              taskName={taskName}
              value={selectedViewOption}
            />
          </div>
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
