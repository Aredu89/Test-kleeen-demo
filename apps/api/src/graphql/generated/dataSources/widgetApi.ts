/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs, AuthContext } from '../../../types';
import { entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480 } from '../../custom/widgetResolvers/entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480';
import { entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640 } from '../../custom/widgetResolvers/entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640';
import { entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480 } from '../../custom/widgetResolvers/entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480';
import { entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639 } from '../../custom/widgetResolvers/entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639';
import { entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473 } from '../../custom/widgetResolvers/entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473';
import { entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476 } from '../../custom/widgetResolvers/entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476';
import { entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478 } from '../../custom/widgetResolvers/entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478';
import { entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473 } from '../../custom/widgetResolvers/entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473';
import { entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474 } from '../../custom/widgetResolvers/entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474';
import { entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475 } from '../../custom/widgetResolvers/entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475';
import { entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476 } from '../../custom/widgetResolvers/entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476';
import { entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553 } from '../../custom/widgetResolvers/entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553';
import { entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476 } from '../../custom/widgetResolvers/entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476';
import { entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478 } from '../../custom/widgetResolvers/entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478';
import { entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480 } from '../../custom/widgetResolvers/entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640';
import { entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103 } from '../../custom/widgetResolvers/entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103';
import { object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55 } from '../../custom/widgetResolvers/object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55';
import { object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da } from '../../custom/widgetResolvers/object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da';
import { object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba } from '../../custom/widgetResolvers/object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba';
import { object_listing_750c047d_9101_4957_aedf_ce4a3024ea52 } from '../../custom/widgetResolvers/object_listing_750c047d_9101_4957_aedf_ce4a3024ea52';
import { object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6 } from '../../custom/widgetResolvers/object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6';
import { object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787 } from '../../custom/widgetResolvers/object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787';
import { widget_03d72786_5ec2_4624_92de_b5830bc6cd65 } from '../../custom/widgetResolvers/widget_03d72786_5ec2_4624_92de_b5830bc6cd65';
import { widget_0b8ccb42_137b_4249_acb5_8de28f41349b } from '../../custom/widgetResolvers/widget_0b8ccb42_137b_4249_acb5_8de28f41349b';
import { widget_0d67dd27_9e87_46ab_8361_0e25a79346c0 } from '../../custom/widgetResolvers/widget_0d67dd27_9e87_46ab_8361_0e25a79346c0';
import { widget_16be920e_ec25_4504_a290_ba5de3903cca } from '../../custom/widgetResolvers/widget_16be920e_ec25_4504_a290_ba5de3903cca';
import { widget_1f412112_c241_449c_a95b_dc610215497b } from '../../custom/widgetResolvers/widget_1f412112_c241_449c_a95b_dc610215497b';
import { widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f } from '../../custom/widgetResolvers/widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f';
import { widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455 } from '../../custom/widgetResolvers/widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455';
import { widget_912f432d_9078_4eb0_a682_463a34fc936c } from '../../custom/widgetResolvers/widget_912f432d_9078_4eb0_a682_463a34fc936c';
import { widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416 } from '../../custom/widgetResolvers/widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416';
import { widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710 } from '../../custom/widgetResolvers/widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710';
import { widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0 } from '../../custom/widgetResolvers/widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0';
import { widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d } from '../../custom/widgetResolvers/widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d';
import { widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf } from '../../custom/widgetResolvers/widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf';
import { widget_ea4b292a_c6af_4430_b132_c47414a90fd0 } from '../../custom/widgetResolvers/widget_ea4b292a_c6af_4430_b132_c47414a90fd0';
import { widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04 } from '../../custom/widgetResolvers/widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04';
import { widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32 } from '../../custom/widgetResolvers/widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32';
import { widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e } from '../../custom/widgetResolvers/widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e';
import { widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75 } from '../../custom/widgetResolvers/widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75';
import { widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3 } from '../../custom/widgetResolvers/widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3';
import { widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a } from '../../custom/widgetResolvers/widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a';
import { widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2 } from '../../custom/widgetResolvers/widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480(args: DataListingArgs) {
    return entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480(args, this.context);
  }

  async entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640(args: DataListingArgs) {
    return entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640(args, this.context);
  }

  async entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480(args: DataListingArgs) {
    return entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480(args, this.context);
  }

  async entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639(args: DataListingArgs) {
    return entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639(args, this.context);
  }

  async entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473(args: DataListingArgs) {
    return entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473(args, this.context);
  }

  async entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476(args: DataListingArgs) {
    return entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476(args, this.context);
  }

  async entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478(args: DataListingArgs) {
    return entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478(args, this.context);
  }

  async entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473(args: DataListingArgs) {
    return entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473(args, this.context);
  }

  async entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474(args: DataListingArgs) {
    return entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474(args, this.context);
  }

  async entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475(args: DataListingArgs) {
    return entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475(args, this.context);
  }

  async entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476(args: DataListingArgs) {
    return entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476(args, this.context);
  }

  async entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553(args: DataListingArgs) {
    return entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553(args, this.context);
  }

  async entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476(args: DataListingArgs) {
    return entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476(args, this.context);
  }

  async entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478(args: DataListingArgs) {
    return entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478(args, this.context);
  }

  async entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480(args: DataListingArgs) {
    return entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640(args, this.context);
  }

  async entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103(args: DataListingArgs) {
    return entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103(args, this.context);
  }

  async object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55(args: DataListingArgs) {
    return object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55(args, this.context);
  }

  async object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da(args: DataListingArgs) {
    return object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da(args, this.context);
  }

  async object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba(args: DataListingArgs) {
    return object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba(args, this.context);
  }

  async object_listing_750c047d_9101_4957_aedf_ce4a3024ea52(args: DataListingArgs) {
    return object_listing_750c047d_9101_4957_aedf_ce4a3024ea52(args, this.context);
  }

  async object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6(args: DataListingArgs) {
    return object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6(args, this.context);
  }

  async object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787(args: DataListingArgs) {
    return object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787(args, this.context);
  }

  async widget_03d72786_5ec2_4624_92de_b5830bc6cd65(args: DataAggregationArgs) {
    return widget_03d72786_5ec2_4624_92de_b5830bc6cd65(args, this.context);
  }

  async widget_0b8ccb42_137b_4249_acb5_8de28f41349b(args: DataAggregationArgs) {
    return widget_0b8ccb42_137b_4249_acb5_8de28f41349b(args, this.context);
  }

  async widget_0d67dd27_9e87_46ab_8361_0e25a79346c0(args: DataAggregationArgs) {
    return widget_0d67dd27_9e87_46ab_8361_0e25a79346c0(args, this.context);
  }

  async widget_16be920e_ec25_4504_a290_ba5de3903cca(args: DataAggregationArgs) {
    return widget_16be920e_ec25_4504_a290_ba5de3903cca(args, this.context);
  }

  async widget_1f412112_c241_449c_a95b_dc610215497b(args: DataAggregationArgs) {
    return widget_1f412112_c241_449c_a95b_dc610215497b(args, this.context);
  }

  async widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f(args: DataAggregationArgs) {
    return widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f(args, this.context);
  }

  async widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455(args: DataAggregationArgs) {
    return widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455(args, this.context);
  }

  async widget_912f432d_9078_4eb0_a682_463a34fc936c(args: DataAggregationArgs) {
    return widget_912f432d_9078_4eb0_a682_463a34fc936c(args, this.context);
  }

  async widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416(args: DataAggregationArgs) {
    return widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416(args, this.context);
  }

  async widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710(args: DataAggregationArgs) {
    return widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710(args, this.context);
  }

  async widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0(args: DataAggregationArgs) {
    return widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0(args, this.context);
  }

  async widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d(args: DataListingArgs) {
    return widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d(args, this.context);
  }

  async widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf(args: DataListingArgs) {
    return widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf(args, this.context);
  }

  async widget_ea4b292a_c6af_4430_b132_c47414a90fd0(args: DataAggregationArgs) {
    return widget_ea4b292a_c6af_4430_b132_c47414a90fd0(args, this.context);
  }

  async widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04(args: MultiTransFormationArgs) {
    return widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04(args, this.context);
  }

  async widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32(args: MultiTransFormationArgs) {
    return widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32(args, this.context);
  }

  async widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e(args: MultiTransFormationArgs) {
    return widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e(args, this.context);
  }

  async widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75(args: MultiTransFormationArgs) {
    return widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75(args, this.context);
  }

  async widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3(args: MultiTransFormationArgs) {
    return widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3(args, this.context);
  }

  async widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a(args: MultiTransFormationArgs) {
    return widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a(args, this.context);
  }

  async widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2(args: MultiTransFormationArgs) {
    return widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2(args, this.context);
  }
}
