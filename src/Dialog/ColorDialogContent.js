// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DialogContentText, DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { closeDialog } from './reducer';

import type { CloseDialogAction } from './reducer'

type Props = {
  closeDialog: () => CloseDialogAction
};

export class DefaultDialogContent extends React.Component<Props> {
  handleClose = () => {
    this.props.closeDialog()
  }

  render () {
    return (
      <div>
        <DialogContentText>Color content</DialogContentText>
        <DialogActions>
          <Button onClick={this.handleClose}>Close</Button>
        </DialogActions>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  closeDialog
}, dispatch);

export default connect(null, mapDispatchToProps)(DefaultDialogContent);
