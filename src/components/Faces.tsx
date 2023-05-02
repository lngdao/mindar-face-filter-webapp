import React from 'react';
import { Entity } from 'aframe-react-component';
import { Entity as AEntity } from 'aframe';
import { Faces as FacesProps } from '../helpers/interfaces';

const Faces = React.forwardRef<AEntity, FacesProps>(
  ({ anchorIndex, ...props }, ref) => (
    <Entity
      {...props}
      mindar-face-target={`anchorIndex: ${anchorIndex}`}
      ref={ref}
    />
  )
);

Faces.displayName = 'Faces';

export default Faces;
