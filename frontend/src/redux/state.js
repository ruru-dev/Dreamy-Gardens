/**
 * The inital state of the application. It's just an object with data.
 * This is literally the data that will be tracked in the state.
 */
const state = {
  user: null,
  inspos: {
    featured: [
        {
          id: 1,
          image_url:
            "https://i.pinimg.com/1200x/8a/1d/a3/8a1da3eaa79ba290da5bac6f76b69048.jpg",
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["Allium", "Japanese Maple", "Japanse Boxwood"],
          user: {
            user_id: 1,
            firstname: "Laura",
            lastname: "Leboutillier",
          },
          submit_date: "2023-09-28T07:56:15Z",
          image_date: "2023-09-28T07:56:15Z",
          zone: "6b",
          state: "Oregon",
          country: "US",
          sun_exposure: "",
          soil_type: "",
          fertilizer_schedule: "",
        },
        {
          id: 2,
          image_url:
            "https://static.wixstatic.com/media/202305_baa05835051b420a87caae545e08e012~mv2.jpg/v1/fill/w_640,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/202305_baa05835051b420a87caae545e08e012~mv2.jpg",
          title: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["Tulip", "Sunshine Ligustrum", "Petunia"],
          user: {
            user_id: 2,
            firstname: "Linda",
            lastname: "Vater",
          },
          submit_date: "2023-09-28T07:56:15Z",
          image_date: "2023-09-28T07:56:15Z",
          zone: "7a",
          state: "Oklahoma",
          country: "US",
          sun_exposure: "",
          soil_type: "",
          fertilizer_schedule: "",
        },
        {
          id: 3,
          image_url:
            "https://images.squarespace-cdn.com/content/v1/5ad65e9525bf0201d1256639/97b155a5-838e-4c40-bf79-26b1fc1df673/7P6A5769-DESKTOP-HG1ULRK.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          title: "",
          tags: ["Tulip", "Burford Holly", "Sunshine Ligustrum"],
          user: {
            user_id: 3,
            firstname: "Jim",
            lastname: "Putnam",
          },
          submit_date: "2023-09-28T07:56:15Z",
          image_date: "2023-09-28T07:56:15Z",
          zone: "7a",
          state: "North Carolina",
          country: "US",
          sun_exposure: "",
          soil_type: "",
          fertilizer_schedule: "",
        }
    ],
    gallery: [
      {
        id: 1,
        image_url:
          "https://i.pinimg.com/1200x/8a/1d/a3/8a1da3eaa79ba290da5bac6f76b69048.jpg",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
        tags: ["Allium", "Japanese Maple", "Japanse Boxwood"],
        user: {
          user_id: 1,
          firstname: "Laura",
          lastname: "Leboutillier",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "6b",
        state: "Oregon",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 2,
        image_url:
          "https://static.wixstatic.com/media/202305_baa05835051b420a87caae545e08e012~mv2.jpg/v1/fill/w_640,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/202305_baa05835051b420a87caae545e08e012~mv2.jpg",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
        tags: ["Tulip", "Sunshine Ligustrum", "Petunia"],
        user: {
          user_id: 2,
          firstname: "Linda",
          lastname: "Vater",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "7a",
        state: "Oklahoma",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 3,
        image_url:
          "https://images.squarespace-cdn.com/content/v1/5ad65e9525bf0201d1256639/97b155a5-838e-4c40-bf79-26b1fc1df673/7P6A5769-DESKTOP-HG1ULRK.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
        title: "",
        tags: ["Tulip", "Burford Holly", "Sunshine Ligustrum"],
        user: {
          user_id: 3,
          firstname: "Jim",
          lastname: "Putnam",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "7a",
        state: "North Carolina",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 4,
        image_url:
          "https://i.pinimg.com/1200x/76/d0/f2/76d0f26b710fb9de57fafb4c96881309.jpg",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["At-Last Rose", "Limelight Prime Hydrangea", "Superbell"],
        user: {
          user_id: 1,
          firstname: "Laura",
          lastname: "Leboutillier",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "6b",
        state: "Oregon",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 5,
        image_url:
          "https://images.405magazine.com/wp-content/uploads/2022/02/07-July-Feature-Outdoor-Focus-2.jpg",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["Japanese Boxwood", "Mystic Spires Salvia", "Waxleaf Ligustrum"],
        user: {
          user_id: 2,
          firstname: "Linda",
          lastname: "Vater",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "7a",
        state: "Oklahoma",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 6,
        image_url:
          "https://images.squarespace-cdn.com/content/v1/5ad65e9525bf0201d1256639/1ad2969f-8b6b-4b05-86fa-17ad83550ea8/7P6A9454.jpg?format=2500w",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["Zinnia"],
        user: {
          user_id: 3,
          firstname: "Jim",
          lastname: "Putnam",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "7a",
        state: "North Carolina",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 7,
        image_url: "https://i.ytimg.com/vi/-AQLz4YtML0/maxresdefault.jpg",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["Supertunia Bubblegum Vista", "Indiglo Girl Salvia", "Cats Pajamas Nepeta"],
        user: {
          user_id: 1,
          firstname: "Laura",
          lastname: "Leboutillier",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "6b",
        state: "Oregon",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 8,
        image_url:
          "https://cdn.shopify.com/s/files/1/1308/4845/files/Screen-Shot-2021-10-25-at-4.06.57-PM.jpg?v=1635192739",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["English Ivy", "Baby Gem Boxwood", "Petunia"],
        user: {
          user_id: 2,
          firstname: "Linda",
          lastname: "Vater",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "7a",
        state: "Oklahoma",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
      {
        id: 9,
        image_url:
          "https://images.squarespace-cdn.com/content/v1/5ad65e9525bf0201d1256639/e6293c55-c833-4e7d-a48a-f7de76763088/7P6A6679.jpg",
        title: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.",
          tags: ["Japanese Maple"],
        user: {
          user_id: 3,
          firstname: "Jim",
          lastname: "Putnam",
        },
        submit_date: "2023-09-28T07:56:15Z",
        image_date: "2023-09-28T07:56:15Z",
        zone: "7a",
        state: "North Carolina",
        country: "US",
        sun_exposure: "",
        soil_type: "",
        fertilizer_schedule: "",
      },
    ],
  },
};

export default state;
