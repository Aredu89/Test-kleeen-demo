import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBookRating extends RESTDataSource {
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

  // Add BookRating
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('bookRating', entity);

    // Sample HTTP POST request.
    // return this.post('bookRating', entity);
  }

  // Delete BookRating
  async deleteEntity(id: string) {
    return KapiCrud.delete('bookRating', id);

    // Sample HTTP DELETE request.
    // return this.delete(`bookRating/${id}`);
  }

  // List BookRating
  async listEntity(params: any) {
    return KapiCrud.list('bookRating', params);

    // Sample HTTP GET request.
    // return this.get('bookRating', params);
  }

  // Get BookRating
  async getEntity(id: string) {
    return KapiCrud.get('bookRating', id);

    // Sample HTTP GET request.
    // return this.get(`bookRating/${id}`);
  }

  // Update BookRating
  async updateEntity(entity) {
    return KapiCrud.update('bookRating', entity);

    // Sample HTTP PATCH request.
    // return this.patch(bookRating, entity);
  }

  // Auto complete for BookRating
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('bookRating');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { bookRating: { displayValue: string; value?: any } }) => ({
      ...obj.bookRating,
    }));
  }
}
