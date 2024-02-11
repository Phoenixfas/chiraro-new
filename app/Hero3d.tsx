'use client';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export default function Hero3d() {
    useEffect(() => {
        const board: HTMLElement | null = document.getElementById('hero-board');
        if (!board) {
            console.error('Board element not found');
            return;
        }

        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(board.clientWidth, board.clientHeight);
        board.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(50, board.clientWidth / board.clientHeight, 0.1, 1000);
        camera.position.set(0, 0.5, 1.8);
        camera.lookAt(0, 0, 0)

        let mouseX = board.clientWidth / 2;
        let mouseY = board.clientHeight / 2;

        // const controls = new OrbitControls(camera, renderer.domElement);
        // // Controls Constraints
        // controls.minDistance = 1.8; // Minimum zoom distance
        // controls.maxDistance = 2.5; // Maximum zoom distance

        // controls.minPolarAngle = Math.PI / 4; // Minimum polar angle (in radians) - vertical angle
        // controls.maxPolarAngle = (3 * Math.PI) / 6; // Maximum polar angle (in radians) - vertical angle

        // add lights
        const topLight1 = new THREE.PointLight(0x01BAEF, 20);
        topLight1.position.set(2, 0, 3);
        topLight1.castShadow = false;
        const topLight2 = new THREE.PointLight(0x01BAEF, 20);
        topLight2.position.set(2, 3, -3);
        topLight2.castShadow = false;
        const topLight3 = new THREE.PointLight(0x01BAEF, 20);
        topLight3.position.set(-2, 0, -3);
        topLight3.castShadow = false;
        const topLight4 = new THREE.PointLight(0x01BAEF, 20);
        topLight4.position.set(-2, 3, 3);
        topLight4.castShadow = false;
        scene.add(topLight1, topLight2, topLight3, topLight4);

        const ambientLight = new THREE.AmbientLight(0x01BAEF, 0.1);
        // scene.add(ambientLight);

        scene.background = new THREE.Color(0x080C1B);

        // postprocessing
        const renderScene = new RenderPass(scene, camera);
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(board.clientWidth, board.clientHeight), 0.1, 0.1, 0.1);
        bloomPass.threshold = .3;
        bloomPass.strength = .8;
        bloomPass.radius = 0.8;
        
        composer.addPass(bloomPass);


        // Load the model
        const loader = new GLTFLoader();
        let loadedModel: THREE.Group;
        loader.load(
            // resource URL
            '/models/logo/logo.glb',
            // called when the resource is loaded
            function (gltf) {

                loadedModel = gltf.scene;
                // loadedModel.position.set(0, 0.2, 0);
                loadedModel.castShadow = false;
                loadedModel.receiveShadow = false;
                scene.add(loadedModel);

                gltf.animations; // Array<THREE.AnimationClip>
                gltf.scene; // THREE.Group
                gltf.scenes; // Array<THREE.Group>
                gltf.cameras; // Array<THREE.Camera>
                gltf.asset; // Object

            },
            // called while loading is progressing
            function (xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            // called when loading has errors
            function (error) {

                console.error('An error happened', error);

            }
        );


        const animate = function () {
            requestAnimationFrame(animate);

            // Rotate the model
            if (loadedModel) {
                loadedModel.rotation.y += 0.005;
                loadedModel.position.x = -mouseX / 15000;
                loadedModel.position.y = mouseY / 15000 + 0.2;
            }

            // controls.update();

            // renderer.render(scene, camera);
            composer.render();
        };

        // Check if WebGL is supported
        if (WebGL.isWebGLAvailable()) {
            animate();
        } else {
            const warning = WebGL.getWebGLErrorMessage();
            board.appendChild(warning);
        }

        const resizer = () => {
            camera.aspect = board.clientWidth / board.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(board.clientWidth, board.clientHeight);
        }

        window.addEventListener('resize', resizer);

        const hero: HTMLElement | null = document.getElementById('hero');
        if (!hero) {
            console.error('Hero element not found');
            return;
        }

        hero.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        return () => {
            // Remove the renderer and its canvas
            board.removeChild(renderer.domElement);
      
            // Dispose of the renderer
            renderer.dispose();
            
            window.removeEventListener('resize', resizer);

            hero.removeEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
        };

    }, []);

  return (
    <div id='hero-board' className='w-full xl:h-full lg:h-[700px] md:h-[600px] h-[300px]'></div>
  )
}
