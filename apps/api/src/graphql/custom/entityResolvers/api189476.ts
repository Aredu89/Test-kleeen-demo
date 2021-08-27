import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSection extends RESTDataSource {
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

  // Add Section
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('section', entity);

    // Sample HTTP POST request.
    // return this.post('section', entity);
  }

  // Delete Section
  async deleteEntity(id: string) {
    return KapiCrud.delete('section', id);

    // Sample HTTP DELETE request.
    // return this.delete(`section/${id}`);
  }

  // List Section
  async listEntity(params: any) {
    return KapiCrud.list('section', params);

    // Sample HTTP GET request.
    // return this.get('section', params);
  }

  // Get Section
  async getEntity(id: string) {
    return KapiCrud.get('section', id);

    // Sample HTTP GET request.
    // return this.get(`section/${id}`);
  }

  // Update Section
  async updateEntity(entity) {
    return KapiCrud.update('section', entity);

    // Sample HTTP PATCH request.
    // return this.patch(section, entity);
  }

  // Auto complete for Section
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('section');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { section: { displayValue: string; value?: any } }) => ({ ...obj.section }));
  }
}
