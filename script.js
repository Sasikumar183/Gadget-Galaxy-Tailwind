
function show() {
    const menu = document.querySelector('nav');
    const icon = document.getElementById('menu');
    if (icon.name === 'menu-outline') {
        icon.name = 'close-outline';
        menu.classList.remove('hidden');
        menu.classList.remove('text-white');
        menu.classList.add('text-black');
        menu.classList.add('w-[250px]')
        menu.classList.add('text-center')

        
    } else {
        icon.name = 'menu-outline';
        menu.classList.add('hidden');
        menu.classList.remove('text-black');
        menu.classList.add('text-white');
        menu.classList.remove('w-[250px]')
        menu.classList.remove('text-center')
    
    }
}
window.addEventListener('load', () => {
  const heads = document.querySelectorAll('h1');
  heads.forEach(head => {
    head.classList.add('font-bold');
  });
});

var newdata = [
    {
        "image": "./img/new arr/item1.jpg",
        "name": "FusionIT PC Intel Core i7-10700F Core i7 (10th Gen) (16 GB DDR4/1 TB/256 GB SSD/Windows 11 Home/4 GB DDR3/27 Inch Screen/Intel core Series) with MS Office",
        "price": "59650",
        "rating": 4.2
    },
    {
        "image": "./img/new arr/item2.jpg",
        "name": "ASUS ROG Strix GA35 G35DX-IN017T AMD Ryzen 7 3700X (32 GB RAM/NVIDIA GeForce RTX 2070 Super/1 TB SSD/Windows 10 Home)",
        "price": "184999",
        "rating": 4.7
    },
    {
        "image": "./img/new arr/item3.webp",
        "name": "ASUS G10DK-R5600X137W AMD Ryzen 5 Hexa Core (8 GB RAM/NVIDIA GeForce GTX 1650 Graphics",
        "price": "92900",
        "rating": 4.6
    },
    {
        "image": "./img/new arr/item4.webp",
        "name": "ASUS ROG Strix G10CE G10CE-710700004W Intel Core i7 (16 GB RAM/NVIDIA GeForce GTX1660TI Graphics) Gaming Tower",
        "price": "65990",
        "rating": 4.3
    },
    {
        "image": "./img/new arr/item5.webp",
        "name": "ASUS M3402WFA Ryzen 3 Dual Core (8 GB LPDDR5/Windows 11 Home) Black",
        "price": "49500",
        "rating": 4.3
    },
    {
        "image": "./img/new arr/item6.webp",
        "name": "Intel Celeron Dual Core Processor, 8 GB LPDDR4X RAM, Chrome Operating System, 39.62 cm (15.6 Inch) Display",
        "price": "43290",
        "rating": 4.5
    },
    {
        "image": "./img/new arr/item7.webp",
        "name": "ASUS Vivobook 15 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) X1502ZA-EJ953WS Thin",
        "price": "37990",
        "rating": 4.9
    },
    {
        "image": "./img/new arr/item8.webp",
        "name": "Apple 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63H",
        "price": "73990",
        "rating": 4.7
    },
    {
        "image": "./img/new arr/item9.webp",
        "name": "Apple 2022 MacBook AIR Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MLY33HN/A",
        "price": "86990",
        "rating": 4.8
    },
    {
        "image": "./img/new arr/item10.webp",
        "name": "Lenovo IdeaPad Slim 5 Intel Core i5 13th Gen 13500H - (16 GB/512 GB SSD/Windows 11 Home) 16IRL8 Thin",
        "price": "70400",
        "rating": 4.2
    },
    {
        "image": "./img/new arr/item11.webp",
        "name": "Acer Aspire 7 (2023) Intel Core i5 12th Gen 12450H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics)",
        "price": "57990",
        "rating": 4.6
    }
];

