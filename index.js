import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current, { opacity: 0, y: -50, duration: 1 });
      }
      if (heroButtonRef.current) {
        gsap.from(heroButtonRef.current, { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });
      }
    }, 100);
  }, []);

  return (
    <>
      <Head>
        <title>Treinador Tchello - Portfólio</title>
        <meta name="description" content="Portfólio do Treinador Tchello" />
      </Head>
      <div className="min-h-screen bg-[#001f3f] text-[#eeeeee] flex flex-col items-center justify-center p-10 text-center">
        <h1 ref={heroTextRef} className="text-4xl font-bold">Bem-vindo ao Mundo do Treinador Tchello</h1>
        <p className="text-lg mt-4">Tecnologia, estratégia e inovação no Futsal</p>
        <Link href="/loja">
          <button
            ref={heroButtonRef}
            className="mt-6 px-6 py-3 bg-[#ff6d00] text-white rounded-xl shadow-lg text-lg font-semibold hover:scale-105 transition-transform"
          >
            Acesse a Loja
          </button>
        </Link>
        <Canvas className="mt-10 h-96 w-full">
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}
