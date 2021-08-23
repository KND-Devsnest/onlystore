import React from "react";
import { withStyles } from "@material-ui/core";

//reference: https://lifesaver.codes/answer/can-withstyles-pass-props-to-styles-object

// beware:
// injected CSS will grow +- same way html would grow with inline styles.
// Unlike static styles which are rendered in separate sheets and reused across all component instances.

// withStylesProps HOC uses withStyles
// eslint-disable-next-line react/display-name
const withStylesProps = (styles) => (Component) => (props) => {
  const Comp = withStyles((theme) => styles({ ...props, theme }))(Component);
  return <Comp {...props} />;
};

export default withStylesProps;
