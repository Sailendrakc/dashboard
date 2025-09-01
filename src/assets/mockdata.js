import { color } from "chart.js/helpers";

let data = {
  databox: [
    {
      title: "Likes",
      value: "10.1k",
    },
    {
      title: "Posts",
      value: "72",
    },
    {
      title: "Comments",
      value: "1.3k",
    },
    {
      title: "Shares",
      value: "566",
    },
  ],

  linechart: {
    labels: ["Jun", "Jul", "Aug", "Sept", "Oct", "Nov"],
    datasets: [
      {
        id: 1,
        label: "Revenue 2024",
        data: [15200, 17000, 16000, 16900, 19000, 21000, 25000],
      },
      {
        id: 2,
        label: "Revenue 2023",
        data: [12000, 13000, 14000, 16000, 16500, 17000, 17500],
      },
    ],
  },

  barchart: {
    labels: ["Android", "IOS", "Linux", "Windows"],
    datasets: [
      {
        data: [1255, 700, 400, 1100],
      },
    ],
  },

  piechart: {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        data: [300, 500, 200, 150, 100],
      },
    ],
  },
};

const imageUrls = [
  "https://images.freeimages.com/image/previews/952/abstract-blooms-5690073.jpg?fmt=webp&h=350",
  "https://media.istockphoto.com/id/2226207114/vector/children-camping-in-forest-watch-starry-night-sky.jpg?s=2048x2048&w=is&k=20&c=VJs_uM_DOD7Xk-DgYeZ_0vF0z30I5ihRRBLv6adzhHs=",
  "https://media.istockphoto.com/id/2229047825/vector/fun-beach-scene-with-diverse-group-of-people.jpg?s=2048x2048&w=is&k=20&c=RacbV1NkLARVuSbh6mLheRe5zgakrWrOE_JrBLwvM7E=",
  "https://media.istockphoto.com/id/2216361815/vector/vector-morning-on-a-mountain-lake.jpg?s=2048x2048&w=is&k=20&c=QluQcvUWl1miWed545l-baHwgd0XVLOOp4hjd_Nja6M=",
  "https://media.istockphoto.com/id/2121029847/vector/large-group-of-diverse-people-with-thoughts.jpg?s=2048x2048&w=is&k=20&c=cpehKywN05Xl1_PKGuggYXjT8jjNYO70qXfvDUy9dKU=",
  "https://media.istockphoto.com/id/2228756655/vector/artist-painting-sheep-in-nature-lofi-wallpaper.jpg?s=2048x2048&w=is&k=20&c=tEP0NCg5oGafUUxRBbO_gujaEi7Y3jmA7lPpVkBANhg=",
];

export const BlogData = [
  {
    imgUrl: imageUrls[0],
    title: "Flower and Ecosystem",
    description:
      "An in-depth look at the role of flowers in maintaining healthy ecosystems. How they support biodiversity and contribute to environmental balance.",
    date: "2024-04-22",
  },
  {
    imgUrl: imageUrls[1],
    title: "Exploring the Beauty of Nature",
    description:
      "Discover the wonders of the natural world and how to preserve it for future generations. Tips for eco-friendly travel and outdoor activities.",
    date: "2020-06-01",
  },
  {
    imgUrl: imageUrls[2],
    title: "Beach Life and Conservation",
    description:
      "A guide to enjoying beach life while minimizing your environmental impact. Learn about marine conservation efforts and how you can help.",
    date: "2021-02-13",
  },
  {
    imgUrl: imageUrls[3],
    title: "Mountain Adventures",
    description:
      "Experience the thrill of mountain adventures while respecting nature. Safety tips and environmental guidelines for hikers and climbers.",
    date: "2025-05-10",
  },
  {
    imgUrl: imageUrls[4],
    title: "Mental Health and diversity",
    description:
      "Understanding the importance of mental health in diverse communities. Strategies for promoting inclusivity and support for all individuals. Mindfulness and self-care practices.",
    date: "2025-05-20",
  },
  {
    imgUrl: imageUrls[5],
    title: "Art in Nature",
    description:
      "Exploring the intersection of art and nature. How artists draw inspiration from the environment and contribute to conservation through their work.",
    date: "2023-01-05",
  },
];

