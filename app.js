import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Full Screen
 *    -Header -> 1.Logo 2.Nav-Items
 *    -Body -> 1.Search Bar 2. Restaurant Card
 *    -Footer -> 1.Copyright 2. Offc Addrs
 *
 *
 *
 */
const restaurant = [
  {
    info: {
      id: "637308",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "8cb220fa3997a3b928d2ffb6c098acaf",
      locality: "Untakhana Road\n",
      areaName: "Dhantoli",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "637308",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
          {
            name: "BASE_TIME",
          },
        ],
        totalFee: 4600,
      },
      parentId: "2233",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-15 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-untakhana-road-dhantoli-nagpur-637308",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "393193",
      name: "New Singhs Barbecue And Curry",
      cloudinaryImageId: "hin0gientxweunectq6d",
      locality: "Medical Road \n",
      areaName: "Ayodhya Nagar",
      costForTwo: "₹500 for two",
      cuisines: [
        "Indian",
        "Chinese",
        "Seafood",
        "North Indian",
        "Biryani",
        "Snacks",
        "Desserts",
      ],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "393193",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
        ],
        totalFee: 4600,
      },
      parentId: "251784",
      avgRatingString: "3.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "46 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-15 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/new-singhs-barbecue-and-curry-medical-road-ayodhya-nagar-nagpur-393193",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "466627",
      name: "The Crazy Cafe",
      cloudinaryImageId: "se2l9cwx8v4vlwi4vmqg",
      locality: "Congress Nagar \n",
      areaName: "Dhantoli",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "American"],
      veg: true,
      feeDetails: {
        restaurantId: "466627",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
        ],
        totalFee: 5400,
      },
      parentId: "280294",
      avgRatingString: "--",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-15 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-crazy-cafe-congress-nagar-dhantoli-nagpur-466627",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "53534",
      name: "Airport Centre Point - Golden Harvest",
      cloudinaryImageId: "sbirjmfsoaycfhkbq3g0",
      locality: "Wardha Road",
      areaName: "Wardha Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Indian",
        "Chinese",
        "Italian",
        "Continental",
        "North Indian",
        "Beverages",
        "Biryani",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "53534",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
        ],
        totalFee: 8400,
      },
      parentId: "8505",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "34 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2023-09-15 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/airport-centre-point-golden-harvest-wardha-road-nagpur-53534",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "56027",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "wu60rsyx7of7a7t0kiqh",
      locality: "Bajaj Nagar",
      areaName: "Bajaj Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "Beverages",
        "Indian",
        "American",
        "Desserts",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "56027",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
          {
            name: "BASE_DISTANCE",
            fee: 7400,
          },
        ],
        totalFee: 8900,
      },
      parentId: "375065",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "31 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11 am, today",
      },
      badges: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-bajaj-nagar-nagpur-56027",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "503106",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
      locality: "Vivekanand Nagar\n",
      areaName: "Manish Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "503106",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
        ],
        totalFee: 6200,
      },
      parentId: "4961",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "26 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11 am, today",
      },
      badges: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹649",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-vivekanand-nagar-manish-nagar-nagpur-503106",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "188503",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Untkhana",
      areaName: "Untkhana",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "188503",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
        ],
        totalFee: 5400,
      },
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "61 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 10 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-untkhana-nagpur-188503",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "53385",
      name: "Panino The Sandwich World",
      cloudinaryImageId: "ypvkqrtmedrtpsikck7j",
      locality: "Manish Nagar",
      areaName: "Manish Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Italian",
        "Pizzas",
        "American",
        "Snacks",
        "Pastas",
        "Beverages",
        "Desserts",
        "Continental",
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "53385",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
          {
            name: "BASE_DISTANCE",
            fee: 6400,
          },
        ],
        totalFee: 7900,
      },
      parentId: "4835",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "31 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2023-09-15 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/panino-the-sandwich-world-manish-nagar-nagpur-53385",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "103748",
      name: "The Pancake Story",
      cloudinaryImageId: "vnc97mebf4yyyrkjrcci",
      locality: "Abhyankar Nagar",
      areaName: "Bajaj Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "103748",
        fees: [
          {
            name: "ANCILLARY_SURGE_FEE",
            fee: 1500,
          },
          {
            name: "BASE_DISTANCE",
            fee: 7400,
          },
          {
            name: "BASE_TIME",
          },
        ],
        totalFee: 8900,
      },
      parentId: "5736",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "35 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 10 am, today",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-b16be244-80d3-45dd-946c-a51e9853f9d1",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-pancake-story-abhyankar-nagar-bajaj-nagar-nagpur-103748",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  const { restaurantdata } = props;
  const { name, locality, cuisines, avgRating, costForTwo } =
    restaurantdata?.info;
  return (
    <div className="res-card">
      <img
        className="biryani"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantdata.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h3>{locality}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/food-logo-design_139869-254.jpg?w=2000"
      />
      <ul className="menu">
        <li className="menu-item"> Cart </li>
        <li className="menu-item"> About us </li>
        <li className="menu-item"> Home </li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <h4>Search</h4>
      {restaurant.map((restaurantdata) => (
        <RestaurantCard
          key={restaurantdata.info.id}
          restaurantdata={restaurantdata}
        />
      ))}
      {/* <RestaurantCard restaurantdata={restaurant[9]} /> */}
      {/* <RestaurantCard restaurantdata={restaurant[10]} /> */}
    </div>
  );
};

const FullScreen = () => {
  return (
    <div className="full-screen">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FullScreen />);
