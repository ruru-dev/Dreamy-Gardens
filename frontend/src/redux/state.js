import Cookies from "js-cookie";

/**
 * The inital state of the application. It's just an object with data.
 * This is literally the data that will be tracked in the state.
 */
const state = {
  user: Cookies.get('username') || null,
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
            id: 1,
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
            id: 2,
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
            id: 3,
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
    gallery: []
  },
};

export default state;
