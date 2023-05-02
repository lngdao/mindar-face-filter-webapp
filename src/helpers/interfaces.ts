import { Entity as _Entity, Scene as _Scene } from 'aframe-react-component/dist/utils/interface';

export type DefaultARProps = {
  autoStart?: boolean;
  uiLoading?: string;
  uiScanning?: string;
  uiError?: string;
  filterMinCF?: number;
  filterBeta?: number;
  shouldFaceUser?: boolean;
  _positionSettings?: string;
  _positionZIndex?: number;
};

export type MindARFace = DefaultARProps & {
  faceOccluder?: boolean;
};

export type Scene = _Scene & {
  'gesture-detector'?: boolean;
  'mouse-detector'?: boolean;
  mindARFace?: MindARFace;
  children?: React.ReactNode;
  arEvents?: IAREvents[] | IAREvents;
};

export type Faces = _Entity & {
  anchorIndex?: number;
};

export type IAREvents = {
  eventName: 'arReady' | 'arError' | 'targetFound' | 'targetLost';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callbacks: (e: any) => void;
};
