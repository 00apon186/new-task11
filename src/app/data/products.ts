export type Product = {
  id: number;
  image: string[];
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  category1: string;
  brand: string;
  features: string[];
  ShortDescription: string[];
  LongDescription: string[];
  group: string;        // Example: "Kids", "Women"
  section?: string;      // Example: "Shop by Category", "Shop by Trends"
  subgroup?: string;
  subcategory:string;    // Optional: "Young Girls Clothing (3–7 Yrs)"
};

export const allProducts: Product[] = [
  {
    id: 1,
    brand: 'sss',
    category1: 'kids',
     subcategory:'party Dress',
    group: 'Kids',
    section: 'Shop by Category',
    image: ['/images/p21.jpg', '/images/p22.jpg', '/images/p23.jpg'],
    title: 'Floaty Lavender Floral Print Maxi Dress',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  {
    id: 2,
    brand: 'Aarong',
    category1: 'party dresses',
         subcategory:'party Dress',
    group: 'Kids',
    
  

  section: 'Shop by Category',
    image: ['/images/p24.jpg', '/images/p25.jpg', '/images/p26.jpg'],
    title: 'Casual Chic Rayon Mustard A-Line Top',
    price: 'Tk 1,002.11',
    oldPrice: 'Tk 1,432.20',
    discount: 'SAVE 30%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 3 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  // 🔁 Add more products here with appropriate group, section, and optional subgroup

 {
    id: 3,
    brand: 'sss',
    category1: 'kids',
         subcategory:'party Dress',
    group: 'Kids',
   section: 'Shop by Category',

    image: ['/images/p28.jpg', '/images/p27.jpg', '/images/p29.jpg'],
    title: 'Floaty Lavender Floral Print Maxi Dress',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  {
    id: 4,
    brand: 'Aarong',
    category1: 'party dresses',
         subcategory:'party Dress',
    group: 'Kids',
     subgroup: 'Young Girls Clothing (3–7 Yrs)',
  
    image: ['/images/p70.jpg', '/images/p71.jpg', '/images/p72.jpg'],
    title: 'Casual Chic Rayon Mustard A-Line Top',
    price: 'Tk 1,002.11',
    oldPrice: 'Tk 1,432.20',
    discount: 'SAVE 30%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 3 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  {
    id: 5,
    brand: 'aa',
    category1: 'kids',
         subcategory:'party Dress',
    group: 'kids',
       section: 'Shop by Category',
   
    image: ['/images/p31.jpg',
      '/images/p30.jpg',
 '/images/p32.jpg'
    ],
    title: 'Graceful Light Orange Straight Salwar',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },

  {
    id: 6,
    brand: 'aa',
      category1: 'women', 
           subcategory:'saree',
    group: 'women',
    section: 'Shop by Category',
  
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },
  {
    id: 7,
    brand: 'sss',
     category1: 'women', 
     subcategory:'party saree',
    group: 'women',
       subgroup: 'Young Girls Clothing (3–7 Yrs)',
  
    image: ['/images/product17.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful ',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
      features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

     ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },
  {
    id: 8,
    brand: 'sss',
    category1: 'women', 
    subcategory:'saree',
    group: 'women',
  
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/p94.jpg',
      '/images/p95.jpg',
 '/images/p96.jpg'
    ],
    title: 'Casual ',
    price: 'Tk 1,002.11',
    oldPrice: 'Tk 1,432.20',
    discount: 'SAVE 30%',
      features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

     ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],
    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },
  {
    id: 9,
    brand: 'sss',
     category1: 'women', 
     subcategory:'saree',
    group: 'women',
    
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/p97.jpg',
      '/images/p98.jpg',
 '/images/p99.jpg'
    ],
    title: 'Floaty',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

     ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },
  {
    id:10,
    brand: 'sss',
     category1: 'women', 
     subcategory:'top',
    group: 'women',
    
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/p100.jpg',
     '/images/p101.jpg',
 '/images/p102.jpg'
    ],
    title: 'Leaf Motif ',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

     ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },

  
   {
    id: 11,
    brand: 'sss',
    category1: 'kids',
    subcategory:'shirt',
    group: 'Kids',
    section: 'Shop by Category',
    image: ['/images/p36.jpg', '/images/p37.jpg', '/images/p38.jpg'],
    title: 'Floaty',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  {
    id: 12,
    brand: 'Aarong',
    category1: 'kids',
       subcategory:'party dresses',

    group: 'Kids',

    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/p73.jpg', '/images/p74.jpg', '/images/p75.jpg'],
    title: 'Casual Chic ',
    price: 'Tk 1,002.11',
    oldPrice: 'Tk 1,432.20',
    discount: 'SAVE 30%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 3 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  // 🔁 Add more products here with appropriate group, section, and optional subgroup

 {
    id: 13,
    brand: 'sss',
    category1: 'kids',
    subcategory:'Babys Accesories ',
    group: 'Kids',
 
      subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/p76.jpg', '/images/p77.jpg', '/images/p78.jpg'],
    title: 'Floaty Lavender',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  {
    id: 14,
    brand: 'Aarong',
    category1: 'party dresses',
        subcategory:'Babys Accesories ',
    group: 'Kids',
   
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/p62.jpg', '/images/p61.jpg', '/images/p63.jpg'],
    title: 'Casual Chic Rayon ',
    price: 'Tk 1,002.11',
    oldPrice: 'Tk 1,432.20',
    discount: 'SAVE 30%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 3 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },
  {
    id: 15,
    brand: 'aa',
    category1: 'kids',
        subcategory:'Babys Accesories ',
    group: 'kids',
     subgroup: 'Tween Girls Clothing (8-12 Yrs)',
   
    image: ['/images/p82.jpg',
      '/images/p83.jpg',
 '/images/p83.jpg'
    ],
    title: 'Graceful',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


  {
    id: 16,
    brand: 'sss',
    category1: 'kids',
      subcategory:'Babys Accesories ',
    group: 'Kids',
    subgroup: 'Tween Girls Clothing (8-12 Yrs)',
    image: ['/images/p85.jpg', '/images/p86.jpg', '/images/p87.jpg'],
    title: 'Floaty Lavender ',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },

  {
    id: 17,
    brand: 'sss',
    category1: 'kids',
       subcategory:'beauty',
    group: 'Kids',
    section: 'Shop by Trends',
    image: ['/images/p48.jpg',
      '/images/p49.jpg',
 '/images/p50.jpg'],
    title: 'Floaty Lavender ',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },

  {
    id: 18,
    brand: 'sss',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'Kids',
  subgroup: 'Tween Girls Clothing (8-12 Yrs)',
    image: ['/images/p88.jpg', '/images/p89.jpg', '/images/p90.jpg'],
    title: 'Floaty Lavender',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },

  {
    id: 19,
    brand: 'sss',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'Kids',
      subgroup: 'Tween Girls Clothing (8-12 Yrs)',
    image: ['/images/p91.jpg', '/images/p92.jpg', '/images/p93.jpg'],
    title: 'Floaty Lavender',
    price: 'Tk 2,149.02',
    oldPrice: 'Tk 3,152.57',
    discount: 'SAVE 32%',
    features: ['100% Original Product', 'Express Shipping', 'Cash on Delivery Available', 'Easy return and exchange within 4 days'],
    ShortDescription: ['Product Type: Unstitched Georgette salwar kameez', 'Main Material: Weightless Georgette embroidery work', 'Dupatta: Waightless Georgette embroidery work', 'Work : embroidery work.', 'Salwar : butterfly fabrics', 'Look : 100 % like as catelogue.', 'Product condition: unstitched.', 'Free Size Body And Long', 'Hevy embroidery work', 'Quality : High quality product', 'Stylish and fashionable'],
    LongDescription: ['New & Fashionable Collection', 'Unstitched', 'Sequence & Embroidery Work Four Piece', 'Body Fabrics : Georgette', 'Dupatta: Georgette', 'Shalwar : Butter Silk', 'Inner: Butter Silk', 'Body Long : 46+', 'Body: Free Size', '100% Color and Quality Dress', 'Color As same picture.']
  },

  
 {
    id: 20,
    brand: 'aa',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'kids',
  
    subgroup: 'Tween Girls Clothing (8-12 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful Light',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



  {
    id: 21,
    brand: 'aa',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'kids',
   
    subgroup: 'Tween Girls Clothing (8-12 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful Light',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


  {
    id: 22,
    brand: 'aa',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'kids',

    subgroup: 'Tween Girls Clothing (8-12 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful ',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



  {
    id: 23,
    brand: 'aa',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'kids',
    
   subgroup: 'Tween Girls Clothing (8-12 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


  {
    id: 24,
    brand: 'aa',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'kids',

      subgroup: 'Tween Girls Clothing (8-12 Yrs)',
  
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful Light',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



  {
    id: 25,
    brand: 'aa',
    category1: 'kids',
          subcategory:'kids Shoes',
    group: 'kids',
  
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/p79.jpg',
      '/images/p80.jpg',
 '/images/p81.jpg'
    ],
    title: 'Graceful Light',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



  {
    id: 26,
    brand: 'aa',
    category1: 'kids',
       subcategory:'party dresses',
    group: 'kids',
  
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



  {
    id: 27,
    brand: 'aa',
    category1: 'kids',
       subcategory:'kids Shoes',
    group: 'kids',
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Graceful',
    price: 'Tk 4,729.57',
    oldPrice: 'Tk 7,166.76',
    discount: 'SAVE 34%',
    features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],

    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



  {
    id: 28,
    brand: 'aa',
      category1: 'women', 
         subcategory:'saree',
    group: 'women',
    section: 'Shop by Category',
  
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },

  {
    id: 29,
    brand: 'aa',
      category1: 'women', 
        subcategory:'saree',
    group: 'women',

    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf Motif Printed Pure Cotton Straight Kurta',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


  {
    id: 30,
    brand: 'aa',
      category1: 'women', 
        subcategory:'saree',
    group: 'women',
  
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf Motif Printed Pure Cotton Straight Kurta',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },

  {
    id: 31,
    brand: 'aa',
      category1: 'women', 
        subcategory:'saree',
    group: 'women',
 
    subgroup: 'Young Girls Clothing (3–7 Yrs)',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf Motif Printed Pure Cotton Straight Kurta',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },

   {
    id: 32,
    brand: 'aa',
      category1: 'women', 
        subcategory:'saree',
    group: 'women',
  section: 'Shop by Trends',
   
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf Motif Printed Pure Cotton Straight Kurta',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


   {
    id: 33,
    brand: 'aa',
      category1: 'women', 
        subcategory:'saree',
    group: 'women',
  section: 'Shop by Trends',
   
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf Motif Printed Pure Cotton Straight Kurta',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


   {
    id: 34,
    brand: 'aa',
      category1: 'women', 
        subcategory:'saree',
    group: 'women',

    section: 'Shop by Category',
    image: ['/images/product3.jpg',
      '/images/product1.jpg',
 '/images/product1.jpg'
    ],
    title: 'Leaf',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



   {
    id: 35,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'party ',
    group: 'kids',
   section: 'Shop by Category',
  
    image: ['/images/p40.jpg',
      '/images/p39.jpg',
 '/images/p41.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },




  {
    id: 36,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'Tween Babys Clothing  ',
    group: 'kids',
   section: 'Shop by Category',
  
    image: ['/images/p42.jpg',
      '/images/p43.jpg',
 '/images/p44.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


{
    id: 37,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'Tween Babys Clothing ',
    group: 'kids',
   section: 'Shop by Category',
  
    image: ['/images/p51.jpg',
      '/images/p52.jpg',
 '/images/p53.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


{
    id: 38,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'Tween Babys Clothing ',
    group: 'kids',
   section: 'Shop by Category',
  
    image: ['/images/p45.jpg',
      '/images/p36.jpg',
 '/images/p47.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },






  {
    id: 39,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'Babys Accesories ',
    group: 'kids',
 
    section: 'Shop by Trends',
  
    image: ['/images/p64.jpg',
      '/images/p65.jpg',
 '/images/p66.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },



  {
    id: 40,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'Tween Babys Clothing ',
    group: 'kids',
   section: 'Shop by Category',
  
    image: ['/images/p45.jpg',
      '/images/p36.jpg',
 '/images/p47.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },




  {
    id: 41,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'Babys Shoes ',
    group: 'kids',
   section: 'Shop by Category',
  
    image: ['/images/p67.jpg',
      '/images/p68.jpg',
 '/images/p69.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },




  {
    id: 42,
    brand: 'aa',
      category1: 'kids', 
        subcategory:'Tween Babys Clothing ',
    group: 'kids',
   section: 'Shop Trends',
  
    image: ['/images/p45.jpg',
      '/images/p36.jpg',
 '/images/p47.jpg'
    ],
    title: 'Leaf Motif',
    price: 'Tk 3,152.57',
    oldPrice: 'Tk 4,586.21',
    discount: 'SAVE 31%',
     features: [
      '100% Original Product',
      'Express Shipping',
      'Cash on Delivery Available',
      'Easy return and exchange within 3 days'
    ],
    ShortDescription:['Product Type: Unstitched Georgette salwar kameez',

'Main Material: Weightless Georgette embroidery work',
'Dupatta: Waightless Georgette embroidery work',

'Work : embroidery work.',

'Salwar : butterfly fabrics',

'Look : 100 % like as catelogue.',

'Product condition: unstitched.',

'Free Size Body And Long',

'Hevy embroidery work',

'Quality : High quality product',

'Stylish and fashionable'

   ],

    LongDescription:['New & Fashionable Collection',
'Unstitched',
'Sequence & Embroidery Work Four Piece',
'Body Fabrics : Georgette',
'Dupatta: Georgette',
'Shalwar : Butter Silk',
'Inner: Butter Silk',
'Body Long : 46+',
'Body: Free Size',
'100% Color and Quality Dress',
'Color As same picture.'

]
  },


];




























