import { ApiTimestamp } from '../../custom/entityResolvers/api161376';
import { ApiBookStoreDepartment } from '../../custom/entityResolvers/api189473';
import { ApiEmployee } from '../../custom/entityResolvers/api189474';
import { ApiManager } from '../../custom/entityResolvers/api189475';
import { ApiSection } from '../../custom/entityResolvers/api189476';
import { ApiGenre } from '../../custom/entityResolvers/api189478';
import { ApiBook } from '../../custom/entityResolvers/api189480';
import { ApiSalesData } from '../../custom/entityResolvers/api189553';
import { ApiPrice } from '../../custom/entityResolvers/api189554';
import { ApiIsbn } from '../../custom/entityResolvers/api189556';
import { ApiPublisher } from '../../custom/entityResolvers/api189639';
import { ApiAuthor } from '../../custom/entityResolvers/api189640';
import { ApiSeller } from '../../custom/entityResolvers/api194053';
import { ApiCharacters } from '../../custom/entityResolvers/api212103';
import { ApiBookRating } from '../../custom/entityResolvers/api212998';
import { DataSource } from 'apollo-datasource';
import { FiltersApi } from '../../custom/filtersResolver/filtersApi';
import { FiltersFakeApi } from './filtersFakeApi';
import { FormatCheckApi } from '../../custom/formatCheckResolver/formatCheckApi';
import { FormatCheckFakeApi } from './formatCheckFakeApi';
import { WidgetApi } from './widgetApi';
import { WidgetFakeApi } from './widgetFakeApi';

export const dataSources = (): Record<string, DataSource> => ({
  filtersFakeApi: new FiltersFakeApi(),
  filtersApi: new FiltersApi(),
  formatCheckFakeApi: new FormatCheckFakeApi(),
  formatCheckApi: new FormatCheckApi(),
  widgetApi: new WidgetApi(),
  widgetFakeApi: new WidgetFakeApi(),
  api161376: new ApiTimestamp(),
  api189473: new ApiBookStoreDepartment(),
  api189474: new ApiEmployee(),
  api189475: new ApiManager(),
  api189476: new ApiSection(),
  api189478: new ApiGenre(),
  api189480: new ApiBook(),
  api189553: new ApiSalesData(),
  api189554: new ApiPrice(),
  api189556: new ApiIsbn(),
  api189639: new ApiPublisher(),
  api189640: new ApiAuthor(),
  api194053: new ApiSeller(),
  api212103: new ApiCharacters(),
  api212998: new ApiBookRating(),
});
