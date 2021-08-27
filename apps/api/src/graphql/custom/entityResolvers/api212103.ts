import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiCharacters extends RESTDataSource {
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

  // Add Characters
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('characters', entity);

    // Sample HTTP POST request.
    // return this.post('characters', entity);
  }

  // Delete Characters
  async deleteEntity(id: string) {
    return KapiCrud.delete('characters', id);

    // Sample HTTP DELETE request.
    // return this.delete(`characters/${id}`);
  }

  // List Characters
  async listEntity(params: any) {
    return KapiCrud.list('characters', params);

    // Sample HTTP GET request.
    // return this.get('characters', params);
  }

  // Get Characters
  async getEntity(id: string) {
    return KapiCrud.get('characters', id);

    // Sample HTTP GET request.
    // return this.get(`characters/${id}`);
  }

  // Update Characters
  async updateEntity(entity) {
    return KapiCrud.update('characters', entity);

    // Sample HTTP PATCH request.
    // return this.patch(characters, entity);
  }

  // Auto complete for Characters
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('characters');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { characters: { displayValue: string; value?: any } }) => ({
      ...obj.characters,
    }));
  }
}
