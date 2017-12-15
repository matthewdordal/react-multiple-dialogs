// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { openDialog } from '../Dialog/reducer';
import type { DialogContentComponent } from '../Dialog';
import type { OpenDialogAction } from '../Dialog/reducer';

type Props = {
  classes: Object,
  openDialog: (string: DialogContentComponent) => OpenDialogAction;
};

const style = () => ({
  root: {
    border: '1px solid rebeccapurple',
    padding: '1em'
  }
});

export class Content extends React.Component<Props> {
  static defaultProps = {
    classes: {}

  }
  openDialog = (componentName: DialogContentComponent) => (event: SyntheticEvent<HTMLButtonElement>) => {
    console.log('click', componentName)
    this.props.openDialog(componentName)
  }
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Button onClick={this.openDialog('DefaultDialogContent')}>Click to open a default dialog</Button>
        <Button onClick={this.openDialog('ColorDialogContent')}>Click to open a different Dialog</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  openDialog
}, dispatch);

export default connect(null, mapDispatchToProps)(
  withStyles(style)(Content)
);
