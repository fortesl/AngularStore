/**
 * Created by fortesl on 9/4/2014.
 */

(function() {
    'use strict';
    
    angular.module('productServiceMock', [])
        .factory('ProductService', [function() {
            return {
                getList: function() {
                    return [
                        {
                            id: 'Bloodstone',
                            name:'Bloodstone',
                            description:'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
                            shine:9,
                            price:22.9,
                            rarity:6,
                            color:'#EEE',
                            faces:12,
                            images:
                                [
                                    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdfQL4_nZKGYSD8xegTR7KyZ7wVY-Wtyq_1bhkfhk481vJdZgkHQ',
                                    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThOMbEA3jCMpbo-KI6PoMxPH7k05Glkps6eCUFz7M91bXsses7LA',
                                    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHFF1Eeh5DQqtrvNn7Fheh6FnD5z181SfJH2AVnv3_wcrt3jdn'
                                ],
                            reviews:
                                [
                                    {stars:3,body:'I think this gem was just OK, could honestly use more shine, IMO.',author:'JimmyDean@example.org',createdOn:1397490980837},
                                    {stars:4,body:'Any gem with 12 faces is for me!',author:'gemsRock@example.org',createdOn:1397490980837}
                                ]
                        },
                        {
                            id: 'Zircon',
                            name:'Zircon',
                            description:'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
                            shine:70,
                            price:50,
                            rarity:2,
                            color:'#000',
                            faces:6,
                            images:
                                [
                                    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtAMTNJYRAI92W78iyv_5ZNM7uV6AgnJIAtJe_kUMnrM4MX3YbXg',
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p5LJiiup2R-zIXku_hK3HrXOXUA6xH8i_z__V2gN2gLToHGjSQ',
                                    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSy24Dx0EIdLX9mjPaeMtJZT4c7KB6nqPbvBu_gn0hOvgo5sHod'],
                            reviews:
                                [
                                    {stars:1,body:'This gem is WAY too expensive for its rarity value.',author:'turtleguyy@example.org',createdOn:1397490980837},
                                    {stars:1,body:'BBW: High Shine != High Quality.',author:'LouisW407@example.org',createdOn:1397490980837},
                                    {stars:1,body:'Don\'t waste your rubles!',author:'nat@example.org',createdOn:1397490980837}
                                ]
                        }
                    ];
                },
                getDetail: function() {
                    return {
                        id: 'Zircon',
                        name:'Zircon',
                        description:'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
                        shine:70,
                        price:50,
                        rarity:2,
                        color:'#000',
                        faces:6,
                        images:
                            [
                                'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTtAMTNJYRAI92W78iyv_5ZNM7uV6AgnJIAtJe_kUMnrM4MX3YbXg',
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p5LJiiup2R-zIXku_hK3HrXOXUA6xH8i_z__V2gN2gLToHGjSQ',
                                'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSy24Dx0EIdLX9mjPaeMtJZT4c7KB6nqPbvBu_gn0hOvgo5sHod'
                            ],
                        reviews:
                            [
                                {stars:1,body:'This gem is WAY too expensive for its rarity value.',author:'turtleguyy@example.org',createdOn:1397490980837},
                                {stars:1,body:'BBW: High Shine != High Quality.',author:'LouisW407@example.org',createdOn:1397490980837},
                                {stars:1,body:'Don\'t waste your rubles!',author:'nat@example.org',createdOn:1397490980837}
                            ]
                    };
                }
            };
        }]);
})();