export const ShopData = [
  {
    imageUrl: [
      {
        url: "https://cdn.shopify.com/s/files/1/0682/1285/0865/files/a1505_996_mornington_mid_boots_mens_v2__d_600x600.jpg?v=1748381331",
        color: "rgba(126, 79, 45, 1)",
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0682/1285/0865/files/a1505_nzm_mornington_mid_boots_men_1_600x600.jpg?v=1746140253",
        color: "rgba(58, 26, 4, 1)",
      },
    ],
    name: "Hiking Boots",
    price: "$75",
  },
  {
    imageUrl: [
      {
        url: "https://cdn.shopify.com/s/files/1/0682/1285/0865/files/b1315_902_keen_targhee_iv_wp_me_b_600x600.jpg?v=1746142527",
        color: "rgba(0, 0, 0, 1)",
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0682/1285/0865/files/b1315_oop_keen_targhee_iv_wp_mens_bison_b_600x600.jpg?v=1746142528",
        color: "rgba(111, 85, 61, 1)",
      },
    ],
    name: "Waterproof Shoes",
    price: "$80",
  },
  {
    imageUrl: [
      {
        url: "https://www.anacondastores.com/medias/BP90154571-black.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wzNDM1MnxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaGQxLzEwNzY3NzgxOTIwNzk4L0JQOTAxNTQ1NzEtYmxhY2suanBnX1NQT1RXRl9wcm9kdWN0SGVyb3w3OGM2ODFlYTI3NGI5Mzk0YmQ4NTMwYTAwMDU3Y2IxOWZjMjdiNTU1ZTM1MmUwYzcxZjdhMTUxNmE1YjUxZWZl",
      },
    ],
    name: "Hiking bag",
    price: "$50",
  },
  {
    imageUrl: [
      {
        url: "https://www.anacondastores.com/medias/BP90193109-rust-rose.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3w1MjI3N3xpbWFnZS9qcGVnfGltYWdlcy9oYjYvaDAxLzE0Njc3MDA4Njc4OTQyL0JQOTAxOTMxMDktcnVzdC1yb3NlLmpwZ19TUE9UV0ZfcHJvZHVjdEhlcm98ZGQ3M2M5OWVjZWIzNGI2ODhkYzRmY2QyNTkxMTM4NTQ1NmNmZDM5MGVmYmVkYTA0ZTg5ZDk0ZGQzNThmMDQ4OQ",
        color: "rgba(183, 65, 14, 1)",
      },
      {
        url: "https://www.anacondastores.com/medias/BP90193109-navy.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3w1MTI4MnxpbWFnZS9qcGVnfGltYWdlcy9oYTYvaGMxLzE0Njc3MDk4MjY2NjU0L0JQOTAxOTMxMDktbmF2eS5qcGdfU1BPVFdGX3Byb2R1Y3RIZXJvfGI3NjdiNjVlNmIyYzMyNTM0MmM0ZmMyZjk5OGQ0ZTJiNjAyY2IzOTJhYmQyOWY4OTcwZWQwMjFiZmJlYjg1ZDk",
        color: "rgba(14, 32, 65, 1)",
      },
    ],
    name: "Travel Backpack",
    price: "$100",
  },
  {
    imageUrl: [
      {
        url: "https://www.anacondastores.com/medias/productHero-SPOTWF-BP90042174-navy-orange.jpg?context=bWFzdGVyfGltYWdlc3wxMjcwNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDBhL2g3ZC8xNjk4MTIyODM1NTYxNC9wcm9kdWN0SGVyb19TUE9UV0ZfQlA5MDA0MjE3NC1uYXZ5LW9yYW5nZS5qcGd8NjMwNWU2MjU4MDFiYWEyYTM1MzYzNzAzYzE4NjljYWM1MzFmNDU4Zjk0NjdjMTU3ZDk2ZTMwZDlmMjQ2M2UzMg",
        color: "rgba(0, 32, 65, 1)",
      },
    ],
    name: "Single sleeping bag",
    price: "$100",
  },
  {
    imageUrl: [
      {
        url: "https://www.anacondastores.com/medias/productHero-SPOTWF-BP90219121-slate-blue.jpg?context=bWFzdGVyfGltYWdlc3wxNzk2NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGJhL2gyNy8xNjk4MTQxNTg4Njg3OC9wcm9kdWN0SGVyb19TUE9UV0ZfQlA5MDIxOTEyMS1zbGF0ZS1ibHVlLmpwZ3w1YTFkMWM1NjIxMjg0MTYyZjMxNzMwY2NhNzUxZDFhMmIwOWY1NzFhNTM4YThhNTdmNjk4Y2IzNTU0NGNiMjAw",
        color: "rgba(52, 73, 94, 1)",
      },
    ],
    name: "Dobule sleeping bag",
    price: "$150",
  },
  {
    imageUrl: [
      {
        url: "https://www.anacondastores.com/medias/BP90035401001-camo.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3w1NjQ4OHxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDhiLzEwNzgxNDgxNjY0NTQyL0JQOTAwMzU0MDEwMDEtY2Ftby5qcGdfU1BPVFdGX3Byb2R1Y3RIZXJvfDQ4MTZjZTE2ZmZlYzY5NTMzZGMwNGRiMjFhYmZkN2IxY2E2N2IzOWE2OTJmYTgxNzBhYzdlMzFhM2JjZGUxMGY",
        color: "rgba(107, 110, 105, 1)",
      },
    ],
    name: "Hibrid Kayak",
    price: "$120",
  },
  {
    imageUrl: [
      {
        url: "https://www.anacondastores.com/medias/BP90076552-yellow.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wzNzA3MXxpbWFnZS9qcGVnfGltYWdlcy9oNDYvaDQ3LzEwMDkyNzQzODg0ODMwL0JQOTAwNzY1NTIteWVsbG93LmpwZ19TUE9UV0ZfcHJvZHVjdEhlcm98NWE4OGE0NjA2MTNkZDFlYjllNGYyNDJjNGM2ZWMyZjY0MjI0NzRiNzIyNDE4MjQ5NzM4ZjE5OWY4YWMxZDZiYg",
        color: "rgba(255, 223, 0, 1)",
      },
    ],
    name: "Touring Kayak",
    price: "$180",
  },
  {
    imageUrl: [
      {
        url: "https://www.anacondastores.com/medias/BP90213399-blue-grey.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3w1MDgzNnxpbWFnZS9qcGVnfGltYWdlcy9oZTUvaDI3LzE1NTU2MzM5MzY3OTY2L0JQOTAyMTMzOTktYmx1ZS1ncmV5LmpwZ19TUE9UV0ZfcHJvZHVjdEhlcm98MzA0MTRiZTUwZjAzMzMwNGIwNDYyMjgzNDg2MjAzZjM2MDMxYWM4OTI2MTJhNGY1MDI4ZWQxZTE3YWY0ZDAyZQ",
        color: "rgba(14, 32, 65, 1)",
      },
    ],
    name: "Snorkling Set",
    price: "$80",
  },
];

export default data;
