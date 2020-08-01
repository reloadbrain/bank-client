import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { actions as registrationPageActions } from 'app/containers/RegistrationPage/slice';

// The initial state of the App container
export const initialState: ContainerState = {
  isCollapsedSidebar: false,
  isCollapsedDrawer: false,
  isLogged: false,
  token: {},
  user: {},
  currencies: [],
};

const appSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getCurrenciesRequestAction() {},
    getCurrenciesSuccessAction(state, action: PayloadAction<any>) {
      state.currencies = action.payload;
    },
    getCurrenciesErrorAction(state, action: PayloadAction<any>) {},
    checkEmailRequestAction(state, action: PayloadAction<any>) {},
    checkEmailSuccessAction(state, action: PayloadAction<any>) {},
    checkEmailErrorAction(state, action: PayloadAction<any>) {},
    checkEmailInvalidAction() {},
  },
  extraReducers: {
    [registrationPageActions.loginExpressSuccessAction.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
