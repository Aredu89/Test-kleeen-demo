import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

// KAPI - Integration

export class ApiBook extends RESTDataSource {
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

  // Add Book
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('book', entity);

    // Sample HTTP POST request.
    // return this.post('book', entity);
  }

  // Delete Book
  async deleteEntity(id: string) {
    return KapiCrud.delete('book', id);

    // Sample HTTP DELETE request.
    // return this.delete(`book/${id}`);
  }

  // List Book
  async listEntity(params: any) {
    return KapiCrud.list('book', params);

    // Sample HTTP GET request.
    // return this.get('book', params);
  }

  // Get Book
  async getEntity(id: string) {
    return KapiCrud.get('book', id);

    // Sample HTTP GET request.
    // return this.get(`book/${id}`);
  }

  // Update Book
  async updateEntity(entity) {
    return KapiCrud.update('book', entity);

    // Sample HTTP PATCH request.
    // return this.patch(book, entity);
  }

  // Auto complete for Book
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('book');
    // TODO: @guaria generate missing attributes
    return results.map((obj: { book: { displayValue: string; value?: any } }) => ({ ...obj.book }));
  }

  // Buy Book action for Book
  async customAction_buyBook(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }

  // New Action action for Book
  async customAction_newAction(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
