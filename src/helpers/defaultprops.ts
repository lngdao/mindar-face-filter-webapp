import { DefaultARProps, MindARFace } from './interfaces';

const generateDefaultProps = (
  mindARDefault: DefaultARProps,
  isFace: boolean
) => {
  if (mindARDefault?.autoStart === undefined) mindARDefault.autoStart = true;
  if (mindARDefault?.uiLoading === undefined) mindARDefault.uiLoading = 'yes';
  if (mindARDefault?.uiScanning === undefined) mindARDefault.uiScanning = 'no';
  if (mindARDefault?.uiError === undefined) mindARDefault.uiError = 'no';
  if (mindARDefault?.filterMinCF === undefined) mindARDefault.filterMinCF = -1;
  if (mindARDefault?.filterBeta === undefined) mindARDefault.filterBeta = -1;
  if (mindARDefault?.shouldFaceUser === undefined)
    mindARDefault.shouldFaceUser = isFace;
  if (mindARDefault?._positionSettings === undefined)
    mindARDefault._positionSettings = 'absolute';
  if (mindARDefault?._positionZIndex === undefined)
    mindARDefault._positionZIndex = -2;

  return mindARDefault;
};

export const generateFaceProps = (mindARFace: MindARFace) => {
  generateDefaultProps(mindARFace, true);

  if (mindARFace?.faceOccluder === undefined) mindARFace.faceOccluder = true;

  return mindARFace;
};
