

import * as React from 'react';
import { CenteredLayoutProps } from './centered.layout.model';
import * as classes from './centered.layout.styles';

export const CenteredLayout: React.FC<CenteredLayoutProps> = (props) => (
  <div className={classes.root}>{props.children}</div>
);
