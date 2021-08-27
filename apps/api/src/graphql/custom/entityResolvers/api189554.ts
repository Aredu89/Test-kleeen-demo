import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiPrice extends RESTDataSource {
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

  // Add Price
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('price', entity);

    // Sample HTTP POST request.
    // return this.post('price', entity);
  }

  // Delete Price
  async deleteEntity(id: string) {
    return KapiCrud.delete('price', id);

    // Sample HTTP DELETE request.
    // return this.delete(`price/${id}`);
  }

  // List Price
  async listEntity(params: any) {
    return KapiCrud.list('price', params);

    // Sample HTTP GET request.
    // return this.get('price', params);
  }

  // Get Price
  async getEntity(id: string) {
    return KapiCrud.get('price', id);

    // Sample HTTP GET request.
    // return this.get(`price/${id}`);
  }

  // Update Price
  async updateEntity(entity) {
    return KapiCrud.update('price', entity);

    // Sample HTTP PATCH request.
    // return this.patch(price, entity);
  }

  // Auto complete for Price
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('price');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { price: { displayValue: string; value?: any } }) => ({ ...obj.price }));
  }
}
