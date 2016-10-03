(function() {
  'use strict';

  angular
    .module('ngCalendar')
    .constant('EventsData', [{
                "id": "0",
                "name": "Serious business meet-up",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00",
                "showuntil": "20:00",
                "startdate": "2016-09-12",
                "enddate": "2016-09-30",
                "sellfrom": "2016-08-12",
                "selluntil": "2016-09-30",
                "images": [{
                    "src": "http://img13.deviantart.net/d715/i/2011/116/2/d/stock_business_people_group_by_stiegssen-d3ez9iw.jpg",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good guy",
                    "payment": {
                        "date": "2016-08-12",
                        "amount": 1
                    }
                }],
                "status": "planned",
                "type": "promoted",
                "sortorder": 2
            }, {
                "id": "1",
                "name": "Second serious business meet-up",
                "description": {
                  "short": "This is test promo event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "11:00",
                "showuntil": "20:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "http://img13.deviantart.net/d715/i/2011/116/2/d/stock_business_people_group_by_stiegssen-d3ez9iw.jpg",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good guy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 75
                    }
                }],
                "status": "planned",
                "type": "promoted",
                "sortorder": 2
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }, {
                "id": "3",
                "name": "Event3",
                "description": {
                  "short": "This is test event",
                  "long": "This is test event where we test cool stuff"
                },
                "showfrom": "10:00:00",
                "showuntil": "20:00:00",
                "startdate": "2016-10-12",
                "enddate": "2016-10-30",
                "sellfrom": "2016-04-12",
                "selluntil": "2016-10-30",
                "images": [{
                    "src": "",
                    "title": ""
                }],
                "prices": [{
                    "startprice": 1
                }, {
                    "middleprice": 2
                }, {
                    "endprice": 3
                }],
                "participants": [{
                    "name": "John Doe",
                    "age": 21,
                    "phone": "89029239234",
                    "description": "Good boy",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 1
                    }
                }, {
                    "name": "Jane Doe",
                    "age": 67,
                    "phone": "89029239234",
                    "description": "Old Lady",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 5
                    }
                }, {
                    "name": "Jamie Doe",
                    "age": 45,
                    "phone": "89029239234",
                    "description": "Nice fellow",
                    "payment": {
                        "date": "07-10-2016",
                        "amount": 40
                    }
                }],
                "status": "planned",
                "type": "important",
                "sortorder": 1
            }
        ])
})();

