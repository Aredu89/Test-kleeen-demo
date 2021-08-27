import { gql } from 'apollo-server-express';

export const formatCheckSchema = gql`
  type FormatCheckError {
    message: String!
  }

  type FormatCheckResult {
    isValid: Boolean!
    errors: [FormatCheckError!]
  }

  input FormatCheckArgs {
    taskName: String!
    widgetId: String!
    formField: String!
    formValue: String!
  }

  extend type Query {
    formatCheck(input: FormatCheckArgs): FormatCheckResult
  }
`;
