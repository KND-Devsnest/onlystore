// Disclaimer - This data is collected from Amazon.com manually and it is intended to be used for learning purposes only.

// categories an Array of Objects containing the categories
// and the products Array of Objects containing the products
// Total Categories: 5
// Total Products: 5 * 5 = 25

// Contributed by Shubham Lingayat : https://seebham.codes https://twitter.com/seebham

const structureOfCategoryData = [
  // Category 1
  {
    title: "", // title of category,
    keywords: [], // keywords of category,
    filters: [], // array of filter objects for the category
  },
  {}, // Category 2 ...
];

// Structure of filter array
const filtersStructure = [
  // Filter 1
  {
    filterName: "", // title of filter
    filterList: ["", ""], // array of filter values of type String
  },
  {}, // Filter 2 ...
];

// Structure of product array
const productsStructure = [
  // Product 1
  {
    filter1: "", // filter1 value
    filter2: "", // filter2 value
    title: "", // title of product
    category: "", // category of product
    price: 1, // price of product in INR
    imgs: ["", ""], // array of images of product
    specs: ["", ""], // Array or String of specs of product -> If Array, then render as list else if String, then render as single line
    inStock: 20, // quantity in stock of product -> If 0, then hide from the store, or less than 10, then show a "Very few left" or play with this value
    eta: 20, // estimated time of arrival of product in mins
    id: "", // unique id of product
    rating: 0.0, // rating of product
  },
];

// Actual Data
const categories = [
  {
    title: "Mobiles",
    keywords: [],
    filters: [
      {
        filterName: "Brand",
        filterList: ["Apple", "Samsung", "Redmi", "Jio", "OnePlus"],
      },
      {
        filterName: "RAM",
        filterList: ["4 MB", "2 GB", "6 GB", "8 GB"],
      },
    ],
  },
  {
    title: "Books",
    keywords: "",
    filters: [
      {
        filterName: "Language",
        filterList: ["English", "Hindi", "Marathi"],
      },
      {
        filterName: "Genre",
        filterList: ["Fiction", "Historical", "Mystery", "Romance"],
      },
    ],
  },
  {
    title: "Clothings",
    keywords: "",
    filters: [
      {
        filterName: "For",
        filterList: ["Kids", "Men", "Women"],
      },
    ],
  },
  {
    title: "Beauty",
    keywords: "",
    filters: [
      {
        filterName: "Type",
        filterList: ["Bath and Body", "Fragrance", "Skin Care", "Hair Care"],
      },
    ],
  },
  {
    title: "Furniture",
    keywords: "",
    filters: [
      {
        filterName: "Type",
        filterList: ["Office Chair", "Desk", "Beds", "Sofas", "Wardrobes"],
      },
    ],
  },
];

