import { gql } from 'apollo-server-express';

export const entitySchema = gql`
  input AutoCompleteByEntityInput {
    entity: String!
    offset: Int
    totalCount: Int
    limit: Int
  }

  input AddEntityParent {
    id: String!
    entity: String
  }

  input AddEntityInput {
    entity: JSON
    parent: AddEntityParent
  }

  input ListEntityInput {
    entity: JSON
  }

  type AutoCompleteOptionShape {
    displayValue: String!
    value: String
    id: String
  }

  type AutoCompleteResponse {
    data: [AutoCompleteOptionShape]
    errorMessage: String
  }

  extend type Query {
    # Timestamp
    add161376(input: AddEntityInput): GenericEntity
    list161376(input: ListEntityInput): GenericEntity
    get161376(id: String): GenericEntity
    delete161376(id: String): GenericEntity
    update161376(entity: JSON): GenericEntity
    autoComplete161376(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BookStoreDepartment
    add189473(input: AddEntityInput): GenericEntity
    list189473(input: ListEntityInput): GenericEntity
    get189473(id: String): GenericEntity
    delete189473(id: String): GenericEntity
    update189473(entity: JSON): GenericEntity
    autoComplete189473(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Employee
    add189474(input: AddEntityInput): GenericEntity
    list189474(input: ListEntityInput): GenericEntity
    get189474(id: String): GenericEntity
    delete189474(id: String): GenericEntity
    update189474(entity: JSON): GenericEntity
    autoComplete189474(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Manager
    add189475(input: AddEntityInput): GenericEntity
    list189475(input: ListEntityInput): GenericEntity
    get189475(id: String): GenericEntity
    delete189475(id: String): GenericEntity
    update189475(entity: JSON): GenericEntity
    autoComplete189475(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Section
    add189476(input: AddEntityInput): GenericEntity
    list189476(input: ListEntityInput): GenericEntity
    get189476(id: String): GenericEntity
    delete189476(id: String): GenericEntity
    update189476(entity: JSON): GenericEntity
    autoComplete189476(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Genre
    add189478(input: AddEntityInput): GenericEntity
    list189478(input: ListEntityInput): GenericEntity
    get189478(id: String): GenericEntity
    delete189478(id: String): GenericEntity
    update189478(entity: JSON): GenericEntity
    autoComplete189478(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Book
    add189480(input: AddEntityInput): GenericEntity
    list189480(input: ListEntityInput): GenericEntity
    get189480(id: String): GenericEntity
    delete189480(id: String): GenericEntity
    update189480(entity: JSON): GenericEntity
    autoComplete189480(input: AutoCompleteByEntityInput): AutoCompleteResponse
    buyBook189480(input: CustomActionArgs): GenericEntity
    newAction189480(input: CustomActionArgs): GenericEntity

    # SalesData
    add189553(input: AddEntityInput): GenericEntity
    list189553(input: ListEntityInput): GenericEntity
    get189553(id: String): GenericEntity
    delete189553(id: String): GenericEntity
    update189553(entity: JSON): GenericEntity
    autoComplete189553(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Price
    add189554(input: AddEntityInput): GenericEntity
    list189554(input: ListEntityInput): GenericEntity
    get189554(id: String): GenericEntity
    delete189554(id: String): GenericEntity
    update189554(entity: JSON): GenericEntity
    autoComplete189554(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Isbn
    add189556(input: AddEntityInput): GenericEntity
    list189556(input: ListEntityInput): GenericEntity
    get189556(id: String): GenericEntity
    delete189556(id: String): GenericEntity
    update189556(entity: JSON): GenericEntity
    autoComplete189556(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Publisher
    add189639(input: AddEntityInput): GenericEntity
    list189639(input: ListEntityInput): GenericEntity
    get189639(id: String): GenericEntity
    delete189639(id: String): GenericEntity
    update189639(entity: JSON): GenericEntity
    autoComplete189639(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Author
    add189640(input: AddEntityInput): GenericEntity
    list189640(input: ListEntityInput): GenericEntity
    get189640(id: String): GenericEntity
    delete189640(id: String): GenericEntity
    update189640(entity: JSON): GenericEntity
    autoComplete189640(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Seller
    add194053(input: AddEntityInput): GenericEntity
    list194053(input: ListEntityInput): GenericEntity
    get194053(id: String): GenericEntity
    delete194053(id: String): GenericEntity
    update194053(entity: JSON): GenericEntity
    autoComplete194053(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Characters
    add212103(input: AddEntityInput): GenericEntity
    list212103(input: ListEntityInput): GenericEntity
    get212103(id: String): GenericEntity
    delete212103(id: String): GenericEntity
    update212103(entity: JSON): GenericEntity
    autoComplete212103(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # BookRating
    add212998(input: AddEntityInput): GenericEntity
    list212998(input: ListEntityInput): GenericEntity
    get212998(id: String): GenericEntity
    delete212998(id: String): GenericEntity
    update212998(entity: JSON): GenericEntity
    autoComplete212998(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
