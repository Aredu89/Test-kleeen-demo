import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiGenre extends RESTDataSource {
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

  // Add Genre
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('genre', entity);

    // Sample HTTP POST request.
    // return this.post('genre', entity);
  }

  // Delete Genre
  async deleteEntity(id: string) {
    return KapiCrud.delete('genre', id);

    // Sample HTTP DELETE request.
    // return this.delete(`genre/${id}`);
  }

  // List Genre
  async listEntity(params: any) {
    return KapiCrud.list('genre', params);

    // Sample HTTP GET request.
    // return this.get('genre', params);
  }

  // Get Genre
  async getEntity(id: string) {
    return KapiCrud.get('genre', id);

    // Sample HTTP GET request.
    // return this.get(`genre/${id}`);
  }

  // Update Genre
  async updateEntity(entity) {
    return KapiCrud.update('genre', entity);

    // Sample HTTP PATCH request.
    // return this.patch(genre, entity);
  }

  // Auto complete for Genre
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('genre');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { genre: { displayValue: string; value?: any } }) => ({ ...obj.genre }));
  }
}
