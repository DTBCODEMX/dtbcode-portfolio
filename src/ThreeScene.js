// src/ThreeScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

const ThreeSceneContainer = styled.section`
  padding: 20px;
  text-align: center;
  background-color: #2c2c2c;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const handleClick = () => {
      cube.material.color.set(Math.random() * 0xffffff);
    };

    window.addEventListener('click', handleClick);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <ThreeSceneContainer>
      <h2>3D Scene</h2>
      <div ref={mountRef} />
    </ThreeSceneContainer>
  );
};

export default ThreeScene;