// Products
export const products = [
  {
    Brand: "Redmi",
    RAM: "2 GB", // filters
    title: "Redmi 9A (Nature Green, 2GB RAM, 32GB Storage)",
    category: "Mobiles",
    price: 6999,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/redmi9A1.jpg",
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/redmi9A2.jpg",
    ],
    specs: [
      // Always check whether this is Array or String, if Array -> Bulleded List else if String -> Para
      "13MP rear camera with AI portrait, AI scene recognition, HDR, pro mode | 5MP front camera.",
      "16.58 centimeters (6.53 inch) HD+ multi-touch capacitive touchscreen with 1600 x 720 pixels resolution, 268 ppi pixel density and 20:9 aspect ratio",
      "Memory, Storage & SIM: 2GB RAM, 32GB internal memory expandable up to 512GB | Dual SIM (nano+nano) + Dedicated SD card slot",
      "Android v10 operating system with upto 2.0GHz clock speed Mediatek Helio G25 octa core processor",
      "5000mAH lithium-polymer large battery with 10W wired charger in-box",
    ],
    inStock: 40, // if less than 10, then display "Only {9} left!", else don't show anything.
    eta: 30, // in mins
    id: "m1",
    rating: 4.2,
  },
  {
    Brand: "Samsung",
    RAM: "6 GB",
    title: "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)",
    category: "Mobiles",
    price: 14999,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/SamsungM311.jpg",
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/SamsungM312.jpg",
    ],
    specs: [
      "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera",
      "6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support",
      "Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM",
      "6000 mAh Battery",
    ],
    inStock: 50,
    eta: 20,
    id: "m2",
    rating: 4.7,
  },
  {
    Brand: "Apple",
    RAM: "6 GB",
    title: "Apple iPhone 12 Pro Max (128GB)",
    category: "Mobiles",
    price: 119999,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/iphone12M1.jpg",
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/iphone12M2.jpg",
    ],
    specs: [
      "6.7-inch (17 cm diagonal) Super Retina XDR display",
      "Ceramic Shield, tougher than any smartphone glass",
      "A14 Bionic chip, the fastest chip ever in a smartphone",
      "Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording",
    ],
    inStock: 1,
    eta: 5,
    id: "m3",
    rating: 4.3,
  },
  {
    Brand: "OnePlus",
    RAM: "8 GB",
    title: "OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)",
    category: "Mobiles",
    price: 24999,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/oneplusN1.jpg",
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/oneplusN2.jpg",
    ],
    specs: [
      "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps",
      "6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution | 410ppi",
      "Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system",
      "Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM",
    ],
    inStock: 5,
    eta: 10,
    id: "m4",
    rating: 4.9,
  },
  {
    Brand: "Jio",
    RAM: "4 MB",
    title: "Jio Phone 3 (Black, 4 MB RAM, 4GB Storage)",
    category: "Mobiles",
    price: 1999,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/jioPhone1.jpg",
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/jioPhone2.jpg",
    ],
    specs: [
      "2MP rear and 0.3MP front camera",
      "Internal Storage 4GB",
      "1500mAh battery",
      "Access to Jio apps 1 cr+ songs with JioMusic, 6000+ movies with JioCinema",
    ],
    inStock: 50,
    eta: 2,
    id: "m5",
    rating: 3.5,
  },
  {
    Language: "English",
    Genre: "Fiction",
    title: "The Monk Who Sold His Ferrari",
    category: "Mobiles",
    price: 159,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/monksoldhisferrari.jpg",
    ],
    specs:
      "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer’s life. Jolted by the sudden onset of the illness, his practice comes to a standstill. He ponders over material success being worth it all, renounces all of it and leaves for India.",
    inStock: 50,
    eta: 5,
    id: "b1",
    rating: 4.0,
  },
  {
    Language: "English",
    Genre: "Historical",
    title: "The Immortals of Meluha (Shiva Trilogy)",
    category: "Books",
    price: 299,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/meluha.jpg",
    ],
    specs:
      "The Immortals of Meluha is a series of short stories by the Indian author, K. S. Shukla, that tell the story of the Immortals of Meluha, who are the most powerful and powerful figures in the history of the Indian subcontinent.",
    inStock: 50,
    eta: 5,
    id: "b2",
    rating: 4.1,
  },
  {
    Language: "English",
    Genre: "Romance",
    title: "Wuthering Heights",
    category: "Books",
    price: 69,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/Wuthering.jpg",
    ],
    specs:
      "Wuthering Heights is a story of love, hate, social status, and revenge set in the moorlands of Northern England at the end of the 18th century. The novel follows the repercussions of the ill-fated love between the impetuous, strong-willed protagonists Catherine “Cathy” Earnshaw and Heathcliff. The story is narrated in diary-like entries by Lockwood, a tenant of one of Heathcliff’s estates. Lockwood annotates and gathers the story told to him by Nelly Dean, the housekeeper, and also records his present-day interactions to create the frame of the story. The events taking place in Wuthering Heights span a 40-year period.",
    inStock: 50,
    eta: 1,
    id: "b3",
    rating: 4.0,
  },
  {
    Language: "Hindi",
    Genre: "Mystery",
    title: "Byomkesh Bakshi ki Rahasyamayi Kahaniyan",
    category: "Books",
    price: 139,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/bumkeshbakshi.jpg",
    ],
    specs:
      "सारदेंदु बंद्योपाध्याय की विशिष्टता उनके जासूसी लेखन के अतिरिक्त उनकी अद्वितीय लेखन-शैली के साथ-साथ उनके चरित्रों का सूक्ष्म जीवंत चित्रण है। बीसवीं सदी के प्रारंभ के बंगाल में लेखक और पाठक समान रूप से अपराध और जासूसी साहित्य को नीची निगाहों से देखते थे। सारदेंदु बंद्योपाध्याय ने पहली बार उस लेखन को सम्मानीय स्थान दिलाया। इसका एक बड़ा कारण यह था कि उनके पूर्व के लेखक पंचकोरी दे और दिनेंद्र कुमार अंग्रेजी के जासूसी लेखक आर्थर कोनान, डोएल, एडगर एलन पो, जी.के. चेस्टरसन तथा अगाथा क्रिस्टी से प्रभावित होकर लिखते थे, जबकि सारदेंदु के चरित्र और स्थान अन्य जासूसी उपन्यासों के विपरीत, भारतीय मूल और स्थल के परिवेश में जीते हैं। उनके लेखन का विनोदी स्वभाव पाठक को अनायास कथा के दौरान गुदगुदाता रहता है। ब्योमकेश का साहित्य न केवल अभूतपूर्व जासूसी साहित्य है बल्कि सभी समय और काल में, समाज के सभी वर्गों के युवाओं और वृद्धों में समान रूप से सदैव लोकप्रिय बना रहा है। पाठक इन रहस्य भरी कहानियों को उनके जीवंत लेखन के लिए, अंत जानने के बावजूद, बार-बार पढ़ने के लिए लालायित रहता है। किसी भी लोकप्रिय साहित्य में यह एक अद्वितीय उपलब्धि मानी जाती है और यही उपलब्धि सारदेंदु के ब्योमकेश बक्शी साहित्य को सत्यजीत राय के प्रसिद्ध उपन्यास ‘फेलूदा के कारनामे’ के समान हमारे समय के ‘क्लासिक’ का स्थान दिलाती है।",
    inStock: 50,
    eta: 1,
    id: "b4",
    rating: 4.6,
  },
  {
    Language: "English",
    Genre: "Historical",
    title: "Pride and Prejudice",
    category: "Books",
    price: 79,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/prideandprejudice.jpg",
    ],
    specs:
      "The story follows the main character Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of early 19th-century England. Elizabeth is the second of five daughters of country gentleman living near the fictional town of meryton in Hertfordshire, near London. The story begins as the people of rural meryton scurry to marry their daughters off to Charles Bingley, a dashing and eligible Bachelor who has taken an estate near the Bennet. At the villagers welcoming ball, Elizabeth meets up with a formidable adversary: bingley’s closest friend, the Cold, prideful, extremely wealthy Fitzwilliam Darcy, who piques her to new heights of antagonism. When Darcy arrogantly urges Bingley to give up his burgeoning courtship of Elizabeth sister, misunderstanding threatens to bury all he loves in turmoil and regret",
    inStock: 50,
    eta: 1,
    id: "b5",
    rating: 4.3,
  },
  {
    For: "Men",
    title: "AEROPOSTALE Men's Casual Shirt",
    category: "Clothings",
    price: 549,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/shirt.jpg",
    ],
    specs: [
      "Size: Medium",
      "Color name: Light Ceramic",
      "Material: Cotton",
      "Pattern: Solid",
      "Long Sleeve",
    ],
    inStock: 50,
    eta: 10,
    id: "c1",
    rating: 4.7,
  },
  {
    For: "Women",
    title: "ANNI DESIGNER Khadi Silk with Blouse Piece Saree",
    category: "Clothings",
    price: 299,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/saaree.jpg",
    ],
    specs: [
      "Saree Color: Beige and Red",
      "Saree Fabric: Khadi Silk",
      "Wash Care: Dry Clean for the first time",
    ],
    inStock: 2,
    eta: 2,
    id: "c2",
    rating: 4.2,
  },
  {
    For: "Women",
    title: "Women's Stylish Plain Up and Down Cotton Tshirt",
    category: "Clothings",
    price: 449,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/womentop.jpg",
    ],
    specs: [
      "Fit Type: Regular Fit",
      "Fabric Type: Cotton",
      "Pattern name: Solid",
      "Closure Type: Pull On",
      "Sleeve Type: Short Sleeve; Collar Style: Collarless",
    ],
    inStock: 20,
    eta: 5,
    id: "c3",
    rating: 3.7,
  },
  {
    For: "Kids",
    title: "Unisex-Baby Regular Vest",
    category: "Clothings",
    price: 499,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/womentop.jpg",
    ],
    specs: [
      "Fit Type: Regular",
      "Fabric: Made by high quality natural skin friendly 100% tested cotton fabrics",
    ],
    inStock: 20,
    eta: 10,
    id: "c4",
    rating: 2.9,
  },
  {
    For: "Mens",
    title: "Ben Martin Men's Regular Fit Denim Jeans",
    category: "Clothings",
    price: 698,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/mensjeans.jpg",
    ],
    specs: [
      "Size: 34",
      "Fit Type: Relaxed; Occasion: Casual",
      "Material: Cotton",
      "Color: Dark Blue",
    ],
    inStock: 9,
    eta: 1,
    id: "c5",
    rating: 4.3,
  },
  {
    Type: "Bath and Body",
    title: "Dove Deeply Nourishing Body Wash",
    category: "Beauty",
    price: 324,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/dovebodylotion.jpg",
    ],
    specs: [
      "Quantity: 800 ml",
      "Nourishes deep into the surface layers of the skin",
      "Mild, gentle formula is kind to your skin. Ideal For Men & Women",
      "Dove body wash is better than milk",
    ],
    inStock: 34,
    eta: 5,
    id: "be1",
    rating: 4.4,
  },
  {
    Type: "Fragrance",
    title: "Park Avenue Good Morning Perfume Intense Body Spray, 150ml",
    category: "Beauty",
    price: 159,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/parkavenueperfume.jpg",
    ],
    specs: [
      "Quantity: 150ml",
      "Item Form: Spray",
      "Skin Type: All Skin Types",
      "For: Men",
    ],
    inStock: 36,
    eta: 10,
    id: "be2",
    rating: 3.6,
  },
  {
    Type: "Fragrance",
    title: "NIVEA Men Deodorant Fresh Active Original, 150ml",
    category: "Beauty",
    price: 299,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/fragrancedeonevia.jpg",
    ],
    specs: [
      "Quantity: 150ml",
      "Item Form: Spray",
      "Skin Type: All Skin Types",
      "For: Men",
      "The optimal combination of reliable deodorant protection and Nivea care",
    ],
    inStock: 15,
    eta: 2,
    id: "be3",
    rating: 4.3,
  },
  {
    Type: "Skin Care",
    title: "WOW Skin Science Apple Cider Vinegar Foaming Face Wash, 150ml",
    category: "Beauty",
    price: 359,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/wowskincare.jpg",
    ],
    specs: [
      "Quantity: 150ml",
      "Skin Type: All Skin Types",
      "Bioacitve-rich with pure Apple Cider Vinegar, Aloe Vera Extract and Vitamins B5 & E",
      "PREVENTS future breakouts and REDUCES active breakouts using natural NOT chemical ingredients",
    ],
    inStock: 15,
    eta: 2,
    id: "be4",
    rating: 4.8,
  },
  {
    Type: "Hair Care",
    title: "Parachute jumbo pack 100% pure coconut oil, 600ml",
    category: "Beauty",
    price: 227,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/coconutoil.jpg",
    ],
    specs: [
      "Quantity: 600ml",
      "Hair Type: All",
      "Item Form: Oil",
      "Nothing but 100% pure coconut oil",
      "Made with the finest hand-picked & naturally sun dried coconuts",
      "Contains no added preservatives or chemicals. Sulfate Free",
    ],
    inStock: 9,
    eta: 3,
    id: "be5",
    rating: 4.2,
  },
  {
    Type: "Office Chair",
    title: "Umbrella Base Office Chair (Standard, Black)",
    category: "Furniture",
    price: 3199,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/officechairumbrella.jpg",
    ],
    specs: [
      "Furniture Base: Swivel",
      "Color: Black",
      "Frame Material: Nylon",
      "Base dimension-24', Seat dimension - 18'x18'",
      "1 year warranty against breakage",
      "DIY assembly",
    ],
    inStock: 10,
    eta: 30,
    id: "f1",
    rating: 3.5,
  },
  {
    Type: "Desk",
    title: "Wood Study Desk(Wenge Finish,Wenge)",
    category: "Furniture",
    price: 3775,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/desk.jpg",
    ],
    specs: [
      "Item Dimensions: 103 x 40 x 73 Centimeters",
      "Material: Engineered Wood",
      "Study Table Desk",
      "Without Keyboard Shelf",
      "For home and office",
    ],
    inStock: 15,
    eta: 60,
    id: "f2",
    rating: 3.9,
  },
  {
    Type: "Beds",
    title: "King Size Sliding Door Bed with Box Storage",
    category: "Furniture",
    price: 21950,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/bedwithstorage.jpg",
    ],
    specs: [
      "Size: King Size",
      "Item Dimensions: 186 x 215 x 100.5 Centimeters",
      "Material: Engineered Wood",
      "Frame is made of Particle board which is produced by compressing wood dust, glue and resin. The chips in the surface layer are thinner than those in the middle layer, so the surface of the particle board is denser. the hinged door panel are made of medium density fiber boards. It is resistance to termite and wood borer",
    ],
    inStock: 15,
    eta: 50,
    id: "f3",
    rating: 4,
  },
  {
    Type: "Sofas",
    title: "Home Centre Emily Fabric 5 Seater Sectional Sofa Set (Beige)",
    category: "Furniture",
    price: 32899,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/sofa1.jpg",
    ],
    specs: [
      "Seating Capacity: Five Seat",
      "Seat filling: Foam with spring",
      "Item Dimensions: Length (184 cm), Width (92 cm), Height (88 cm)",
      "Material: Engineered Wood, Fabric and Polyester",
      "Warranty: 1 year on product",
    ],
    inStock: 11,
    eta: 50,
    id: "f4",
    rating: 4.3,
  },
  {
    Type: "Wardrobes",
    title: "Solimo Pyxis Engineered Wood Wardrobe Mahogany, 2 Doors",
    category: "Furniture",
    price: 9089,
    imgs: [
      "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/images/wardrobe1.jpg",
    ],
    specs: [
      "Seating Capacity: Five Seat",
      "Seat filling: Foam with spring",
      "Item Dimensions: Length (184 cm), Width (92 cm), Height (88 cm)",
      "Material: Engineered Wood, Fabric and Polyester",
      "Warranty: 1 year on product",
    ],
    inStock: 18,
    eta: 35,
    id: "f5",
    rating: 3.7,
  },
];
