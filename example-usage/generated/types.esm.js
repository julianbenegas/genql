export default {
    "scalars": [
        3,
        5,
        8,
        12,
        13,
        14
    ],
    "types": {
        "Query": {
            "continents": {
                "type": 4,
                "args": {
                    "filter": [
                        1
                    ]
                }
            },
            "continent": {
                "type": 4,
                "args": {
                    "code": [
                        5,
                        "ID!"
                    ]
                }
            },
            "countries": {
                "type": 6,
                "args": {
                    "filter": [
                        10
                    ]
                }
            },
            "country": {
                "type": 6,
                "args": {
                    "code": [
                        5,
                        "ID!"
                    ]
                }
            },
            "languages": {
                "type": 7,
                "args": {
                    "filter": [
                        11
                    ]
                }
            },
            "language": {
                "type": 7,
                "args": {
                    "code": [
                        5,
                        "ID!"
                    ]
                }
            },
            "__typename": {
                "type": 3
            }
        },
        "ContinentFilterInput": {
            "code": {
                "type": 2
            },
            "__typename": {
                "type": 3
            }
        },
        "StringQueryOperatorInput": {
            "eq": {
                "type": 3
            },
            "ne": {
                "type": 3
            },
            "in": {
                "type": 3
            },
            "nin": {
                "type": 3
            },
            "regex": {
                "type": 3
            },
            "glob": {
                "type": 3
            },
            "__typename": {
                "type": 3
            }
        },
        "String": {},
        "Continent": {
            "code": {
                "type": 5
            },
            "name": {
                "type": 3
            },
            "countries": {
                "type": 6
            },
            "__typename": {
                "type": 3
            }
        },
        "ID": {},
        "Country": {
            "code": {
                "type": 5
            },
            "name": {
                "type": 3
            },
            "native": {
                "type": 3
            },
            "phone": {
                "type": 3
            },
            "continent": {
                "type": 4
            },
            "capital": {
                "type": 3
            },
            "currency": {
                "type": 3
            },
            "languages": {
                "type": 7
            },
            "emoji": {
                "type": 3
            },
            "emojiU": {
                "type": 3
            },
            "states": {
                "type": 9
            },
            "__typename": {
                "type": 3
            }
        },
        "Language": {
            "code": {
                "type": 5
            },
            "name": {
                "type": 3
            },
            "native": {
                "type": 3
            },
            "rtl": {
                "type": 8
            },
            "__typename": {
                "type": 3
            }
        },
        "Boolean": {},
        "State": {
            "code": {
                "type": 3
            },
            "name": {
                "type": 3
            },
            "country": {
                "type": 6
            },
            "__typename": {
                "type": 3
            }
        },
        "CountryFilterInput": {
            "code": {
                "type": 2
            },
            "currency": {
                "type": 2
            },
            "continent": {
                "type": 2
            },
            "__typename": {
                "type": 3
            }
        },
        "LanguageFilterInput": {
            "code": {
                "type": 2
            },
            "__typename": {
                "type": 3
            }
        },
        "CacheControlScope": {},
        "Upload": {},
        "Int": {}
    }
}