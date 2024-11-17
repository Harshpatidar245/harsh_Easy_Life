const data = [
  {
    id: 1,
    title: "Floor Cleaning",
    rating: "4.77 (636)",
    price: 150,
    phone: "9826506683",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg",
  },
  {
    id: 2,
    title: "Bathroom Cleaning",
    rating: "4.77 (636)",
    price: 99,
    phone: "9826506683",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg",
  },
  {
    id: 3,
    title: "Kitchen Cleaning",
    rating: "4.85 (452)",
    price: 200,
    phone: "9856234582",
    src: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/home-screen/1644931257406-6b799b.jpeg",
  },
  {
    id: 4,
    title: "Carpet Cleaning",
    rating: "4.91 (789)",
    price: 250,
    phone: "9876543210",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/carpet-cleaning.jpg",
  },
  {
    id: 5,
    title: "Sofa Cleaning",
    rating: "4.83 (523)",
    price: 300,
    phone: "9812345678",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/sofa-cleaning.jpg",
  },
  {
    id: 6,
    title: "Window Cleaning",
    rating: "4.78 (399)",
    price: 180,
    phone: "9823114567",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/window-cleaning.jpg",
  },
  {
    id: 7,
    title: "AC Servicing",
    rating: "4.9 (256)",
    price: 500,
    phone: "9823654781",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/ac-servicing.jpg",
  },
  {
    id: 8,
    title: "Car Cleaning",
    rating: "4.8 (612)",
    price: 400,
    phone: "9834567891",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/car-cleaning.jpg",
  },
  {
    id: 9,
    title: "Laundry Service",
    rating: "4.7 (478)",
    price: 120,
    phone: "9811234567",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/laundry-service.jpg",
  },
  {
    id: 10,
    title: "Pest Control",
    rating: "4.88 (345)",
    price: 350,
    phone: "9845671234",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/pest-control.jpg",
  },
  {
    id: 11,
    title: "Water Tank Cleaning",
    rating: "4.89 (212)",
    price: 450,
    phone: "9873214567",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/water-tank-cleaning.jpg",
  },
  {
    id: 12,
    title: "Gardening Service",
    rating: "4.75 (298)",
    price: 550,
    phone: "9823145789",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/gardening-service.jpg",
  },
  {
    id: 13,
    title: "House Painting",
    rating: "4.92 (176)",
    price: 700,
    phone: "9832145769",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/house-painting.jpg",
  },
  {
    id: 14,
    title: "Electrician Services",
    rating: "4.95 (310)",
    price: 80,
    phone: "9843217890",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/electrician-services.jpg",
  },
  {
    id: 15,
    title: "Plumbing Services",
    rating: "4.81 (268)",
    price: 90,
    phone: "9835672148",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/plumbing-services.jpg",
  },
  {
    id: 16,
    title: "Carpentry Services",
    rating: "4.84 (354)",
    price: 120,
    phone: "9823456789",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/carpentry-services.jpg",
  },
  {
    id: 17,
    title: "TV Repair",
    rating: "4.87 (112)",
    price: 500,
    phone: "9876547890",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/tv-repair.jpg",
  },
  {
    id: 18,
    title: "Microwave Repair",
    rating: "4.9 (89)",
    price: 400,
    phone: "9821347896",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/microwave-repair.jpg",
  },
  {
    id: 19,
    title: "Washing Machine Repair",
    rating: "4.82 (74)",
    price: 550,
    phone: "9832145768",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/washing-machine-repair.jpg",
  },
  {
    id: 20,
    title: "Refrigerator Repair",
    rating: "4.79 (134)",
    price: 600,
    phone: "9841234789",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/refrigerator-repair.jpg",
  },
  {
    id: 21,
    title: "Geyser Repair",
    rating: "4.83 (165)",
    price: 450,
    phone: "9823547896",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/geyser-repair.jpg",
  },
  {
    id: 22,
    title: "Home Deep Cleaning",
    rating: "4.89 (258)",
    price: 900,
    phone: "9812345679",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/home-deep-cleaning.jpg",
  },
  {
    id: 23,
    title: "Curtain Cleaning",
    rating: "4.7 (134)",
    price: 300,
    phone: "9845671236",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/curtain-cleaning.jpg",
  },
  {
    id: 24,
    title: "Chimney Cleaning",
    rating: "4.85 (220)",
    price: 350,
    phone: "9832456789",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/chimney-cleaning.jpg",
  },
  {
    id: 25,
    title: "Tile Polishing",
    rating: "4.77 (112)",
    price: 400,
    phone: "9873216548",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/tile-polishing.jpg",
  },
  {
    id: 26,
    title: "Mattress Cleaning",
    rating: "4.8 (146)",
    price: 320,
    phone: "9821236547",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/mattress-cleaning.jpg",
  },
  {
    id: 27,
    title: "Carpet Shampooing",
    rating: "4.9 (184)",
    price: 600,
    phone: "9836541234",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/carpet-shampooing.jpg",
  },
  {
    id: 28,
    title: "Water Purifier Service",
    rating: "4.88 (299)",
    price: 450,
    phone: "9845632147",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/water-purifier-service.jpg",
  },
  {
    id: 29,
    title: "Shoe Cleaning",
    rating: "4.7 (145)",
    price: 200,
    phone: "9812345876",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/shoe-cleaning.jpg",
  },
  {
    id: 30,
    title: "Vehicle Washing",
    rating: "4.87 (398)",
    price: 550,
    phone: "9821456983",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/vehicle-washing.jpg",
  },
  {
    id: 31,
    title: "Upholstery Cleaning",
    rating: "4.79 (178)",
    price: 480,
    phone: "9835674821",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/upholstery-cleaning.jpg",
  },
  {
    id: 32,
    title: "Bed Bug Treatment",
    rating: "4.84 (156)",
    price: 700,
    phone: "9842156789",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/bed-bug-treatment.jpg",
  },
  {
    id: 33,
    title: "Car Scratch Removal",
    rating: "4.75 (167)",
    price: 650,
    phone: "9812456783",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/car-scratch-removal.jpg",
  },
  {
    id: 34,
    title: "Waterproofing Service",
    rating: "4.9 (299)",
    price: 800,
    phone: "9821346579",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/waterproofing-service.jpg",
  },
  {
    id: 35,
    title: "Piano Tuning",
    rating: "4.86 (98)",
    price: 300,
    phone: "9832415768",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/piano-tuning.jpg",
  },
  {
    id: 36,
    title: "Wall Art Painting",
    rating: "4.91 (87)",
    price: 1200,
    phone: "9813456723",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/wall-art-painting.jpg",
  },
  {
    id: 37,
    title: "Pet Grooming",
    rating: "4.82 (134)",
    price: 350,
    phone: "9845762143",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/pet-grooming.jpg",
  },
  {
    id: 38,
    title: "Aquarium Cleaning",
    rating: "4.78 (154)",
    price: 250,
    phone: "9821345769",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/aquarium-cleaning.jpg",
  },
  {
    id: 39,
    title: "Drone Photography",
    rating: "4.92 (79)",
    price: 1500,
    phone: "9814567823",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/drone-photography.jpg",
  },
  {
    id: 40,
    title: "Event Catering",
    rating: "4.89 (268)",
    price: 1800,
    phone: "9845678932",
    src: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,w_64/dpr_1/c_limit/event-catering.jpg",
  },
  // Add more items with unique titles, prices, ratings, and phone numbers up to 40
];
export default data;
