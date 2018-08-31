const enum Page {
  Intro = "Intro",
  Hashing = "Hashing",
  Symmetric = "Symmetric",
  Public = "Public"
}

interface IPageAction {
  type: Page;
}

interface IPageState {
  currentPage: Page;
}

const CurrentPage = (
  state: IPageState = { currentPage: Page.Intro },
  action: IPageAction
): IPageState => {
  switch (action.type) {
    case Page.Intro:
      return { ...state, currentPage: Page.Intro };
    case Page.Hashing:
      return { ...state, currentPage: Page.Hashing };
    case Page.Symmetric:
      return { ...state, currentPage: Page.Symmetric };
    default:
      return state;
  }
};

export default CurrentPage;
