import { createSlice } from "@reduxjs/toolkit";
import avatarSrc_2 from "../../../../public/images/users/2.svg";

interface InitalStateInterface {
  id: number;
  cards: Array<ICard>;
  activeCard: ICard;
  selectionMode: false;
  allUsersChecked: false;
  checkedUsers: Array<number>;
}

const activeCard = {
  avatarSrc: avatarSrc_2,
  firstAndLastName: "Рожков Денис",
  id: 1,
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    cards: [],
    activeCard,
    selectionMode: false,
    allUsersChecked: false,
    checkedUsers: [],
  } as InitalStateInterface,
  reducers: {
    activeUser: (state, action) => {
      state.id = action.payload;

      const activeCard = state.cards.filter((item) => item.id === state.id)[0];
      state.activeCard = activeCard;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setMode: (state, action) => {
      state.selectionMode = action.payload;
    },
    setAllUsersChecked: (state, action) => {
      state.allUsersChecked = action.payload;
    },

    setCheckedUsers: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.checkedUsers = action.payload;
      } else {
        if (state.checkedUsers.includes(action.payload)) {
          state.checkedUsers = [...state.checkedUsers].filter(
            (id) => id !== action.payload
          );
        } else {
          state.checkedUsers = [...state.checkedUsers, action.payload];
        }
      }
    },
  },
});

export const {
  activeUser,
  setCards,
  setMode,
  setAllUsersChecked,
  setCheckedUsers,
} = userSlice.actions;

export default userSlice.reducer;
