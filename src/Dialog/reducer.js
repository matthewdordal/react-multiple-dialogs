// @flow

import type { DialogContentComponent } from './index';

export type OpenDialogAction = {
  type: 'OPEN_DIALOG',
  payload: DialogContentComponent,
};

export type CloseDialogAction = {
  type: 'CLOSE_DIALOG'
};

type DialogActions = OpenDialogAction | CloseDialogAction;

type State = {
  +isOpen: boolean,
  +componentName: DialogContentComponent
};


export const openDialog = (componentName: DialogContentComponent): OpenDialogAction => ({
  type: 'OPEN_DIALOG',
  payload: componentName
});

export const closeDialog = (): CloseDialogAction => ({
  type: 'CLOSE_DIALOG'
})

const initialState = {
  isOpen: false,
  componentName: 'DefaultDialogContent'
};

const dialogReducer = (state: State = initialState, action: DialogActions): State => {
  switch (action.type) {
    case 'OPEN_DIALOG': {
      const { payload } = action;
      const newState = {
        ...initialState,
        isOpen: true,
        componentName: payload
      };

      return newState;
    }
    case 'CLOSE_DIALOG': {
      const newState = {
        ...initialState
      }

      return newState
    }
    default: {
      return state;
    }
  }
}

export default dialogReducer;
