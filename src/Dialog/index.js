// @flow

import * as React from 'react';
import MuiDialog, { DialogContent } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import DefaultDialogContent from './DefaultDialogContent';
import ColorDialogContent from './ColorDialogContent';

const dialogContentMap = {
  DefaultDialogContent,
  ColorDialogContent
};

export type DialogContentComponent = $Keys<typeof dialogContentMap>

export const getDialogContent = (componentName: DialogContentComponent) =>
  dialogContentMap[componentName]

type Props = {
  isOpen: boolean,
  componentName: DialogContentComponent
};

const Transition = (props: Object) => <Slide direction="up" {...props} />;

export const Dialog = (props: Props) => {
  const { isOpen, componentName } = props;

  // default to the DefaultContent component
  const contentComponent = getDialogContent(componentName);
  return (
    <MuiDialog open={isOpen} transition={Transition}>
      <DialogContent>{React.createElement(contentComponent)}</DialogContent>
    </MuiDialog>
  );
}

export default Dialog
