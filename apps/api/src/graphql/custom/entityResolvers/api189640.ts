import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiAuthor extends RESTDataSource {
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

  // Add Author
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('author', entity);

    // Sample HTTP POST request.
    // return this.post('author', entity);
  }

  // Delete Author
  async deleteEntity(id: string) {
    return KapiCrud.delete('author', id);

    // Sample HTTP DELETE request.
    // return this.delete(`author/${id}`);
  }

  // List Author
  async listEntity(params: any) {
    return KapiCrud.list('author', params);

    // Sample HTTP GET request.
    // return this.get('author', params);
  }

  // Get Author
  async getEntity(id: string) {
    return KapiCrud.get('author', id);

    // Sample HTTP GET request.
    // return this.get(`author/${id}`);
  }

  // Update Author
  async updateEntity(entity) {
    return KapiCrud.update('author', entity);

    // Sample HTTP PATCH request.
    // return this.patch(author, entity);
  }

  // Auto complete for Author
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('author');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { author: { displayValue: string; value?: any } }) => ({ ...obj.author }));
  }
}
