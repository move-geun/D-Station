import * as THREE from "three";
import React, { useMemo, useRef, useLayoutEffect } from "react";
import boldUrl from "../../assets/fonts/bold.blob";
import { Text3D } from "@react-three/drei";

export default function Text({
  children,
  vAlign = "center",
  hAlign = "center",
  size = 1.5,
  color = "'#000000'",
  ...props
}) {
  const config = useMemo(
    () => ({
      size: 5,
      height: 0.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.1,
    }),
    []
  );
  const mesh = useRef();
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
  }, [children]);
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={boldUrl} {...config}>
        {children}
        <meshNormalMaterial />
      </Text3D>
    </group>
  );
}
