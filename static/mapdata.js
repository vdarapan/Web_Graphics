var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "black",
    background_transparent: "no",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "Population",
    state_color: "#148d4e",
    state_hover_color: "#0f0d02",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "Population - 2010 - 1,363,963 ; 2018 - 1,420,491"
    },
    AK: {
      name: "Alaska",
      description: "Population - 2010 - 713,906 ; 2018 - 737,438"
    },
    FL: {
      name: "Florida",
      description: "Population - 2010 - 18,845,785 ; 2018 - 21,299,325"
    },
    NH: {
      name: "New Hampshire",
      description: "Population - 2010 - 1,316,777 ; 2018 - 1,356,458"
    },
    VT: {
      name: "Vermont",
      description: "Population - 2010 - 625,880 ; 2018 - 626,699"
    },
    ME: {
      name: "Maine",
      description: "Population - 2010 - 1,327,632 ; 2018 - 1,338,404"
    },
    RI: {
      name: "Rhode Island",
      description: "Population - 2010 - 1,053,938 ; 2018 - 1,057,315"
    },
    NY: {
      name: "New York",
      description: "Population - 2010 - 19,400,080 ; 2018 - 19,542,209"
    },
    PA: {
      name: "Pennsylvania",
      description: "Population - 2010 - 12,711,158 ; 2018 - 12,807,060"
    },
    NJ: {
      name: "New Jersey",
      description: "Population - 2010 - 8,799,624 ; 2018 - 8,908,520"
    },
    DE: {
      name: "Delaware",
      description: "Population - 2010 - 899,595 ; 2018 - 967,171"
    },
    MD: {
      name: "Maryland",
      description: "Population - 2010 - 5,788,642 ; 2018 - 6,042,718"
    },
    VA: {
      name: "Virginia",
      description: "Population - 2010 - 8,023,680 ; 2018 - 8,517,685"
    },
    WV: {
      name: "West Virginia",
      description: "Population - 2010 - 1,854,214 ; 2018 - 1,805,832",
      color: "grey"
    },
    OH: {
      name: "Ohio",
      description: "Population - 2010 - 11,539,327 ; 2018 - 11,689,442"
    },
    IN: {
      name: "Indiana",
      description: "Population - 2010 - 6,490,436 ; 2018 - 6,691,878"
    },
    IL: {
      name: "Illinois",
      description: "Population - 2010 - 12,840,762 ; 2018 - 12,741,080",
      color: "grey"
    },
    CT: {
      name: "Connecticut",
      description: "Population - 2010 - 3,579,125 ; 2018 - 3,572,665",
      color: "grey"
    },
    WI: {
      name: "Wisconsin",
      description: "Population - 2010 - 5,690,479 ; 2018 - 5,813,568"
    },
    NC: {
      name: "North Carolina",
      description: "Population - 2010 - 9,574,293 ; 2018 - 10,683,620"
    },
    DC: {
      name: "District of Columbia",
      description: "Population - 2010 - 605,085 ; 2018 - 702,455"
    },
    MA: {
      name: "Massachusetts",
      description: "Population - 2010 - 6,566,431 ; 2018 - 6,902,149"
    },
    TN: {
      name: "Tennessee",
      description: "Population - 2010 - 6,355,301 ; 2018 - 6,770,010"
    },
    AR: {
      name: "Arkansas",
      description: "Population - 2010 - 2,921,978 ; 2018 - 3,013,825"
    },
    MO: {
      name: "Missouri",
      description: "Population - 2010 - 5,995,976 ; 2018 - 6,126,452"
    },
    GA: {
      name: "Georgia",
      description: "Population - 2010 - 9,711,810 ; 2018 - 10,519,475"
    },
    SC: {
      name: "South Carolina",
      description: "Population - 2010 - 4,635,656 ; 2018 - 5,084,127"
    },
    KY: {
      name: "Kentucky",
      description: "Population - 2010 - 4,348,200 ; 2018 - 4,468,402"
    },
    AL: {
      name: "Alabama",
      description: "Population - 2010 - 4,779,736 ; 2018 - 4,864,745"
    },
    LA: {
      name: "Louisiana",
      description: "Population - 2010 - 4,544,532 ; 2018 - 4,659,978"
    },
    MS: {
      name: "Mississippi",
      description: "Population - 2010 - 2,970,536 ; 2018 - 2,986,530"
    },
    IA: {
      name: "Iowa",
      description: "Population - 2010 - 3,050,767 ; 2018 - 3,156,145"
    },
    MN: {
      name: "Minnesota",
      description: "Population - 2010 - 5,310,843 ; 2018 - 5,611,179"
    },
    OK: {
      name: "Oklahoma",
      description: "Population - 2010 - 3,759,632 ; 2018 - 3,943,079"
    },
    TX: {
      name: "Texas",
      description: "Population - 2010 - 25,242,679 ; 2018 - 28,701,845"
    },
    NM: {
      name: "New Mexico",
      description: "Population - 2010 - 2,064,588 ; 2018 - 2,095,428"
    },
    KS: {
      name: "Kansas",
      description: "Population - 2010 - 2,858,213 ; 2018 - 2,911,505"
    },
    NE: {
      name: "Nebraska",
      description: "Population - 2010 - 1,829,536 ; 2018 - 1,929,268"
    },
    SD: {
      name: "South Dakota",
      description: "Population - 2010 - 816,165 ; 2018 - 882,235"
    },
    ND: {
      name: "North Dakota",
      description: "Population - 2010 - 674,710 ; 2018 - 760,077"
    },
    WY: {
      name: "Wyoming",
      description: "Population - 2010 - 564,483 ; 2018 - 577,737"
    },
    MT: {
      name: "Montana",
      description: "Population - 2010 - 990,722 ; 2018 - 1,062,305"
    },
    CO: {
      name: "Colorado",
      description: "Population - 2010 - 5,048,281 ; 2018 - 5,695,564"
    },
    UT: {
      name: "Utah",
      description: "Population - 2010 - 2,775,334 ; 2018 - 3,161,105"
    },
    AZ: {
      name: "Arizona",
      description: "Population - 2010 - 6,407,774 ; 2018 - 7,171,646"
    },
    NV: {
      name: "Nevada",
      description: "Population - 2010 - 2,702,464 ; 2018 - 3,034,392"
    },
    OR: {
      name: "Oregon",
      description: "Population - 2010 - 3,837,532 ; 2018 - 4,190,713"
    },
    WA: {
      name: "Washington",
      description: "Population - 2010 - 6,742,902 ; 2018 - 7,535,591"
    },
    CA: {
      name: "California",
      description: "Population - 2010 - 37,320,903 ; 2018 - 39,557,045"
    },
    MI: {
      name: "Michigan",
      description: "Population - 2010 - 9,877,535 ; 2018 - 9,995,915"
    },
    ID: {
      name: "Idaho",
      description: "Population - 2010 - 1,570,773 ; 2018 - 1,754,208"
    },
    GU: {
      hide: "yes"
    },
    VI: {
      hide: "yes"
    },
    PR: {
      hide: "yes"
    },
    MP: {
      hide: "yes"
    },
    AS: {
      hide: "yes"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  regions: {}
};