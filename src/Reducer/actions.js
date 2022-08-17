import { BOOKMARK, GETRID } from "./actionType";

export const bookmark = (key, value) => {
  return {
    type: BOOKMARK,
    key: key,
    value: value
  };
};
export const unmark = (key, value) => {
  return {
    type: GETRID,
    key: key,
    value: value
  };
};