var topsale = [
    {
        "image": "./img/top sell/item1.webp",
        "name":"Boult Y1 Gaming with 50H Battery, App Support",
        "price":"1099" ,
        "rating": 4.1
    },
    {
        "image": "./img/top sell/item2.webp",
        "name":"boAt Airdopes 161/163 with ASAP Charge & 40 HRS Playback Bluetooth Headset",
        "price":"899" ,
        "rating": 4.0
    },
    {
        "image": "./img/top sell/item3.webp",
        "name":"ZEBRONICS Zeb Companion 200 Wireless Combo with Silent",
        "price":"799" ,
        "rating":4.2
    },

    {
        "image": "./img/top sell/item4.webp",
        "name":"Aula F2023 Combo Wired USB Gaming Keyboard Black",
        "price":"899" ,
        "rating":4.2
    },
    {
        "image": "./img/top sell/item5.webp",
        "name":"ZEBRONICS Zeb- Thunder, With 60H Backup, BT v5.3",
        "price":"799" ,
        "rating":4.0
    },
    {
        "image": "./img/top sell/item6.webp",
        "name":"boAt Rockerz 450 with Upto 15 Hours Playback Bluetooth Luscious Black, On the Ear",
        "price":"1499" ,
        "rating":4.3
    },{
        "image": "./img/top sell/item7.webp",
        "name":"ZEBRONICS Zeb-Duke 2, with 60h Backup, BT v5.4, Gaming Blue On the Ear",
        "price":"1119" ,
        "rating":3.9
    },{
        "image": "./img/top sell/item8.webp",
        "name":"FERONS Powerpact bass & stereo audio color changIng",
        "price":"383" ,
        "rating":4
    },
    {
        "image": "./img/top sell/item9.webp",
        "name":"Doyen Creations BoomBox Wireless Speaker with Upto 10-1",
        "price":"879" ,
        "rating":3.7
    },
    {
        "image": "./img/top sell/item10.webp",
        "name":"Bzrqx V380 WIFI IP CAMERA CCTV SECURITY DUAL ANTENNA ",
        "price":"1259" ,
        "rating":4.5
    }, 
    {
        "image": "./img/top sell/item11.webp",
        "name":"coolcold Bluetooth Adapter 3Mbps With CD Driver USB Ada...Black",
        "price":"349" ,
        "rating":4.1
    }
]

var toprate = [
    {
        "image": "./img/top rate/item1.webp",
        "name": "boAt Wave Flex Connect with 1.83\" HD Display, Bluetooth Calling & Premium Metal Design Smartwatch (Active Black Strap, Free Size)",
        "price": "1299",
        "rating": 4.3
    },
    {
        "image": "./img/top rate/item2.webp",
        "name": "shopevolves Hello Pro 2.01\" Display, (V5.2) BT Calling, Working Crown, 600 NITS, SpO2 Smartwatch (Red Strap, Free Size)",
        "price": "1599",
        "rating": 3.9
    },
    {
        "image": "./img/top rate/item3.webp",
        "name": "shopevolves NextFIT Halo 1.3\" Metal Dial, BT Calling, Black Strap, Medium",
        "price": "3058",
        "rating": 4.0
    },
    {
        "image": "./img/top rate/item4.webp",
        "name": "boAt Storm Call 3 w/ Turn by Turn Navigation, QR Code Tray, 1.83\" Display & BT Calling Smartwatch (Green Strap, Free Size)",
        "price": "1499",
        "rating": 4.1
    },
    {
        "image": "./img/top rate/item5.webp",
        "name": "REDMI Pad SE 4 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet (Graphite Gray)",
        "price": "12999",
        "rating": 4.4
    },
    {
        "image": "./img/top rate/item6.webp",
        "name": "SAMSUNG Galaxy Tab A9+ 8 GB RAM 128 GB ROM 11.0 inch with Wi-Fi+5G Tablet (Graphite)",
        "price": "24999",
        "rating": 4.5
    },
    {
        "image": "./img/top rate/item7.webp",
        "name": "Apple iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)",
        "price": "30400",
        "rating": 4.6
    },
    {
        "image": "./img/top rate/item8.webp",
        "name": "META Quest 3 VR Headset (128 GB) Motion Controller (White, For PC, PS4, Xbox)",
        "price": "47990",
        "rating": 4.6
    },
    {
        "image": "./img/top rate/item9.webp",
        "name": "Metashot Augmented Reality Bat with Game for TVs, PC/Mac, iOS/Android, Tabs/iPad (Black, For PC)",
        "price": "5999",
        "rating": 4.1
    },
    {
        "image": "./img/top rate/item10.webp",
        "name": "Intex IT-2616 BT 55 W Bluetooth Home Theatre",
        "price": "2599",
        "rating": 3.8
    },
    {
        "image": "./img/top rate/item11.webp",
        "name": "Buy Genuine Fashionable Design Wireless Sports Bluetooth",
        "price": "580",
        "rating": 4.2
    }
];

