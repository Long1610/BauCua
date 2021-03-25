import * as types from "../Constants/ChoiGameBauCua.constants";
export const choiGame = () => {
  return {
    type: types.CHOI_GAME
  };
};
export const datCuoc = ma => {
  return {
    type: types.DAT_CUOC,
    ma
  };
};
export const resetDiem = () => {
  return {
    type: types.RESET_DIEM
  };
};
export const checkClick = isExit => {
  return {
    type: types.CHECK_CLICK,
    isExit
  };
};
