import { NavigationSettings } from './navigation.model';

export const getSettings = (logout: () => void): NavigationSettings => {
  return {
    accountMenuOptions: [
      {
        title: 'User Preferences',
        path: '/profile/endUserPreferences/edit',
      },
      {
        title: 'Logout',
        path: '/logout',
        func: logout,
      },
    ],
    helpUrl: `https://github.com/`,
    logo: `assets/logo.png`,
    menuOptions: [
      {
        title: `Book Store Main`,
        path: `/book-store-main`,
        icon: `ks-navigation-3u1DujrfUiPjdB1Nwj2GUD`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Department`,
        path: `/department`,
        icon: `ks-navigation-t2EiG5xqeN7VaRLVhWzzms`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Best Seller`,
        path: `/best-seller`,
        icon: `ks-navigation-gBPP6jBYiaR5U9WMGMH7wA`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `config book`,
        path: `/config-book`,
        icon: `ks-navigation-qFZmWJk8TVKVmpqoJYDYkR`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Book List`,
        path: `/book-list`,
        icon: `ks-navigation-8uJQJDT1GXpn3GZkQhWKAw`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Librería Internacional`,
        path: `https://www.libreriainternacional.com`,
        icon: `ks-navigation-8swJGSMpiQzZNwqWNvf8Rf`,
        type: `customUrl`,
        openInNewTab: true,
        areYouSure: true,
      },
      {
        title: `Universal`,
        path: `https://tiendauniversal.com`,
        icon: `ks-navigation-hq1MLxjvue4YHRAAPXrT4z`,
        type: `customUrl`,
        openInNewTab: true,
        areYouSure: true,
      },
    ],
  };
};