var comment = [
    {
        'image': './img/comment/sachin.jpg',
        'name': 'Sachin',
        'comment': 'Amazing website with a great selection of gadgets. The navigation is smooth and intuitive. I found everything I needed easily and the checkout process was seamless. Highly recommend Gadget Galaxy!'
    },
    {
        'image': './img/comment/dhoni.jpg',
        'name': 'M.S. Dhoni',
        'comment': 'User-friendly interface and excellent customer service. I had a few questions about a product and the support team was quick to respond and very helpful. Will definitely shop here again!'
    },
    {
        'image': './img/comment/virat.jpg',
        'name': 'Virat Kohli',
        'comment': 'Found exactly what I was looking for and the prices are unbeatable. The detailed product descriptions and customer reviews helped me make an informed decision. Gadget Galaxy is my new go-to for tech gadgets!'
    },
    {
        'image': './img/comment/ChrisEvans.jpg',
        'name': 'Chris Evans',
        'comment': 'Top-notch gadgets and fast delivery. I was impressed by the range of products and the quality. Everything arrived on time and in perfect condition. Very impressed with the service!'
    },
    {
        'image': './img/comment/Jude Bellingham.jpg',
        'name': 'Jude Bellingham',
        'comment': 'Great variety and quality products. The website layout makes it easy to browse different categories. I found some unique items that I haven’t seen elsewhere. Will definitely recommend Gadget Galaxy to friends.'
    },
    {
        'image': './img/comment/ronaldo.jpg',
        'name': 'Ronaldo',
        'comment': 'Excellent shopping experience from start to finish. The gadgets are top quality and the prices are reasonable. The order tracking feature is very useful. Will be back for more purchases!'
    },
    {
        'image': './img/comment/smriti.jpg',
        'name': 'Smriti Mandhana',
        'comment': 'Loved the quick delivery and the responsive customer support. I had an issue with my order and it was resolved promptly. The products are exactly as described and work perfectly. Highly satisfied!'
    },
    {
        'image': './img/comment/To.jpg',
        'name': 'Robbert',
        'comment': 'Fantastic website with a wide range of gadgets. The detailed specifications and customer reviews helped me choose the right product. Everything was delivered on time and in excellent condition. Will shop here again.'
    },
    {
        'image': './img/comment/tom cruise.jpg',
        'name': 'Tom Cruise',
        'comment': 'Impressive selection and great prices. The website is easy to navigate and the product recommendations are spot on. I found some great deals on high-quality gadgets. Highly recommend this site!'
    },
    {
        'image': './img/comment/tonystark.jpg',
        'name': 'Tony Stark',
        'comment': 'Innovative gadgets and superb service. The website design is sleek and modern, and the product range is impressive. The delivery was fast and the items were well-packaged. Gadget Galaxy is a game-changer!'
    }
];

function loadtoprate(e){
    var data;
    if(e==='toprate'){
        data=toprate;
    }
    else if(e==='topsell'){
        data=topsale;
    }
    else if(e==='new'){
        data=newdata;
    }
    var ele = document.getElementById('content');
    ele.classList.add('flex','flex-row','flex-wrap','justify-around','bg-gray-400')
    data.forEach(function(item) {
        var div = document.createElement('div');
        div.classList.add('bg-slate-100','w-80','h-92','bg-white','shadow-lg', 'rounded-lg', 'overflow-hidden', 'm-4', 'flex', 'flex-col', 'items-center', 'p-4');
        div.classList.add('hover:shadow-md', 'hover:shadow-black');
     
    
        var image = document.createElement('img');
        image.src = item.image;
        image.classList.add('w-48','h-48','mb-4','rounded-xl');
        div.appendChild(image);
    
        var des = document.createElement('p');
        des.textContent = item.name;
        des.classList.add('text-lg', 'font-semibold', 'mb-2');
        div.appendChild(des);
    
        var price = document.createElement('p');
        price.textContent = "₹" + item.price;
        price.classList.add('text-xl', 'text-green-500', 'mb-2');
        div.appendChild(price);
    
        var rate = document.createElement('p');
        rate.innerHTML = "Rating: " + item.rating + " " + getStars(item.rating);
        rate.classList.add('stars', 'text-yellow-500');
        div.appendChild(rate);
    
        ele.appendChild(div);
    });
}
function getStars(rating) {
    var fullStars = Math.floor(rating);
    var halfStar = rating % 1 !== 0 ? 1 : 0;
    var emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
}

function display(){
    var ele = document.getElementById("content");
    ele.className='flex flex-row flex-wrap gap-2  justify-around bg-gray-400';
    comment.forEach(function(items) {
        var div = document.createElement('div');
        div.className = 'commenti rounded-lg p-4 bg-slate-100 w-[45%] mt-2 mb-3';
        div.classList.add('hover:shadow-md', 'hover:shadow-black');

        var image = document.createElement("img");
        image.src = items.image;
        image.width = 80;
        image.height = 80;
        image.className = "comimg rounded-tl-lg rounded-full mr-4";
        div.appendChild(image);

        var content = document.createElement('div');
        content.className = "";

        var comment = document.createElement('p');
        comment.innerHTML = items.comment;
        comment.className = "mb-2 text-gray-700";
        content.appendChild(comment);

        var name = document.createElement('p');
        name.innerHTML = "~" + items.name;
        name.className = "text-right font-bold text-lg";
        content.appendChild(name);

        div.appendChild(content);
        ele.appendChild(div);
    });
}
