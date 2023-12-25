import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[-10, 40, 10]}
        angle={0.18}
        penumbra={1}
        intensity={10000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[10, 80, 10]}
        angle={0.7}
        penumbra={1}
        intensity={100000}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-10, 40, -40]}
        angle={0.18}
        penumbra={1}
        intensity={30000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={earth.scene}
        scale={2}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6],
      }}
    >
      <Suspense
        fallback={<CanvasLoader/>}
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas