import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiSeller extends RESTDataSource {
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

  // Add Seller
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('seller', entity);

    // Sample HTTP POST request.
    // return this.post('seller', entity);
  }

  // Delete Seller
  async deleteEntity(id: string) {
    return KapiCrud.delete('seller', id);

    // Sample HTTP DELETE request.
    // return this.delete(`seller/${id}`);
  }

  // List Seller
  async listEntity(params: any) {
    return KapiCrud.list('seller', params);

    // Sample HTTP GET request.
    // return this.get('seller', params);
  }

  // Get Seller
  async getEntity(id: string) {
    return KapiCrud.get('seller', id);

    // Sample HTTP GET request.
    // return this.get(`seller/${id}`);
  }

  // Update Seller
  async updateEntity(entity) {
    return KapiCrud.update('seller', entity);

    // Sample HTTP PATCH request.
    // return this.patch(seller, entity);
  }

  // Auto complete for Seller
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('seller');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { seller: { displayValue: string; value?: any } }) => ({ ...obj.seller }));
  }
}
