---
id: doc3
title: Services
---

All calls requires the `x-access-token` on the header which is the token you get when you login.

Example:

**Headers** : `{ x-access-token: [TOKEN] }`

# Fixed Service (Get jokes)

This services pulls all jokes from this first endpoint on the test: [https://official-joke-api.appspot.com](https://official-joke-api.appspot.com)

**URL** : `/v1/jokes/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Headers** : `{ x-access-token: [TOKEN] }`

## Success Responses

**Condition** : Empty response from the endpoint.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : Successful response.

**Code** : `200 OK`

**Content** : Response should be in this format `IJokesResponse` which translates to an array of Jokes `Array<IJoke>`

```json
    export interface IJokesResponse {
    status?: number;
    data?: Array<IJoke>;
    }

    export interface IJoke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
    }
```

**Response Example**

```json
{
  "data": [
    {
      "id": 123,
      "type": "general",
      "setup": "What kind of dog lives in a particle accelerator?",
      "punchline": "A Fermilabrador"
    }
  ]
}
```

# Random Service (KITSU DOC)

This services pulls updates from the second endpoint in the test spec: [https://kitsu.io/api/edge](https://kitsu.io/api/edge)

**URL** : `/v1/anime/`

**Method** : `GET`

**Auth required** : YES

**Permissions required** : None

**Headers** : `{ x-access-token: [TOKEN] }`

## Success Responses

**Condition** : Empty response from the endpoint.

**Code** : `200 OK`

**Content** : `{[]}`

### OR

**Condition** : Successful response.

**Code** : `200 OK`

**Content** : Response should be in this format `IAnimeResponse` which translates to an array of Animes `Array<IAnime>`

```json
    export interface IAnime {
  id: string;
  type: string;
  links: {
    self: string;
  };
  punchline: string;
  attributes: IAnimeAttributes;
}


export interface IAnimeAttributes {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    description: string;
    coverImageTopOffset: string;
    canonicalTitle: string;
    averageRating: string;
    userCount: number;
    posterImage: {
        tiny: string;
        small: string;
        medium: string;
    }
    coverImage:{
        tiny: string;
    }
}


export interface IAnimeResponse {
    message?: string;
    data?: Array<IAnime>;
  }
