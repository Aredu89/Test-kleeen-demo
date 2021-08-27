import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSalesData extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://put.your.api.here/';
    // You can access the token, data sources,
    // and the current user through 'this.context'.
  }

  willSendRequest(request: RequestOptions) {
    // Uncomment the following line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Uncomment the following line to set params token.
    // request.params.set('api_key', this.context.token);
  }

  // Add SalesData
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('salesData', entity);

    // Sample HTTP POST request.
    // return this.post('salesData', entity);
  }

  // Delete SalesData
  async deleteEntity(id: string) {
    return KapiCrud.delete('salesData', id);

    // Sample HTTP DELETE request.
    // return this.delete(`salesData/${id}`);
  }

  // List SalesData
  async listEntity(params: any) {
    return KapiCrud.list('salesData', params);

    // Sample HTTP GET request.
    // return this.get('salesData', params);
  }

  // Get SalesData
  async getEntity(id: string) {
    return KapiCrud.get('salesData', id);

    // Sample HTTP GET request.
    // return this.get(`salesData/${id}`);
  }

  // Update SalesData
  async updateEntity(entity) {
    return KapiCrud.update('salesData', entity);

    // Sample HTTP PATCH request.
    // return this.patch(salesData, entity);
  }

  // Auto complete for SalesData
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('salesData');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { salesData: { displayValue: string; value?: any } }) => ({ ...obj.salesData }));
  }
}
