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
export const categories = [
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
    reviews: [
      {
        name: "Shubham",
        title: "Don't buy this phone",
        content: `Both 13 MP and 5MP Camera quality is good. Have lot of pre installed apps. 
        But can be uninstalled if not required. Overall good performance . I am using Asus zenfone max and according to me far better than Asus except Camera quality. It comes in 5000 mah battery and one can't get a better option at this price range. Go for it. It's really goodAfter one week useEdit:- please don't buy this phone. It hangs a lot and sometimes there is problem in touch screen.`,
        rating: 1,
      },
      {
        name: "Swanand",
        title: "One of the good choice for low budget phone",
        content: `If you are looking for low budget phone this can be a good choice for you.
      If you wanna android phone just for day to day work then it's really good.
      On playing heavy games it will hange obviously. Camera is fine at this range. When you start your new device it take some time but later it will work smoothly.
      Phone is light weight with a good look`,
        rating: "4",
      },
      {
        name: "Sanskar",
        title:
          "Simply excellent. Read complete review written after my 30 days of experience",
        content: `Excellent mobile for daily use @7500/-. Don't belive in negative reviews at all. If course the product parts made in China, entire assembly, software all are of India. Even this mobile have no bloat ware or Chinese apps and it's 3gb variant is excellent and black colour looks great.
        Camera is good at it's price range and has autofocus and AI potrait feature.
        Regarding battery is really huge and with normal daily usage it lasts for about 24 hrs as of my experience. With heavy usage and gaming it lasts for 7-10 hrs.
        Regarding gaming, since it has gaming processor helio G25 (equal to Snapdragon 625), and it's hyperdrive technology, no lag in gaming and better network connectivity makes games more aweful.`,
        rating: "5",
      },
    ],
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
    reviews: [
      {
        name: "Rohit",
        title: "Best mobile in buget",
        content: "I higely recoomend this mobile",
        rating: 5,
      },
      {
        name: "Doraemon",
        title: "Value for money",
        content:
          "Really a good budget phone with big battery. Camera performance also awesome, but in pro mode there no control for shutter speed and while changing the iso i don't feel any differences. I need more update on camera modes. Phone performance and charging speed is good. Except camera modes i love this phone.",
        rating: 4,
      },
      {
        name: "Nobita",
        title: "Best in the market with this price range",
        content:
          "A Descent phone Definitely not for pro pubg player but can work fine Super amoled gives it best performance Descent camera Improved Selfie camera compared to M30 Long battery life Nice Security No ads unlike MI Works smoothly",
        rating: 5,
      },
    ],
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
    reviews: [
      {
        name: "Johhny S",
        title: "This took one of my kidneys and a testicle. But worth it",
        content:
          "Impressed! I’ve tested it with iphone11 and other iphones, it’s remarkable. It has unquestionably better video quality and touch sensitivity. The screen is bigger than I thought. I loved the Gold variant. But if u have a 11 max or a X max I wouldn’t suggest for an upgradation. I feel that the next iphone will have way more cooler features so wouldn’t hurt to wait. My previous iphone was 6, so in my case am totally peachy with this phone. Though it has a ceramic glass wouldn’t hurt to buy a screen guard. If u can afford it u can totally go 4 it.",
        rating: 5,
      },
      {
        name: "Arjun",
        title: "The best iPhone in 2020. Phone of the year.",
        content:
          "This is the best iPhone yes. The Max model gives you the better screen and overall is a camera beast. I would highly recommend this to anyone. Regarding value for money, its sad that we live in a country where Falling Rupee, Import Duty and High GST are the reasons for such high poricing. A rich country like USA pays only $1099 (Rs. 81,500) whereas its priced a whopping Rs. 48,400 more in India. Thats slmost 60% more. Shame!",
        rating: "5",
      },
      {
        name: "Sahith",
        title: "Best & Biggest iPhone i ever owned 🥰",
        content:
          "Just no words, what a beauty. Upgrading from iPhone X, this feels so big and heavy. But do not has much discomfort while using, you will get used to it.Make sure to get a decent Screen guard and clear case just to safeguard this beauty.",
        rating: "4",
      },
    ],
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
    reviews: [
      {
        name: "Bakwas",
        title: "Bakwas phone",
        content: "Bakwas phone",
        rating: 1,
      },
      {
        name: "Vikas",
        title: "Good overall",
        content: `The best part of the phone is it's super simple and user friendly operating system. Camera doesn't oversaturate colours and captures decent photos. Battery charging is super fast. People argue that this is overpriced in this segment but I guess ease of using the phone and mainly the OS wouldn't be so good in other comparable phones. It is super light and handy.

      Edit: taking away 1 star from the review after a month's usage.
      Phone app lags all the time. Phone starts ringing when I receive a call while the name of caller appears 5 seconds later. This is very annoying. Similar issue while calling. Hope some software update fixes this issue.`,
        rating: "4",
      },
      {
        name: "Smooth John",
        title: "Smooth user experience",
        content:
          "Very nice Phone with really nice features! I didn't even know I needed a phone but it is so good ",
        rating: "5",
      },
    ],
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
    reviews: [
      {
        name: "BabaKun",
        title: "Good for My Dad",
        content:
          "Like really I was looking for a phone in which I can be always connected with my family but they didn't want a smartphone. So really good for filling the niche",
        rating: 4,
      },
      {
        name: "Ambani",
        title: "Buy This",
        content: "Very good Must Buy!",
        rating: 5,
      },
      {
        name: "Average Consumer",
        title: "Ok",
        content: "ok for like daily use but not much",
        rating: 3,
      },
    ],
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
    reviews: [
      {
        name: "Takumi",
        title: "I sold my ae86 after this",
        content:
          "Very nice thriller story It inspired me to sell my car like the monk.",
        rating: 5,
      },
      {
        name: "Om",
        title: "My kids liked It",
        content:
          "Was fine as my kids liked it thats all it matters ultimately, however i would say its a little overpriced for its quality and",
        rating: 3,
      },
      {
        name: "Shyam",
        title: "Very nice read",
        content: "I thourougly enjoyed the content of this",
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Himanshu",
        title: "Amazing",
        content: `We'll I'm not a great critic but here's my honest review about what I felt after reading this book.
      At first I was hesitant to buy the book thinking that it would contain the same unbelievable fictional aspects where the gods can fly and cure the incurable diseases by their touch. I was blown away by the simplicity of the protagonist. He didn't have any powers, instead he had the skill and intelligence which led to his rise to become a Mahadev.
      The story is well narrated with twists and turns of comedy, drama, rage and emotions which leaves you hooked till you read the last chapter and then, the other two books. The characters are well developed making you feel their pain and happiness.
      10/10`,
        rating: 4,
      },
      {
        name: "Divyani",
        title: "Too much like a dramatic Script of a TV show",
        content: `I got this thanks to its popularity but unfortunately its a little too dramatic for me, it reads like a script for a Zee TV show which I don't watch but know about thanks to some family members fascinations.......
      There is no character development, poor scripting, no historical research has gone into this I can presume since their are facts that don't match with what's written along with others........
      Also Lord Shiva is not an angry God but when he will get angry its the end or so say the Purans but Lord Shiva is perpetually angry in this book, vendetta is raging in his veins, revenge is his middle name and for what......`,
        rating: 1,
      },
      {
        name: "Vaishnavi",
        title: "Could have been better",
        content:
          "Mediocre writing at best. Hindu mythology is quite rich and author benifits from choosing it. Besides one trick of imputing a benign, logical rationale (which i can hope were the case in reality) to hindu customs, the author doesnt have much to write about. Its feels like just another hero's journey.",
        rating: 2,
      },
    ],
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
    reviews: [
      {
        name: "Elle",
        title: "I Tried it But,",
        content: `I never expected this book to be as flagrantly, unforgivably bad as it was.

      To start, Bronte's technical choice of narrating the story of the primary characters by having the housekeeper explain everything to a tenant 20 years after it happened completely kills suspense and intimacy.`,
        rating: 1,
      },
      {
        name: "Sophie",
        title: "Interestingly enough",
        content:
          "Ah the classics. Everybody can read their own agenda in them. So, first a short plot guide for dinner conversations when one needs to fake acculturation, and then on to the critics’ view.",
        rating: 2,
      },
      {
        name: "American Dragon",
        title: "Childhood Memory",
        content: `I first read this in AP English Literature - senior year of high school. This book is dense and thick and confusing, and with a class full of haters, it was hard to wrap my head around it. I subsequently read it three or four more times for classes in college and every time I read it, I loved it more.`,
        rating: 5,
      },
    ],
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
    reviews: [
      {
        name: "Tony",
        title: "One of the best detective stories book ever.",
        content: `Fantastic. Simply superb. I thought after watching it's series on TV I might not like reading it. But, it was an amazing experience. Due to the above-mentioned fear, I couldn't buy it in the first time but only after a couple of days after thinking a couple of times. But, once I bought it, I couldn't stop. Finished it in less than a week's time. Totally enjoyed it. Highly recommended. Don't miss for anything. Wish I could write something like this!`,
        rating: 4,
      },
      {
        name: "Ram Singh",
        title: " One of the Best Story Book",
        content:
          "It is an honour to review the Story book of Byomkesh Sir. He was fantastic and Wise. His assumptions were so accurate. The main theme of the book is successful. Nice book.",
        rating: 3,
      },
      {
        name: "Shizuka",
        title: "Don't trust seller.",
        content: `I ordered it at low price from Amazon but when the book reached, what i seen was one page miss print. So i reordered the book but second time they confirmed the order at high price. But as i was buying it to gift someone on her birthday, i ordered it. When i opened to check the miss prints, all the pages were well printed. But when the person to whom i gifted it, opened the book what she seen was missing pages. Example - after 112 page number you jump to direct page no. 129. I mean where are the pages? It all destroyed the emotions of the gift. I will not buy any product from seller 'Cloudtale' at all cost.`,
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "raze",
        title: "Boom",
        content:
          "Imagine having a pride when you get blown up and shattered like a bot",
        rating: 4,
      },
      {
        name: "Max Walters",
        title: "Simply Amazing",
        content:
          "My partner really loved it , she said that its really potrays the issues which you might need to face but might not be able to solve cause of pride. I say it was like a really good investment for my partner as she liked it.",
        rating: 4,
      },
      {
        name: "Robert Williams",
        title: "Imagine Dealing with",
        content:
          "Issues potrayed in the book, can really be disturbing right ? It can be really hard on you sometimes, as it can be really real sometimes",
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Rahul Sharma",
        title: "Good cotton Shirt",
        content: "It gets the job done, really gets me looking sexy and cool!",
        rating: 4,
      },
      {
        name: "Ayush Goyal",
        title: "Fabric not that good",
        content:
          "It shrank and is losing color after every wash. I don't think its as premium as advertised or I got a fake product. Really Disappointed...",
        rating: 2,
      },
      {
        name: "Gon",
        title: "Ok",
        content: "Gets the work done Its ok for me nothing really special",
        rating: 2,
      },
    ],
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
    reviews: [
      {
        name: "Motu",
        title: "I got the wrong size Feel cheated",
        content:
          "I ordered it 2 weeks ago and I not only got a wrong product as but they also denied my refund request quoting its non refundable even though its their fault!!!",
        rating: 1,
      },
      {
        name: "Forsen",
        title: "ZULUL",
        content:
          "I Wore this as my wife nina forced me too, I felt really good and nice but she still left me now I wear it to remember her",
        rating: 5,
      },
      {
        name: "Viper",
        title: "Toxic Screen Down",
        content:
          "My coworker said you are looking fire bruh which is really weird but really tells how much it suits me",
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Shizuka",
        title: "If apple made a tshirt",
        content: "Like It wont be good and cheap. So its really good",
        rating: 4,
      },
      {
        name: "Anonymous",
        title: "Seller Asking for reviews ",
        content:
          "I ordered the product which is really fine but the seller is sending a note to give it 5 star for money. I don't like Amazon not taking practices against this",
        rating: 2,
      },
      {
        name: "Kiteretsu",
        title: "bad quality",
        content: "It faded colours after few washes and now doesnt look good",
        rating: 2,
      },
    ],
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
    reviews: [
      {
        name: "Giyan",
        title: "Trusted Brand",
        content:
          "Always wearing the Tshirts of this brand really amazing and durable,I still have my class 12th tshirt which still fits well and has decent colours and fabric",
        rating: 5,
      },
      {
        name: "Patlu",
        title: "thik thak hai!",
        content:
          "Mujhe ye acche se aaya par merko umeed thi ki isse saastha hoga kyoki ye kid baacho ka hai 500 mai tho mere liye tshirt aajaati merko laagta ye log loot raahe hai ",
        rating: 3,
      },
      {
        name: "Priya",
        title: "TOO SMALL",
        content:
          "Ordered 3-6 month size for my 1.5 month baby just in case I thought. Toy surprise he couldn't wear it till his 2 months bday. The sleeves got too tight and the length is too short too. Waste of money.",
        rating: 2,
      },
    ],
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
    reviews: [
      {
        name: "Neeta",
        title: "Fitting",
        content: `As such there is nithing wrong with the product but for me, it was fitting very oddly.Though i wear regular fit standard36 " waist trousers, this trousers were too tight on thighs as well as below ankle.Not at all comfortable.Below the knee, it fitted more like a chudidar`,
        rating: 3,
      },
      { name: "Sarvesh", title: "Very thin Cloth", content: "Good", rating: 4 },
      {
        name: "Joker",
        title: "About jeans",
        content:
          "I was expecting that the material of the jeans would be really soft but it's not it's hard material, I'm a bit dissatisfied though i am keeping the item because it fits very well",
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Manisha Gupta",
        title: "Body wash better than milk",
        content: `I always use to prefer dove products whether it is shampoo or soap so I tried some other product of dove that is body wash and it's really worth it as it nourishes deep into the surface layers of the skin
      Mild, gentle formula is kind to your skin`,
        rating: 5,
      },
      {
        name: "Monika",
        title: "A must buy definitely..!!",
        content:
          "This Dove Bodywash is one of the best body washes I’ve used till date .. it nourishes deep into the surface layers of the skin.. it’s really mild and gentle on the skin.. it will give you super soft and smooth skin after just one use.",
        rating: 4,
      },
      {
        name: "Neha",
        title: "Disappointed",
        content: `Very disappointed with exchange policy. Amazon denied exchange even with the item of same price during offer period and current price is also same. What to do of too tight Jean. Wastage of time. Don't buy anything from Amazon with such disappointed exchange policy.`,
        rating: 2,
      },
    ],
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
    reviews: [
      {
        name: "Ram",
        title: "The Quality of the product.",
        content:
          "This Body Spray is too good, smells nice and value for money. I shall buy it again. Definitely recommended.",
        rating: 5,
      },
      {
        name: "Raj Singh",
        title: "BIG LIE",
        content:
          "AMAZON IS LYING ITS NOT 150 ML... ITS 130ML THE SELLER HAS LISTED IT AS 150ML AND ARE DENYING ANY REFUNDS I FEEl chEATED, but the quality of product is as advertised",
        rating: 4,
      },
      {
        name: "Ankit",
        title: "Read Comment Full",
        content: `Lets Be Honest
      The Quality of packaging is worst
      The deo fragrance is Ultimate as it contain Vanilla
      Vanilla is the first things which attracts women`,
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Ritik",
        title: "BAD,WORST, NOT WORTH",
        content: `i was using this for past two day's. It not even smelling. I don't know why they selling this stupid product. Dont buy this guys buy the Fogg it is more than this.`,
        rating: 2,
      },
      {
        name: "Ninja",
        title: "Good,Nive as Always",
        content: "I am a regular user, nothing to dislike.",
        rating: 5,
      },
      {
        name: "Nani",
        title: "Very Good Smell",
        content: "Got this product in good price. Scent also good",
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Ashwin",
        title: "GOOD ONE",
        content:
          "Quality assurance as claimed I look at every product I buy from any company. I will discontine if product is'nt upto the standards displayed",
        rating: 4,
      },
      {
        name: "Gauri",
        title: "BEST FACE WASH",
        content:
          "It's the best face wash I ever used. It's suitable for all type of skin. Clean the skin deeply and keeps skin healthy and nourished.",
        rating: 4,
      },
      {
        name: "Martin",
        title: "Best face wash for oil skin....",
        content:
          "I have been using this face wash for a month it is satisfied with the product and it is really nice to use also helps in dematiris skin condition.",
        rating: 5,
      },
    ],
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
    reviews: [
      {
        name: "Payal P",
        title: "Idiot Seller",
        content:
          "The oil is good but really disappointed with what seller has done here,  he knowing sent damaged bottle and tried to fix it with tape and stop the leak,",
        rating: 5,
      },
      {
        name: "Md Shahzad Hassan",
        title: "The quality of packaging destroys value",
        content: `Parachute coconut oil needs no introduction and has been a favorite and household name for decades.

        Quality and purity is top notch.
        
        For last few times the packaging has been disappointment. Every single time the cap will break apart in initial few days and then the whole oil wastes by spilling or dropping
        `,
        rating: 3,
      },
      {
        name: "Nitesh",
        title: "Do not buy",
        content: `some product with same manufacturing date found cheaper in local market with low printed price.so before u buy have a look with near by retail shop.`,
        rating: 1,
      },
    ],
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
    reviews: [
      {
        name: "Sayanak S",
        title: "Paint Coming Out",
        content: "The paints are coming out even with slightest touch",
        rating: 1,
      },
      {
        name: "Kamlesh K",
        title: "Product received was different from what's pictured",
        content: `The chair I received was different from the one shown in the image. It's cheating.. I would like to return it, but it seems the option is not there.`,
        rating: 2,
      },
      {
        name: "Sam B",
        title: "stars Chair with many problems",
        content: `Fitting is good and fast. But chair is slightly damage on handle. Feels like old stock.

      Edit :
      After few Months, started to make sounds when u sit on it, the back lock is weak and slips every time . Not happy with this buy.`,
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Anjali",
        title: "Value For Money",
        content: `This product is really a value for money.
      The board sturdiness is really good. The ply is quiet tough.
      A little difficult to assemble. I assembled it at my home with the help of my father and sister.
      Overall 4/5. Really helpful for me`,
        rating: 4,
      },
      {
        name: "Prashant",
        title: "A good value for money product",
        content: `I ordered the table on 7th June and it was delivered on 28th June. So it took almost 20 days for the product to reach.
      Overall the quality of the table is good. You get a manual to assemble the table. It can be easily done by two people. I took almost an hour to assemble it.`,
        rating: 4,
      },
      {
        name: "Shiva",
        title: "stars Worst than worst",
        content: `I'm just not happy with the product. It wasn't easy to assemble and the wood quality is so bad. Please don't take this product. Not at all worthy. And after leaving this review I started getting calls from that company asking to remove the review`,
        rating: 1,
      },
    ],
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
    reviews: [
      {
        name: "Ram",
        title: "Very Nice",
        content:
          "I was having a hard time finding a king size bed which looks sleek and is in my budget this really ticks all the corners and I am not disappointed.",
        rating: 5,
      },
      {
        name: "Mohan",
        title: "Disappointed",
        content:
          "The quality of wood is not that great. The colour and the wood started peeling after few months of use",
        rating: 2,
      },
      {
        name: "Komodo",
        title: "Gets the Job Done",
        content: "OK and good",
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "Vinit",
        title: "Good product as described",
        content: `The packaging was sturdy, secure and the delivery guys were very couteous and polite and helped getting the sofa on first floor. The installation was quick and sofa is sturdy, no creeeks or sound, cushions are comfortable as as prescribed in dimensions.`,
        rating: 4,
      },
      {
        name: "Chota Lakshit",
        title: "Sofa is too good but unfortunately the sevice is worst.",
        content: `Sofa is too good but unfortunately the sevice is worst.
      Service people broke 1 leg while fixing legs and did not replaced it with new one and now my one sofa is useless with 3 legs. They also behaved very rudely.`,
        rating: 4,
      },
      {
        name: "Sigma Male Soap",
        title: "Comfort wise not good and aesthetically good product",
        content: "but good...",
        rating: 4,
      },
    ],
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
    reviews: [
      {
        name: "M.D. Luffy",
        title: "Misleading picture of the product.",
        content:
          "I thought it would be able to keep all the food I capture from sea but it couldnt, Smaller than it looks",
        rating: 2,
      },
      {
        name: "Sad Customer",
        title: "Damaged product",
        content:
          "Damaged product. Asked for replacement but no one is replying properly to my mails.",
        rating: 1,
      },
      {
        name: "Yash K",
        title: "Good Value",
        content: "It is quality stuff. Good value for spend.",
        rating: 4,
      },
    ],
  },
];
