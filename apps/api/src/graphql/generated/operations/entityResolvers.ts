import { IResolvers } from 'apollo-server-express';
import { DispatchCustomActionResults } from '../../../types';

export const entityResolvers: IResolvers = {
  Query: {
    // Timestamp Resolvers
    add161376: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api161376.addEntity(input.entity, input.parent),
    }),
    list161376: (_parent, args, { dataSources }) => ({ data: dataSources.api161376.listEntity(args) }),
    get161376: (_parent, { id }, { dataSources }) => ({ data: dataSources.api161376.getEntity(id) }),
    delete161376: (_parent, { id }, { dataSources }) => ({ data: dataSources.api161376.deleteEntity(id) }),
    update161376: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api161376.updateEntity(entity),
    }),
    autoComplete161376: (_parent, params, { dataSources }) => ({
      data: dataSources.api161376.getAutoCompleteValues(params.input),
    }),

    // BookStoreDepartment Resolvers
    add189473: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189473.addEntity(input.entity, input.parent),
    }),
    list189473: (_parent, args, { dataSources }) => ({ data: dataSources.api189473.listEntity(args) }),
    get189473: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189473.getEntity(id) }),
    delete189473: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189473.deleteEntity(id) }),
    update189473: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189473.updateEntity(entity),
    }),
    autoComplete189473: (_parent, params, { dataSources }) => ({
      data: dataSources.api189473.getAutoCompleteValues(params.input),
    }),

    // Employee Resolvers
    add189474: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189474.addEntity(input.entity, input.parent),
    }),
    list189474: (_parent, args, { dataSources }) => ({ data: dataSources.api189474.listEntity(args) }),
    get189474: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189474.getEntity(id) }),
    delete189474: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189474.deleteEntity(id) }),
    update189474: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189474.updateEntity(entity),
    }),
    autoComplete189474: (_parent, params, { dataSources }) => ({
      data: dataSources.api189474.getAutoCompleteValues(params.input),
    }),

    // Manager Resolvers
    add189475: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189475.addEntity(input.entity, input.parent),
    }),
    list189475: (_parent, args, { dataSources }) => ({ data: dataSources.api189475.listEntity(args) }),
    get189475: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189475.getEntity(id) }),
    delete189475: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189475.deleteEntity(id) }),
    update189475: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189475.updateEntity(entity),
    }),
    autoComplete189475: (_parent, params, { dataSources }) => ({
      data: dataSources.api189475.getAutoCompleteValues(params.input),
    }),

    // Section Resolvers
    add189476: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189476.addEntity(input.entity, input.parent),
    }),
    list189476: (_parent, args, { dataSources }) => ({ data: dataSources.api189476.listEntity(args) }),
    get189476: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189476.getEntity(id) }),
    delete189476: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189476.deleteEntity(id) }),
    update189476: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189476.updateEntity(entity),
    }),
    autoComplete189476: (_parent, params, { dataSources }) => ({
      data: dataSources.api189476.getAutoCompleteValues(params.input),
    }),

    // Genre Resolvers
    add189478: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189478.addEntity(input.entity, input.parent),
    }),
    list189478: (_parent, args, { dataSources }) => ({ data: dataSources.api189478.listEntity(args) }),
    get189478: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189478.getEntity(id) }),
    delete189478: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189478.deleteEntity(id) }),
    update189478: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189478.updateEntity(entity),
    }),
    autoComplete189478: (_parent, params, { dataSources }) => ({
      data: dataSources.api189478.getAutoCompleteValues(params.input),
    }),

    // Book Resolvers
    add189480: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189480.addEntity(input.entity, input.parent),
    }),
    list189480: (_parent, args, { dataSources }) => ({ data: dataSources.api189480.listEntity(args) }),
    get189480: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189480.getEntity(id) }),
    delete189480: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189480.deleteEntity(id) }),
    update189480: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189480.updateEntity(entity),
    }),
    autoComplete189480: (_parent, params, { dataSources }) => ({
      data: dataSources.api189480.getAutoCompleteValues(params.input),
    }),
    buyBook189480: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api189480.customAction_buyBook(params.input),
    newAction189480: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api189480.customAction_newAction(params.input),

    // SalesData Resolvers
    add189553: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189553.addEntity(input.entity, input.parent),
    }),
    list189553: (_parent, args, { dataSources }) => ({ data: dataSources.api189553.listEntity(args) }),
    get189553: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189553.getEntity(id) }),
    delete189553: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189553.deleteEntity(id) }),
    update189553: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189553.updateEntity(entity),
    }),
    autoComplete189553: (_parent, params, { dataSources }) => ({
      data: dataSources.api189553.getAutoCompleteValues(params.input),
    }),

    // Price Resolvers
    add189554: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189554.addEntity(input.entity, input.parent),
    }),
    list189554: (_parent, args, { dataSources }) => ({ data: dataSources.api189554.listEntity(args) }),
    get189554: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189554.getEntity(id) }),
    delete189554: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189554.deleteEntity(id) }),
    update189554: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189554.updateEntity(entity),
    }),
    autoComplete189554: (_parent, params, { dataSources }) => ({
      data: dataSources.api189554.getAutoCompleteValues(params.input),
    }),

    // Isbn Resolvers
    add189556: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189556.addEntity(input.entity, input.parent),
    }),
    list189556: (_parent, args, { dataSources }) => ({ data: dataSources.api189556.listEntity(args) }),
    get189556: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189556.getEntity(id) }),
    delete189556: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189556.deleteEntity(id) }),
    update189556: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189556.updateEntity(entity),
    }),
    autoComplete189556: (_parent, params, { dataSources }) => ({
      data: dataSources.api189556.getAutoCompleteValues(params.input),
    }),

    // Publisher Resolvers
    add189639: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189639.addEntity(input.entity, input.parent),
    }),
    list189639: (_parent, args, { dataSources }) => ({ data: dataSources.api189639.listEntity(args) }),
    get189639: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189639.getEntity(id) }),
    delete189639: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189639.deleteEntity(id) }),
    update189639: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189639.updateEntity(entity),
    }),
    autoComplete189639: (_parent, params, { dataSources }) => ({
      data: dataSources.api189639.getAutoCompleteValues(params.input),
    }),

    // Author Resolvers
    add189640: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api189640.addEntity(input.entity, input.parent),
    }),
    list189640: (_parent, args, { dataSources }) => ({ data: dataSources.api189640.listEntity(args) }),
    get189640: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189640.getEntity(id) }),
    delete189640: (_parent, { id }, { dataSources }) => ({ data: dataSources.api189640.deleteEntity(id) }),
    update189640: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api189640.updateEntity(entity),
    }),
    autoComplete189640: (_parent, params, { dataSources }) => ({
      data: dataSources.api189640.getAutoCompleteValues(params.input),
    }),

    // Seller Resolvers
    add194053: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api194053.addEntity(input.entity, input.parent),
    }),
    list194053: (_parent, args, { dataSources }) => ({ data: dataSources.api194053.listEntity(args) }),
    get194053: (_parent, { id }, { dataSources }) => ({ data: dataSources.api194053.getEntity(id) }),
    delete194053: (_parent, { id }, { dataSources }) => ({ data: dataSources.api194053.deleteEntity(id) }),
    update194053: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api194053.updateEntity(entity),
    }),
    autoComplete194053: (_parent, params, { dataSources }) => ({
      data: dataSources.api194053.getAutoCompleteValues(params.input),
    }),

    // Characters Resolvers
    add212103: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api212103.addEntity(input.entity, input.parent),
    }),
    list212103: (_parent, args, { dataSources }) => ({ data: dataSources.api212103.listEntity(args) }),
    get212103: (_parent, { id }, { dataSources }) => ({ data: dataSources.api212103.getEntity(id) }),
    delete212103: (_parent, { id }, { dataSources }) => ({ data: dataSources.api212103.deleteEntity(id) }),
    update212103: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api212103.updateEntity(entity),
    }),
    autoComplete212103: (_parent, params, { dataSources }) => ({
      data: dataSources.api212103.getAutoCompleteValues(params.input),
    }),

    // BookRating Resolvers
    add212998: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api212998.addEntity(input.entity, input.parent),
    }),
    list212998: (_parent, args, { dataSources }) => ({ data: dataSources.api212998.listEntity(args) }),
    get212998: (_parent, { id }, { dataSources }) => ({ data: dataSources.api212998.getEntity(id) }),
    delete212998: (_parent, { id }, { dataSources }) => ({ data: dataSources.api212998.deleteEntity(id) }),
    update212998: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api212998.updateEntity(entity),
    }),
    autoComplete212998: (_parent, params, { dataSources }) => ({
      data: dataSources.api212998.getAutoCompleteValues(params.input),
    }),
  },
};
