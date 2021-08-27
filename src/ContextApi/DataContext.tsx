import { useState, useReducer } from "react";
import { ReactElement } from "react";
import { createContext, ReactNode } from "react";

type ContextState = {
  articles: object[] | [];
};

const initialState: ContextState = {
  articles: [],
};

type Action = {type: 'SAVE_ARTICLES_VALUE', payload: object[]};

function articlesReducer (state: ContextState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case 'SAVE_ARTICLES_VALUE':
      return {
        ...state,
        articles: payload
      }
    default:
      return state;
  }
}

const DataContext = createContext<{
  state: ContextState,
  dispatch: React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => {}
});

function Provider({
  children,
}: {
  children: ReactNode;
}): ReactElement {

  const [state, dispatch] = useReducer(articlesReducer, initialState);

  return (
    <div>
      <DataContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}

export { Provider, DataContext}
