/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_750c047d_9101_4957_aedf_ce4a3024ea52: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_750c047d_9101_4957_aedf_ce4a3024ea52(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_750c047d_9101_4957_aedf_ce4a3024ea52(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787(args.input, {
            ...rest,
          })
        : result;
    },

    widget_03d72786_5ec2_4624_92de_b5830bc6cd65: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_03d72786_5ec2_4624_92de_b5830bc6cd65(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_03d72786_5ec2_4624_92de_b5830bc6cd65(args.input, { ...rest })
        : result;
    },

    widget_0b8ccb42_137b_4249_acb5_8de28f41349b: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_0b8ccb42_137b_4249_acb5_8de28f41349b(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_0b8ccb42_137b_4249_acb5_8de28f41349b(args.input, { ...rest })
        : result;
    },

    widget_0d67dd27_9e87_46ab_8361_0e25a79346c0: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_0d67dd27_9e87_46ab_8361_0e25a79346c0(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_0d67dd27_9e87_46ab_8361_0e25a79346c0(args.input, { ...rest })
        : result;
    },

    widget_16be920e_ec25_4504_a290_ba5de3903cca: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_16be920e_ec25_4504_a290_ba5de3903cca(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_16be920e_ec25_4504_a290_ba5de3903cca(args.input, { ...rest })
        : result;
    },

    widget_1f412112_c241_449c_a95b_dc610215497b: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_1f412112_c241_449c_a95b_dc610215497b(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_1f412112_c241_449c_a95b_dc610215497b(args.input, { ...rest })
        : result;
    },

    widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f(args.input, { ...rest })
        : result;
    },

    widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455(args.input, { ...rest })
        : result;
    },

    widget_912f432d_9078_4eb0_a682_463a34fc936c: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_912f432d_9078_4eb0_a682_463a34fc936c(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_912f432d_9078_4eb0_a682_463a34fc936c(args.input, { ...rest })
        : result;
    },

    widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416(args.input, { ...rest })
        : result;
    },

    widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710(args.input, { ...rest })
        : result;
    },

    widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0(args.input, { ...rest })
        : result;
    },

    widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d(args.input, {
            ...rest,
          })
        : result;
    },

    widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf(args.input, {
            ...rest,
          })
        : result;
    },

    widget_ea4b292a_c6af_4430_b132_c47414a90fd0: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_ea4b292a_c6af_4430_b132_c47414a90fd0(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_ea4b292a_c6af_4430_b132_c47414a90fd0(args.input, { ...rest })
        : result;
    },

    widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2(args.input, {
            ...rest,
          })
        : result;
    },
  },
};
