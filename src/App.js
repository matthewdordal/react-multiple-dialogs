// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Content from './Content';
import Dialog from './Dialog';

import type { DialogContentComponent } from './Dialog';

type Props = {
  classes: Object,
  isOpen: boolean,
  componentName: DialogContentComponent
};

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(147, 128, 108, 0.098)'
  }
})

class App extends React.Component<Props> {
  static defaultProps = {
    classes: {}
  }

  render() {
    const { classes, isOpen, componentName } = this.props

    return (
      <div className={classes.root}>
        <Content />
        <Dialog
          isOpen={isOpen}
          componentName={componentName}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: Object) => {
  const {
    dialog: {
      isOpen,
      componentName
    }
  } = state;

  return {
    isOpen,
    componentName
  }
}

export default connect(mapStateToProps)(
  withStyles(styles)(App)
);
