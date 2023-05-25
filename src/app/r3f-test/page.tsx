"use client"

import "./r3f-test.scss"
import s from "./r3f-test.module.scss"

import { GlobalCanvas, ScrollScene, SmoothScrollbar, UseCanvas } from "@14islands/r3f-scroll-rig"
import { GradientTexture, MeshDistortMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { PageWrapper } from "@/components/page-transition"

function ExampleComponent() {
  const el = useRef<any>(null)
  return (
    <>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {(props) => (
            <mesh {...props}>
              <planeGeometry args={[1, 1, 16, 16]} />
              <MeshDistortMaterial speed={2} distort={0.4}>
                <GradientTexture
                  stops={[0, 1]} // As many stops as you want
                  colors={["magenta", "turquoise"]} // Colors need to match the number of stops
                  rotation={0.5}
                />
              </MeshDistortMaterial>
            </mesh>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  )
}

function SpinningBoxSection() {
  const el = useRef<any>(null)

  return (
    <section>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvas>
        <ScrollScene track={el}>{(props) => <SpinningBoxWebGL {...props} />}</ScrollScene>
      </UseCanvas>
    </section>
  )
}

function SpinningBoxWebGL({ scale, scrollState }: any) {
  const mesh = useRef<any>(null)

  useFrame(() => {
    if (!mesh.current) return

    mesh.current.rotation.y = scrollState.progress * Math.PI * 2
  })

  return (
    <group scale={scale.xy.min() * 0.5}>
      <mesh ref={mesh}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </group>
  )
}

const R3fTest = () => {
  const [isTouch, setTouch] = useState(false)

  const eventSource = useRef<any>(null)

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0
    setTouch(isTouch)
  }, [])

  return (
    <PageWrapper>
      <main className={s.r3fTest}>
        <GlobalCanvas style={{ pointerEvents: "none" }}>
          <ambientLight />
        </GlobalCanvas>

        <SmoothScrollbar>
          {(bind: any) => (
            <article {...bind}>
              <section>
                <h1>Basic &lt;ScrollScene/&gt; example</h1>
              </section>
              {isTouch && (
                <section>
                  <p style={{ color: "orange" }}>
                    You are on a touch device which means the WebGL wont sync with the native scroll. Consider disabling
                    ScrollScenes for touch devices, or experiment with the `smoothTouch` setting on Lenis.
                  </p>
                </section>
              )}
              <ExampleComponent />
              <section>
                Both these ScrollScenes are tracking DOM elements and scaling their WebGL meshes to fit.
              </section>
              <SpinningBoxSection />
            </article>
          )}
        </SmoothScrollbar>
      </main>
    </PageWrapper>
  )
}

export default R3fTest
