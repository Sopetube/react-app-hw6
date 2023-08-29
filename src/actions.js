export const ADD_PUBLICATION = "ADD_PUBLICATION";

export const addPublication = (publication) => {
  return {
    type: ADD_PUBLICATION,
    payload: publication,
  };
};