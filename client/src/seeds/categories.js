const categories = [
  {
    name: "Project 1",
    location: "Savvinskaya Naberezhnaya 17",
    geometry: [37.56567793970108, 55.73461611998274],
    minPrice: 1000,
    maxPrice: 10000,
    completionDate: 2024,
    appartments: [
      { rooms: 1, price: 1000 },
      { rooms: 2, price: 2000 },
      { rooms: 2, price: 2700 },
      { rooms: 3, price: 3000 },
      { rooms: 4, price: 4000 },
      { rooms: 4, price: 4500 },
      { rooms: 5, price: 10000 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569807/Lestate/project_1/savvinskaya1_pkrkwx.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569805/Lestate/project_1/savvinskaya2_jkayzt.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569803/Lestate/project_1/savvinskaya_orbpit.webp",
        },
      ],
      other: [],
    },
  },
  {
    name: "Project 2",
    location: "Kutuzovsky prospekt 12",
    geometry: [37.55842126829155, 55.748699126749315],
    minPrice: 2000,
    maxPrice: 20000,
    completionDate: 2025,
    appartments: [
      { rooms: 1, price: 2000 },
      { rooms: 1, price: 2700 },
      { rooms: 2, price: 3000 },
      { rooms: 2, price: 4700 },
      { rooms: 3, price: 6000 },
      { rooms: 4, price: 9000 },
      { rooms: 4, price: 15000 },
      { rooms: 5, price: 20000 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569859/Lestate/project_2/Badaevsky_sesyu8.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569859/Lestate/project_2/478_CI_1902_RIVERSIDE-VIEW_FEA_gnpuxq.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569862/Lestate/project_2/Badaevsky_1_yfeq27.jpg",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569860/Lestate/project_2/478_CI_1902_PARK_pup7zc.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569865/Lestate/project_2/478_CI_1911_002_Park-Walker_jpkslj.jpg",
        },
      ],
    },
  },
  {
    name: "Project 3",
    location: "Ozyornaya Ulitsa 42",
    geometry: [37.44541819712152, 55.6717346291412],
    minPrice: 500,
    maxPrice: 8700,
    completionDate: 2024,
    appartments: [
      { rooms: 1, price: 500 },
      { rooms: 1, price: 1000 },
      { rooms: 2, price: 2800 },
      { rooms: 2, price: 3300 },
      { rooms: 3, price: 6000 },
      { rooms: 4, price: 6900 },
      { rooms: 4, price: 8000 },
      { rooms: 5, price: 8700 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570137/Lestate/project_3/ozernaya1_yuwv11.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570133/Lestate/project_3/ozernaya_6_unhzel.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570132/Lestate/project_3/ozernaya_5_xwkreb.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570135/Lestate/project_3/ozernaya_f5ean6.jpg",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570135/Lestate/project_3/ozernaya_3_ezjprp.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570124/Lestate/project_3/ozernaya_2_dnk2z9.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570137/Lestate/project_3/ozernaya_4_mxwobr.jpg",
        },
      ],
    },
  },
  {
    name: "Project 4",
    location: "Malyy Kozikhinskiy Pereulok 9",
    geometry: [37.59620551062187, 55.76463283679581],
    minPrice: 2000,
    maxPrice: 15400,
    completionDate: 2023,
    appartments: [
      { rooms: 1, price: 2000 },
      { rooms: 1, price: 2700 },
      { rooms: 2, price: 3000 },
      { rooms: 2, price: 4700 },
      { rooms: 3, price: 6000 },
      { rooms: 4, price: 9000 },
      { rooms: 4, price: 11000 },
      { rooms: 5, price: 15400 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569913/Lestate/project_4/levenson_3_ivalcq.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569912/Lestate/project_4/levenson_2_m2x6gw.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569915/Lestate/project_4/levenson_4_uw6qpb.jpg",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569922/Lestate/project_4/levenson_6_ltli8p.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569918/Lestate/project_4/levenson_bdfqy0.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569915/Lestate/project_4/levenson_5_jjirwo.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705569911/Lestate/project_4/levenson_1_h0z4iv.jpg",
        },
      ],
    },
  },
  {
    name: "Project 5",
    location: "Derbenevskaya Ulitsa 15",
    geometry: [37.64843628363125, 55.72102561406191],
    minPrice: 1300,
    maxPrice: 8000,
    completionDate: 2026,
    appartments: [
      { rooms: 1, price: 1300 },
      { rooms: 1, price: 1700 },
      { rooms: 2, price: 3000 },
      { rooms: 2, price: 4000 },
      { rooms: 3, price: 5000 },
      { rooms: 4, price: 6700 },
      { rooms: 4, price: 7000 },
      { rooms: 5, price: 8000 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570059/Lestate/project_5/derbenevskaya_4_azyula.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570050/Lestate/project_5/derbenevskaya_1_bnvdb7.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570051/Lestate/project_5/derbenevskaya_3_mptbvi.jpg",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570061/Lestate/project_5/derbenevskaya_zpfp8p.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570062/Lestate/project_5/derbenevskaya_5_la7mey.jpg",
        },
      ],
    },
  },
  {
    name: "Project 6",
    location: "Ulitsa Arkhitektora Shchuseva 2",
    geometry: [37.635802825959, 55.700439515903355],
    minPrice: 1500,
    maxPrice: 13000,
    completionDate: 2024,
    appartments: [
      { rooms: 1, price: 1500 },
      { rooms: 1, price: 2000 },
      { rooms: 2, price: 3000 },
      { rooms: 2, price: 4700 },
      { rooms: 3, price: 6000 },
      { rooms: 4, price: 9000 },
      { rooms: 4, price: 11000 },
      { rooms: 5, price: 13000 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570211/Lestate/project_6/pride_q1ktno.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570197/Lestate/project_6/pride_2_o9fnro.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570199/Lestate/project_6/pride_1_wb4w18.jpg",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570198/Lestate/project_6/pride_3_qrkp5o.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570210/Lestate/project_6/pride_5_u7mqvp.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570207/Lestate/project_6/pride_4_di3pq4.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570205/Lestate/project_6/pride_6_qxxfk6.jpg",
        },
      ],
    },
  },
  {
    name: "Project 7",
    location: "Ulitsa Vereyskaya 29",
    geometry: [37.42976568363038, 55.70982457347501],
    minPrice: 900,
    maxPrice: 5000,
    completionDate: 2025,
    appartments: [
      { rooms: 1, price: 900 },
      { rooms: 1, price: 1300 },
      { rooms: 2, price: 2000 },
      { rooms: 2, price: 3000 },
      { rooms: 3, price: 3400 },
      { rooms: 4, price: 4000 },
      { rooms: 4, price: 4100 },
      { rooms: 5, price: 5000 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570283/Lestate/project_7/vereyskaya_sejsdm.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570282/Lestate/project_7/vereyskaya_1_jykcrc.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570283/Lestate/project_7/vereyskaya_3_weov7i.jpg",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570280/Lestate/project_7/vereyskaya_2_vy4dzb.jpg",
        },
      ],
    },
  },
  {
    name: "Project 8",
    location: "Botanicheskaya Ulitsa 29",
    geometry: [37.59331348363897, 55.83349133021147],
    minPrice: 1000,
    maxPrice: 11000,
    completionDate: 2024,
    appartments: [
      { rooms: 1, price: 1000 },
      { rooms: 1, price: 1700 },
      { rooms: 2, price: 3000 },
      { rooms: 2, price: 4700 },
      { rooms: 3, price: 7000 },
      { rooms: 4, price: 8000 },
      { rooms: 4, price: 9000 },
      { rooms: 5, price: 11000 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570341/Lestate/project_8/very_1_cenhpw.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570369/Lestate/project_8/very_vw7jkk.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570358/Lestate/project_8/very_5_a8xxna.jpg",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570365/Lestate/project_8/very_7_pndouh.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570363/Lestate/project_8/very_8_lcncho.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570350/Lestate/project_8/very_2_rrlndo.jpg",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705570364/Lestate/project_8/very_6_owdiyd.jpg",
        },
      ],
    },
  },
  {
    name: "Project 9",
    location: "Minskaya Ulitsa 2",
    geometry: [37.50346855479544, 55.716446111586976],
    minPrice: 2000,
    maxPrice: 20000,
    completionDate: 2026,
    appartments: [
      { rooms: 1, price: 2000 },
      { rooms: 1, price: 2700 },
      { rooms: 2, price: 3000 },
      { rooms: 2, price: 4700 },
      { rooms: 3, price: 6000 },
      { rooms: 4, price: 9000 },
      { rooms: 4, price: 15000 },
      { rooms: 5, price: 20000 },
    ],
    images: {
      preview: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577897/Lestate/project_9/nova_4_hin1mi.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577899/Lestate/project_9/nova_6_kv2vfn.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577904/Lestate/project_9/nova_egethh.webp",
        },
      ],
      other: [
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577888/Lestate/project_9/nova_1_vsq02k.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577890/Lestate/project_9/nova_2_dxxbvy.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577894/Lestate/project_9/nova_3_jvzxpw.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577898/Lestate/project_9/nova_5_hcme4d.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577901/Lestate/project_9/nova_8_dx0co6.webp",
        },
        {
          url: "https://res.cloudinary.com/dbtiavx0o/image/upload/v1705577900/Lestate/project_9/nova_7_v7rxck.webp",
        },
      ],
    },
  },
];

export default categories;
