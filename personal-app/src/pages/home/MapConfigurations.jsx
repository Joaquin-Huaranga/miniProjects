const GOOGLE_MAPS_API_KEY = "AIzaSyDttA-IgTnTzFSTlQqgx4iNPV23BUrT_Qc";

const Map_Theme = [
  {
    "feature    Type": "all",
    elementType: "all",
    stylers: [
      {
        invert_lightness: true,
      },
      {
        saturation: "-9",
      },
      {
        lightness: "0",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [
      {
        weight: "1.00",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        weight: "0.49",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
      {
        weight: "0.01",
      },
      {
        lightness: "-7",
      },
      {
        saturation: "-35",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
];

export const mapOptions = {
  googleMapApiKey: GOOGLE_MAPS_API_KEY,
  mapTheme: Map_Theme,
};
