/* eslint-disable max-lines */
import { gql } from 'apollo-server-express';

export const widgetSchema = gql`
  type GraphResult {
    format: JSON
    results: JSON
    crossLinking: JSON
  }

  type MultiTransFormationResults {
    crossLinking: JSON
    format: JSON
    results: JSON
    transformation: String!
  }

  type ListingResult {
    data: JSON
    format: JSON
    pagination: JSON
  }

  input DataListingArgs {
    entity: String!
    attributes: JSON!
    filters: JSON
    pagination: JSON
    sorting: [JSON!]
  }

  input MultiTransFormationArgs {
    attributes: [String]
    entity: String!
    filters: JSON
    transformations: [String!]!
  }

  input CustomActionArgs {
    entity: String!
    functionName: String!
    filters: JSON
  }

    extend type Query {
          # Widget Summary
    # View: autorDetails
    # Widget: Summary Drawer 1
    # Value: book - No Aggregation
    # Widget type: behavior
    entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189480(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: autorDetails
    # Widget: Summary Drawer 1
    # Value: author - No Aggregation
    # Widget type: behavior
    entity_detail_0a2cdb18_89f4_4f62_9630_554dd1fd8e2e_189640(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: publisherDetails
    # Widget: Summary Drawer 1
    # Value: book - No Aggregation
    # Widget type: behavior
    entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189480(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: publisherDetails
    # Widget: Summary Drawer 1
    # Value: publisher - No Aggregation
    # Widget type: behavior
    entity_detail_1574b244_c442_4874_9a81_ef8b6ba79939_189639(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: sectionDetails
    # Widget: Summary Drawer 1
    # Value: bookStoreDepartment - No Aggregation
    # Widget type: behavior
    entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189473(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: sectionDetails
    # Widget: Summary Drawer 1
    # Value: section - No Aggregation
    # Widget type: behavior
    entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189476(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: sectionDetails
    # Widget: Summary Drawer 1
    # Value: genre - No Aggregation
    # Widget type: behavior
    entity_detail_3fdb1c93_3b99_4e6b_a17a_e04bfa26d68d_189478(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: departmentDetails
    # Widget: Summary Drawer 1
    # Value: bookStoreDepartment - No Aggregation
    # Widget type: behavior
    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189473(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: departmentDetails
    # Widget: Summary Drawer 1
    # Value: employee - No Aggregation
    # Widget type: behavior
    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189474(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: departmentDetails
    # Widget: Summary Drawer 1
    # Value: manager - No Aggregation
    # Widget type: behavior
    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189475(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: departmentDetails
    # Widget: Summary Drawer 1
    # Value: section - No Aggregation
    # Widget type: behavior
    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189476(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: departmentDetails
    # Widget: Summary Drawer 1
    # Value: salesData - Sum
    # Widget type: behavior
    entity_detail_7ae5708f_b29a_400f_b532_4ce5defd03ff_189553(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: genreDetails
    # Widget: Summary Drawer 1
    # Value: section - No Aggregation
    # Widget type: behavior
    entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189476(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: genreDetails
    # Widget: Summary Drawer 1
    # Value: genre - No Aggregation
    # Widget type: behavior
    entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189478(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: genreDetails
    # Widget: Summary Drawer 1
    # Value: book - No Aggregation
    # Widget type: behavior
    entity_detail_7ea96530_78fd_406e_9b16_7bc894c1e1ab_189480(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: timestamp - No Aggregation
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_161376(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: genre - No Aggregation
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189478(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: book - No Aggregation
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189480(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: price - Last/Latest
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189554(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: isbn - No Aggregation
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189556(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: publisher - Total Count
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189639(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: author - No Aggregation
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_189640(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: bookDetails
    # Widget: Summary Drawer 1
    # Value: characters - No Aggregation
    # Widget type: behavior
    entity_detail_de6fa1d6_915e_4b23_8535_e06ed225c76a_212103(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Genre Details
    # Widget: Related Table 1
    # Thing: Book
    # Attributes: genre, book, author, timestamp, price, isbn
    # Widget type: goal
    object_listing_34ba2c75_f2e1_4f97_9d61_5983d99d1f55(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Book Price Table
    # Widget: Related Table 1
    # Thing: Price
    # Attributes: book, price, timestamp
    # Widget type: goal
    object_listing_3f82a10d_90ef_40d1_9752_bc5bea0322da(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: book table
    # Thing: book
    # Attributes: Author, Characters, Price
    object_listing_4f5e3ba5_c614_4f19_87ca_5578351ec6ba(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Book List
    # Widget: Books
    # Thing: Book
    # Attributes: book, publisher, author, price, isbn, timestamp, genre
    # Widget type: goal
    object_listing_750c047d_9101_4957_aedf_ce4a3024ea52(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Department
    # Widget: Table of  1
    # Thing: BookStoreDepartment
    # Attributes: bookStoreDepartment, manager, employee, section, salesData, seller
    # Widget type: goal
    object_listing_a17775a7_0a11_4da5_8543_9b54a17f2ac6(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Department Details
    # Widget: Related Table 1
    # Thing: Section
    # Attributes: bookStoreDepartment, section, genre
    # Widget type: goal
    object_listing_b3dad0fa_f009_4844_9e99_93fed22f2787(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Sales Count
    # Value: salesData - Sum
    # Group by: bookStoreDepartment - No Aggregation
    widget_03d72786_5ec2_4624_92de_b5830bc6cd65(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Books
    # Value: book - Total Count
    # Group by: section - No Aggregation
    widget_0b8ccb42_137b_4249_acb5_8de28f41349b(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Most Valued
    # Value: price - Total Count
    # Group by: book - No Aggregation
    widget_0d67dd27_9e87_46ab_8361_0e25a79346c0(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Most Scored
    # Value: bookRating - No Aggregation
    # Group by: book - No Aggregation
    widget_16be920e_ec25_4504_a290_ba5de3903cca(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Genres
    # Value: genre - Total Count
    # Group by: section - No Aggregation
    widget_1f412112_c241_449c_a95b_dc610215497b(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Total Books
    # Value: book - Total Count
    # Group by: genre - No Aggregation
    widget_236eae5d_f1fb_4707_aae5_b0c44d401b6f(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Total Price
    # Value: price - Sum
    # Group by: genre - No Aggregation
    widget_4c6ee1d5_6b58_443d_82d9_5fd4e3053455(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Price
    # Value: price - Sum
    # Group by: book - No Aggregation
    widget_912f432d_9078_4eb0_a682_463a34fc936c(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Total Authors
    # Value: author - Total Count
    # Group by: genre - No Aggregation
    widget_b04c2fdb_7319_4098_9f1c_b44ea9d3f416(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Total Characters
    # Value: characters - Total Count
    # Group by: book - No Aggregation
    widget_b5c4f6a8_b269_4e7b_b7b2_659e37c0f710(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Sellers
    # Value: seller - Total Count
    # Group by: bookStoreDepartment - No Aggregation
    widget_c827cd6f_e86e_4ba7_b5bb_dd333970ccb0(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Price
    # Value: price - No Aggregation
    widget_config_be714a62_cc50_4b7a_8cc0_06822fa8c50d(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Book
    # Value: book - No Aggregation
    widget_config_ec8655fe_a78f_459a_b2ff_e4c4b2ce20cf(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Departments Manager
    # Value: manager - No Aggregation
    # Group by: bookStoreDepartment - No Aggregation
    widget_ea4b292a_c6af_4430_b132_c47414a90fd0(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Publisher
    # Value: publisher
    widget_statistics07bcffb1_3540_48d3_8689_0eba3b922e04(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statistics53c10935_705a_4d4b_9f1e_af5a862d7d32(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: ISBN
    # Value: isbn
    widget_statistics8a6e5893_00c6_45ca_9ff6_1d137902d32e(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statistics91f34506_dfaa_4465_8ba2_f333e6090b75(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Author
    # Value: author
    widget_statisticsec66bf75_787a_4fb6_b380_8e77363ce3b3(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Genre
    # Value: genre
    widget_statisticsf19a74b2_c74d_4994_b8cd_57a069e7699a(input: MultiTransFormationArgs): [MultiTransFormationResults]


    widget_statisticsf83c771a_8c60_41a0_846c_ae4578846ff2(input: MultiTransFormationArgs): [MultiTransFormationResults]
    }
  `;
