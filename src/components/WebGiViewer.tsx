import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  LegacyRef,
} from 'react';
import {
  ViewerApp,
  AssetManagerPlugin,
  GLTFAnimationPlugin,
  addBasePlugins,
  TonemapPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  GammaCorrectionPlugin,
  SSRPlugin,
  BloomPlugin,
  SSAOPlugin,
  AssetImporter,
} from 'webgi';

const WebGiViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement | undefined>(undefined);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
      useRgbm: true,
    });

    // Add some plugins
    const manager = await viewer.addPlugin(
      AssetManagerPlugin,
      undefined,
      undefined,
      { storage: caches ? await caches.open('webgi-cache-storage') : undefined }
    );

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    await addBasePlugins(viewer);

    viewer.renderer.refreshPipeline();

    await manager.addFromPath('girl-scene.glb', {
      autoScale: true,
    });

    // Camera Options
    const options = viewer.scene.activeCamera.getCameraOptions();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    options.fov = 17;
    viewer.scene.activeCamera.setCameraOptions(options);

    // Control Options
    const controls = viewer.scene.activeCamera.controls;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    controls.autoRotate = true;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    controls.enableDamping = true;

    const gltfAnims: GLTFAnimationPlugin =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      viewer.getPlugin(GLTFAnimationPlugin)!;
    gltfAnims.playAnimation();
    gltfAnims.animationSpeed = 0.8;
    gltfAnims.loopRepetitions = Infinity;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    viewer.getPlugin(TonemapPlugin)!.config!.clipBackground = true;

    onUpdate();

    let needsUpdate = true;

    function onUpdate() {
      needsUpdate = true;
      // viewer.renderer.resetShadows()
      viewer.setDirty();
    }

    viewer.addEventListener('preFrame', () => {
      if (needsUpdate) {
        viewer.scene.activeCamera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
  }, []);

  useEffect(() => {
    setupViewer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen fixed bg-transparent">
      <div className="w-full h-full fixed z-[-1] flex justify-center items-center">
        <div className="circle-left rounded-full" />
        <div className="circle-right rounded-full" />
      </div>
      <canvas
        className="w-full h-full bg-transparent fixed z-5"
        ref={canvasRef as LegacyRef<HTMLCanvasElement>}
      />
    </div>
  );
};

export default WebGiViewer;
