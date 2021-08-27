import * as autorDetails from './autorDetails';
import * as bookStoreMain from './bookStoreMain';
import * as publisherDetails from './publisherDetails';
import * as bookList from './bookList';
import * as sectionDetails from './sectionDetails';
import * as bookPriceTable from './bookPriceTable';
import * as departmentDetails from './departmentDetails';
import * as bestSeller from './bestSeller';
import * as genreDetails from './genreDetails';
import * as configBook from './configBook';
import * as department from './department';
import * as bookDetails from './bookDetails';

export default {
  ...Object.values({
    autorDetails,

    bookStoreMain,

    publisherDetails,

    bookList,

    sectionDetails,

    bookPriceTable,

    departmentDetails,

    bestSeller,

    genreDetails,

    configBook,

    department,

    bookDetails,
  }),
};
