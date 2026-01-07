var baseJSON = {
  "version": 8,
  "name": "Klokantech Basic",
  "metadata": {
    "mapbox:autocomposite": false,
    "mapbox:type": "template",
    "maputnik:renderer": "mbgljs",
    "openmaptiles:version": "3.x",
    "openmaptiles:mapbox:owner": "openmaptiles",
    "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t"
  },
  "center": [
    8.54806714892635,
    47.37180823552663
  ],
  "zoom": 12.241790506353492,
  "bearing": 0,
  "pitch": 0,
  "sources": {
    "openmaptiles": {
      "type": "vector",
      "url": "https://maps.zoho.com/vector/data/v3.json"
    }
  },
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#ffffff"
      }
    },
    {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": [
        "==",
        "$type",
        "Polygon"
      ],
      "paint": {
        "fill-color": "#dbe1e4"
      }
    },
    {
      "id": "admin_sub",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "minzoom": 2,
      "filter": [
        "in",
        "admin_level",
        4,
        6,
        8
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#d3d7db",
        "line-dasharray": [
          2,
          1
        ]
      }
    },
    {
      "id": "admin_country",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "<=",
          "admin_level",
          2
        ],
        [
          "!=",
          "name_en",
          "Turkish Republic Of Northern Cyprus"
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": "#d3d7db",
        "line-width": {
          "base": 1.3,
          "stops": [
            [
              3,
              0.5
            ],
            [
              22,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "country_boundary",
      "type": "line",
      "minzoom": 2,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#d3d7db",
        "line-width": {
          "base": 0.5,
          "stops": [
            [
              0,
              0.5
            ],
            [
              1,
              0.5
            ],
            [
              2,
              0.5
            ],
            [
              3,
              1
            ],
            [
              4,
              1.8
            ],
            [
              5,
              2.1
            ]
          ]
        }
      },
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ],
        [
          "!=",
          "maritime",
          1
        ],
        [
          "!=",
          "disputed",
          1
        ]
      ]
    },
    {
      "id": "highway-motorway-link-casing",
      "type": "line",
      "minzoom": 8,
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-link-casing",
      "type": "line",
      "minzoom": 8,
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              3
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-minor-casing",
      "type": "line",
      "minzoom": 8,
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!=",
            "brunnel",
            "tunnel"
          ],
          [
            "in",
            "class",
            "minor",
            "service",
            "track"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-opacity": {
          "stops": [
            [
              12,
              0
            ],
            [
              12.5,
              1
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.5
            ],
            [
              13,
              1
            ],
            [
              13.5,
              2
            ],
            [
              14,
              4
            ],
            [
              20,
              15
            ]
          ]
        }
      }
    },
    {
      "id": "highway-secondary-tertiary-casing",
      "type": "line",
      "minzoom": 8,
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.5
            ],
            [
              20,
              17
            ]
          ]
        }
      }
    },
    {
      "id": "highway-trunk-primary-casing",
      "type": "line",
      "minzoom": 8,
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary",
          "trunk"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway-casing",
      "type": "line",
      "minzoom": 8,
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.4
            ],
            [
              6,
              0.6
            ],
            [
              7,
              1.5
            ],
            [
              20,
              22
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway-link",
      "type": "line",
      "minzoom": 8,
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "==",
          "class",
          "motorway_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-link",
      "type": "line",
      "minzoom": 8,
      "metadata": {
        "mapbox:group": "1444849345966.4436"
      },
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary_link",
          "tertiary_link",
          "trunk_link"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#dee1e4",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12.5,
              0
            ],
            [
              13,
              1.5
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-minor",
      "type": "line",
      "minzoom": 10,
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!=",
            "brunnel",
            "tunnel"
          ],
          [
            "in",
            "class",
            "minor",
            "service",
            "track"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-opacity": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13.5,
              0
            ],
            [
              14,
              2.5
            ],
            [
              20,
              11.5
            ]
          ]
        }
      }
    },
    {
      "id": "highway-secondary-tertiary",
      "type": "line",
      "minzoom": 8,
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "!in",
          "brunnel",
          "bridge",
          "tunnel"
        ],
        [
          "in",
          "class",
          "secondary",
          "tertiary"
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#eceff2",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              8,
              0.5
            ],
            [
              20,
              13
            ]
          ]
        }
      }
    },
    {
      "id": "highway-trunk-primary",
      "type": "line",
      "minzoom": 8,
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "in",
            "class",
            "primary",
            "trunk"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#eceff2",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "highway-motorway",
      "type": "line",
      "minzoom": 8,
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "all",
          [
            "!in",
            "brunnel",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ]
      ],
      "layout": {
        "line-cap": "round",
        "line-join": "round",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "#eceff2",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              6.5,
              0
            ],
            [
              7,
              0.5
            ],
            [
              20,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "poi_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "rank",
          1
        ]
      ],
      "layout": {
        "text-size": 11,
        "text-font": [
          "Metropolis Regular"
        ],
        "visibility": "visible",
        "text-offset": [
          0,
          0.5
        ],
        "icon-size": 1,
        "text-anchor": "top",
        "text-field": "{name_en}",
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#5e5e5e",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "place_label_other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 5,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "!=",
          "class",
          "city"
        ],
        [
          "!=",
          "class",
          "country"
        ],
        [
          "!=",
          "name_en",
          "Turkish Republic Of Northern Cyprus"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Metropolis Regular"
        ],
        "text-max-width": 6,
        "text-size": {
          "stops": [
            [
              5,
              13.5
            ],
            [
              12,
              16
            ]
          ]
        },
        "visibility": "visible",
        "text-anchor": "center"
      },
      "paint": {
        "text-color": "#7b838b",
        "text-halo-blur": 0,
        "text-halo-width": 1
      }
    },
    {
      "id": "place_label_city",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 5,
      "maxzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "city"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Metropolis Regular"
        ],
        "text-max-width": 10,
        "text-size": {
          "stops": [
            [
              5,
              13.5
            ],
            [
              6,
              15
            ],
            [
              7,
              17
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#7b838b",
        "text-halo-blur": 0,
        "text-halo-width": 1
      }
    },
    {
      "id": "place-state",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 1,
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "class",
          "state"
        ]
      ],
      "layout": {
        "text-font": [
          "Metropolis Semi Bold"
        ],
        "text-field": "{name_en}",
        "text-size": {
          "stops": [
            [
              2,
              12
            ],
            [
              3,
              13
            ],
            [
              4,
              12
            ],
            [
              5,
              14.5
            ],
            [
              6,
              16.5
            ],
            [
              7,
              19
            ],
            [
              8,
              20
            ]
          ]
        },
        "text-max-width": 12,
        "text-anchor": "center"
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              3,
              "#bdc4ca"
            ],
            [
              4,
              "#a8aeb5"
            ],
            [
              5,
              "#bdc4ca"
            ],
            [
              6,
              "#bdc4ca"
            ],
            [
              7,
              "#d6dce1"
            ],
            [
              8,
              "#e9edf2"
            ]
          ]
        },
        "text-halo-width": 1
      }
    },
    {
      "id": "country_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 3,
      "maxzoom": 13,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "country"
        ],
        [
          "!=",
          "name_en",
          "Turkish Republic Of Northern Cyprus"
        ]
      ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
          "Metropolis Bold"
        ],
        "text-transform": "uppercase",
        "text-max-width": 8,
        "text-size": {
          "stops": [
            [
              2,
              10
            ],
            [
              3,
              12
            ],
            [
              4,
              14
            ],
            [
              5,
              18
            ],
            [
              6,
              22
            ],
            [
              7,
              24
            ],
            [
              8,
              28
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              0,
              "#969ea6"
            ],
            [
              1,
              "#969ea6"
            ],
            [
              2,
              "#969ea6"
            ],
            [
              3,
              "#a8aeb5"
            ],
            [
              4,
              "#bdc4ca"
            ],
            [
              5,
              "#bdc4ca"
            ],
            [
              6,
              "#d6dce1"
            ],
            [
              7,
              "#e9edf2"
            ],
            [
              8,
              "#e9edf2"
            ]
          ]
        },
        "text-halo-color": "rgba(255,255,255,0.8)",
        "text-halo-width": 1,
        "text-halo-blur": 0
      }
    },
    {
      "id": "country_label_codes",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 2,
      "maxzoom": 3,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "country"
        ],
        [
          "!=",
          "name_en",
          "Turkish Republic Of Northern Cyprus"
        ]
      ],
      "layout": {
        "text-field": "{iso_a2}",
        "text-font": [
          "Metropolis Bold"
        ],
        "text-transform": "uppercase",
        "text-max-width": 8,
        "text-size": {
          "stops": [
            [
              2,
              12.5
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#969ea6",
        "text-halo-width": 1,
        "text-halo-color": "rgba(255,255,255,0.8)"
      }
    },
    {
      "id": "place-village",
      "type": "symbol",
      "minzoom": 13,
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "==",
        "class",
        "village"
      ],
      "layout": {
        "text-font": [
          "Metropolis Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              13,
              14
            ],
            [
              15,
              18
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#7b838b",
        "text-halo-width": 1
      }
    },
    {
      "id": "place-town",
      "type": "symbol",
      "minzoom": 10,
      "source": "openmaptiles",
      "source-layer": "place",
      "filter": [
        "==",
        "class",
        "town"
      ],
      "layout": {
        "text-font": [
          "Metropolis Regular"
        ],
        "text-size": {
          "base": 1.2,
          "stops": [
            [
              10,
              14
            ],
            [
              12,
              20
            ],
            [
              15,
              25
            ]
          ]
        },
        "text-field": "{name_en}",
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#7b838b",
        "text-halo-width": 1
      }
    },
    {
      "id": "place-continent",
      "type": "symbol",
      "metadata": {
        "mapbox:group": "1444849242106.713"
      },
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 2,
      "filter": [
        "==",
        "class",
        "continent"
      ],
      "layout": {
        "text-font": [
          "Metropolis Bold"
        ],
        "text-field": "{name_en}",
        "text-size": 12,
        "text-max-width": 6.25,
        "text-transform": "uppercase",
        "text-anchor": "center"
      },
      "paint": {
        "text-color": "#969ea6",
        "text-halo-width": 1
      }
    },
    {
      "id": "water-name-ocean",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "water_name",
      "filter": [
        "all",
        [
          "==",
          "$type",
          "Point"
        ],
        [
          "==",
          "class",
          "ocean"
        ]
      ],
      "layout": {
        "text-font": [
          "Metropolis Medium Italic"
        ],
        "text-size": 11,
        "text-field": "{name_en}"
      },
      "paint": {
        "text-color": "#969ea6"
      }
    },
    {
      "id": "highway-name-path",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "==",
        "class",
        "path"
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Metropolis Bold"
        ],
        "text-field": "{name}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-halo-color": "#f8f4f0",
        "text-color": "#bdc4ca",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-minor",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "==",
          "$type",
          "LineString"
        ],
        [
          "in",
          "class",
          "minor",
          "service",
          "track"
        ]
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Metropolis Regular"
        ],
        "text-field": "{name}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-color": "#b0b6bb",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-name-major",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "in",
        "class",
        "primary",
        "secondary",
        "tertiary",
        "trunk"
      ],
      "layout": {
        "text-size": {
          "base": 1,
          "stops": [
            [
              13,
              12
            ],
            [
              14,
              13
            ]
          ]
        },
        "text-font": [
          "Metropolis Bold"
        ],
        "text-field": "{name}",
        "symbol-placement": "line",
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-color": "#b0b6bb",
        "text-halo-color": "#fff",
        "text-halo-width": 1
      }
    },
    {
      "id": "highway-shield",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "minzoom": 8,
      "filter": [
        "all",
        [
          "<=",
          "ref_length",
          6
        ],
        [
          "==",
          "$type",
          "LineString"
        ]
      ],
      "layout": {
        "text-size": 11,
        "icon-image": "motorway_{ref_length}",
        "icon-rotation-alignment": "viewport",
        "symbol-spacing": 500,
        "text-font": [
          "Metropolis Semi Bold"
        ],
        "symbol-placement": {
          "base": 1,
          "stops": [
            [
              10,
              "point"
            ],
            [
              11,
              "line"
            ]
          ]
        },
        "text-rotation-alignment": "viewport",
        "icon-size": 0.85,
        "text-field": "{ref}"
      },
      "paint": {
        "text-color": "#b0b6bb",
        "text-halo-color": "#fff"
      }
    }
  ],
  "glyphs": "https://css.zohostatic.com/maps/v8_1_8/fonts/{fontstack}/{range}.pbf"
}