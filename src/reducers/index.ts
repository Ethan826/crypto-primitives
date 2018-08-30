const enum Page {
  Intro = "Intro",
  Hashing = "Hashing",
  Symmetric = "Symmetric",
  Public = "Public"
}

interface IState {
  page: Page;
}

interface IPageAction {
  type: Page;
}

const CurrentPage = (state: IState, action: IPageAction): IState => {
  switch (action.type) {
    case Page.Intro
      return { ...state, page: Page.Intro };
    default:
      return state;
  }
};

export default CurrentPage;
