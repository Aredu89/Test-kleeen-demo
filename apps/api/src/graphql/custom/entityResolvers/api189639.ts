import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPublisher extends RESTDataSource {
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

  // Add Publisher
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('publisher', entity);

    // Sample HTTP POST request.
    // return this.post('publisher', entity);
  }

  // Delete Publisher
  async deleteEntity(id: string) {
    return KapiCrud.delete('publisher', id);

    // Sample HTTP DELETE request.
    // return this.delete(`publisher/${id}`);
  }

  // List Publisher
  async listEntity(params: any) {
    return KapiCrud.list('publisher', params);

    // Sample HTTP GET request.
    // return this.get('publisher', params);
  }

  // Get Publisher
  async getEntity(id: string) {
    return KapiCrud.get('publisher', id);

    // Sample HTTP GET request.
    // return this.get(`publisher/${id}`);
  }

  // Update Publisher
  async updateEntity(entity) {
    return KapiCrud.update('publisher', entity);

    // Sample HTTP PATCH request.
    // return this.patch(publisher, entity);
  }

  // Auto complete for Publisher
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('publisher');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { publisher: { displayValue: string; value?: any } }) => ({ ...obj.publisher }));
  }
}
