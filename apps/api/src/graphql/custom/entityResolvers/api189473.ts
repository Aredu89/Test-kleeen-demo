import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBookStoreDepartment extends RESTDataSource {
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

  // Add BookStoreDepartment
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bookStoreDepartment', entity);

    // Sample HTTP POST request.
    // return this.post('bookStoreDepartment', entity);
  }

  // Delete BookStoreDepartment
  async deleteEntity(id: string) {
    return KapiCrud.delete('bookStoreDepartment', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bookStoreDepartment/${id}`);
  }

  // List BookStoreDepartment
  async listEntity(params: any) {
    return KapiCrud.list('bookStoreDepartment', params);

    // Sample HTTP GET request.
    // return this.get('bookStoreDepartment', params);
  }

  // Get BookStoreDepartment
  async getEntity(id: string) {
    return KapiCrud.get('bookStoreDepartment', id);

    // Sample HTTP GET request.
    // return this.get(`bookStoreDepartment/${id}`);
  }

  // Update BookStoreDepartment
  async updateEntity(entity) {
    return KapiCrud.update('bookStoreDepartment', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bookStoreDepartment, entity);
  }

  // Auto complete for BookStoreDepartment
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bookStoreDepartment');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { bookStoreDepartment: { displayValue: string; value?: any } }) => ({
      ...obj.bookStoreDepartment,
    }));
  }
}