```

**Response Example**

```json
{
    "message": "Success",
    "data": {
        "data": [
            {
                "id": "1",
                "type": "anime",
                "links": {
                    "self": "https://kitsu.io/api/edge/anime/1"
                },
                "attributes": {
                    "createdAt": "2013-02-20T16:00:13.609Z",
                    "updatedAt": "2021-03-02T11:11:40.823Z",
                    "slug": "cowboy-bebop",
                    "synopsis": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
                    "description": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\n\n(Source: MAL Rewrite)",
                    "coverImageTopOffset": 400,
                    "titles": {
                        "en": "Cowboy Bebop",
                        "en_jp": "Cowboy Bebop",
                        "ja_jp": "カウボーイビバップ"
                    },
                    "canonicalTitle": "Cowboy Bebop",
                    "abbreviatedTitles": [
                        "COWBOY BEBOP"
                    ],
                    "averageRating": "82.38",
                    "ratingFrequencies": {
                        "2": "3687",
                        "3": "55",
                        "4": "413",
                        "5": "32",
                        "6": "177",
                        "7": "36",
                        "8": "3519",
                        "9": "43",
                        "10": "721",
                        "11": "62",
                        "12": "2268",
                        "13": "133",
                        "14": "7477",
                        "15": "332",
                        "16": "7775",
                        "17": "673",
                        "18": "9508",
                        "19": "652",
                        "20": "32825"
                    },
                    "userCount": 121662,
                    "favoritesCount": 4580,
                    "startDate": "1998-04-03",
                    "endDate": "1999-04-24",
                    "nextRelease": null,
                    "popularityRank": 31,
                    "ratingRank": 100,
                    "ageRating": "R",
                    "ageRatingGuide": "17+ (violence & profanity)",
                    "subtype": "TV",
                    "status": "finished",
                    "tba": null,
                    "posterImage": {
                        "tiny": "https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1597604210",
                        "small": "https://media.kitsu.io/anime/poster_images/1/small.jpg?1597604210",
                        "medium": "https://media.kitsu.io/anime/poster_images/1/medium.jpg?1597604210",
                        "large": "https://media.kitsu.io/anime/poster_images/1/large.jpg?1597604210",
                        "original": "https://media.kitsu.io/anime/poster_images/1/original.jpg?1597604210",
                        "meta": {
                            "dimensions": {
                                "tiny": {
                                    "width": 110,
                                    "height": 156
                                },
                                "small": {
                                    "width": 284,
                                    "height": 402
                                },
                                "medium": {
                                    "width": 390,
                                    "height": 554
                                },
                                "large": {
                                    "width": 550,
                                    "height": 780
                                }
                            }
                        }
                    },
                    "coverImage": {
                        "tiny": "https://media.kitsu.io/anime/cover_images/1/tiny.jpg?1597604215",
                        "small": "https://media.kitsu.io/anime/cover_images/1/small.jpg?1597604215",
                        "large": "https://media.kitsu.io/anime/cover_images/1/large.jpg?1597604215",
                        "original": "https://media.kitsu.io/anime/cover_images/1/original.jpg?1597604215",
                        "meta": {
                            "dimensions": {
                                "tiny": {
                                    "width": 840,
                                    "height": 200
                                },
                                "small": {
                                    "width": 1680,
                                    "height": 400
                                },
                                "large": {
                                    "width": 3360,
                                    "height": 800
                                }
                            }
                        }
                    },
                    "episodeCount": 26,
                    "episodeLength": 25,
                    "totalLength": 626,
                    "youtubeVideoId": "qig4KOK2R2g",
                    "showType": "TV",
                    "nsfw": false
                },
                "relationships": {
                    "genres": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/genres",
                            "related": "https://kitsu.io/api/edge/anime/1/genres"
                        }
                    },
                    "categories": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/categories",
                            "related": "https://kitsu.io/api/edge/anime/1/categories"
                        }
                    },
                    "castings": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/castings",
                            "related": "https://kitsu.io/api/edge/anime/1/castings"
                        }
                    },
                    "installments": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/installments",
                            "related": "https://kitsu.io/api/edge/anime/1/installments"
                        }
                    },
                    "mappings": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/mappings",
                            "related": "https://kitsu.io/api/edge/anime/1/mappings"
                        }
                    },
                    "reviews": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/reviews",
                            "related": "https://kitsu.io/api/edge/anime/1/reviews"
                        }
                    },
                    "mediaRelationships": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/media-relationships",
                            "related": "https://kitsu.io/api/edge/anime/1/media-relationships"
                        }
                    },
                    "characters": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/characters",
                            "related": "https://kitsu.io/api/edge/anime/1/characters"
                        }
                    },
                    "staff": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/staff",
                            "related": "https://kitsu.io/api/edge/anime/1/staff"
                        }
                    },
                    "productions": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/productions",
                            "related": "https://kitsu.io/api/edge/anime/1/productions"
                        }
                    },
                    "quotes": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/quotes",
                            "related": "https://kitsu.io/api/edge/anime/1/quotes"
                        }
                    },
                    "episodes": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/episodes",
                            "related": "https://kitsu.io/api/edge/anime/1/episodes"
                        }
                    },
                    "streamingLinks": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/streaming-links",
                            "related": "https://kitsu.io/api/edge/anime/1/streaming-links"
                        }
                    },
                    "animeProductions": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/anime-productions",
                            "related": "https://kitsu.io/api/edge/anime/1/anime-productions"
                        }
                    },
                    "animeCharacters": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/anime-characters",
                            "related": "https://kitsu.io/api/edge/anime/1/anime-characters"
                        }
                    },
                    "animeStaff": {
                        "links": {
                            "self": "https://kitsu.io/api/edge/anime/1/relationships/anime-staff",
                            "related": "https://kitsu.io/api/edge/anime/1/anime-staff"
                        }
                    }
                }
            }
        ]
    }
}
```
