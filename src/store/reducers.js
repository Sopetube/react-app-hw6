import { ADD_PUBLICATION } from "../actions";

const initialPublications = [
  {
    author: "Kika Vidze",
    nickname: "@kika",
    date: "32 Feb",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
  {
    author: "Casse de la Manche",
    nickname: "@cdlm",
    date: "30 Feb",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eros libero. Vestibulum arcu diam.",
  },
];


const initialState = {
  publications: initialPublications,
};

const publicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PUBLICATION:
      return {
        ...state,
        publications: [...state.publications, action.payload],
      };
    default:
      return state;
  }
};

export default publicationReducer;