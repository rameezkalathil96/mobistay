import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: [
      {
        name: "sulaimaan",
        email: "a@gmail.com",
        password: "13",
        role: "user",
      },
      {
        name: "Muhammed Shad",
        email: "Shad",
        password: "1234566",
        role: "admin",
      },
    ],
    isLoggedin: 0,
  },
  reducers: {
    loginto(state, action) {
      state.isLoggedin = action.payload;
      // localStorage.setItem(
      //   "isloggedin",
      //   JSON.stringify(state.isLoggedin)
      // );
    },

    addtoLogin(state, action) {
      console.log("112", action.payload);
      state.isLoggedin.push(action.payload);
    },
    addtoLogin(state, action) {
      console.log("112", action.payload);
      state.isLoggedin.push(action.payload);
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
