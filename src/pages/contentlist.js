import React from "react";

const Arr = [
    {
        id: 1,
        title: 'Nike Air Max 87 Orange',
        img: 'https://barnes.com.ua/image/cache/e46e9bf7fd34937735c66fa2addb4169-700x700.jpg',
        price: '99$'
    },
    {
        id: 2,
        title: 'Nike Air Max 87 Blue',
        img: 'https://scamper.com.ua/content/images/6/94854090907155_small11.jpeg',
        price: '89$'
    },
    {
        id: 3,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 4,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 5,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 6,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 7,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 8,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 9,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 10,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 11,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 12,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 13,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 14,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 15,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 16,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 17,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 18,
        title: 'Nike Air Max 87 Violet',
        img: 'https://krossovki.kiev.ua/upload/iblock/996/d03d3bae_ef93_11e6_80d9_5254a2013e80_cb01308d_e569_11e7_9101_00505600d2ea.jpeg',
        price: '959$'
    },
    {
        id: 19,
        title: 'Nike Air Max 87 Grey',
        img: 'http://chevli.com.ua/image/cache/data/Nike/Max%2087/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8%20Air%20Max%2087%20%D0%A1%D0%B5%D1%80%D1%8B%D0%B5%20%D0%BD%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%BE-500x500.jpg',
        price: '91$'
    }
];

export default Arr;