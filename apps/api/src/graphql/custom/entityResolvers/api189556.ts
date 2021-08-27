import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiIsbn extends RESTDataSource {
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

  // Add Isbn
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('isbn', entity);

    // Sample HTTP POST request.
    // return this.post('isbn', entity);
  }

  // Delete Isbn
  async deleteEntity(id: string) {
    return KapiCrud.delete('isbn', id);

    // Sample HTTP DELETE request.
    // return this.delete(`isbn/${id}`);
  }

  // List Isbn
  async listEntity(params: any) {
    return KapiCrud.list('isbn', params);

    // Sample HTTP GET request.
    // return this.get('isbn', params);
  }

  // Get Isbn
  async getEntity(id: string) {
    return KapiCrud.get('isbn', id);

    // Sample HTTP GET request.
    // return this.get(`isbn/${id}`);
  }

  // Update Isbn
  async updateEntity(entity) {
    return KapiCrud.update('isbn', entity);

    // Sample HTTP PATCH request.
    // return this.patch(isbn, entity);
  }

  // Auto complete for Isbn
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('isbn');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { isbn: { displayValue: string; value?: any } }) => ({ ...obj.isbn }));
  }
}
