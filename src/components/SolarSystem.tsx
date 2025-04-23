"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useRouter} from "next/navigation";

type PlanetConfig = {
    name: string,
    size: number,
    color: number,
    orbitRadius: number,
    orbitSpeed: number,
    link: string
}

const createOrbitPath = (radius: number, scene: THREE.Scene) => {
    const segments = 100;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for(let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        vertices.push(radius * Math.cos(theta), 0, radius * Math.sin(theta));
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.LineBasicMaterial({ color: 0xaaaaaa, linewidth: 1 });
    const path = new THREE.Line(geometry, material);

    scene.add(path);
}

const createPlanetLabel = (text: string, planet: THREE.Object3D, planetSize: number) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const fontSize = 64;

    // TODO: better error handling
    if(!context) return;

    canvas.width = 256;
    canvas.height = 128;

    context.fillStyle = "white";
    context.font = `bold ${fontSize}px Helvetica`;
    context.textAlign = "center";
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const label = new THREE.Sprite(material);

    const labelOffset = 2;

    label.scale.set(5, 2.5, 1);
    label.position.add(new THREE.Vector3(0, planetSize + labelOffset, 0));

    planet.add(label);
}

const createPlanet = (config: PlanetConfig, material: THREE.MeshStandardMaterial, scene: THREE.Scene) => {
    const { name, size, color, orbitRadius, orbitSpeed, link } = config;

    const geometry = new THREE.SphereGeometry(size, 32, 32);
    // const material = new THREE.MeshStandardMaterial({ color, emissive: 0x000000 });
    const planet = new THREE.Mesh(geometry, material);

    const orbit = new THREE.Object3D();
    scene.add(orbit);
    planet.position.x = orbitRadius;
    orbit.add(planet);

    createPlanetLabel(name, planet, size);

    const scaleFactor = 1.5;
    const boxSize = size * scaleFactor * 2;
    const boundingGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const boundingMaterial = new THREE.MeshBasicMaterial({ visible: false });
    const boundingBox = new THREE.Mesh(boundingGeometry, boundingMaterial);

    boundingBox.userData = { link };

    boundingBox.position.copy(planet.position);
    orbit.add(boundingBox);

    return { planet, orbit, orbitSpeed, boundingBox };
}

const createStarField = (scene: THREE.Scene) => {
    const starCount = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    const spread = 2000;
    for(let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        sizeAttenuation: true
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);
}

const SolarSystem: React.FC = () => {
    // Create a ref with proper typing for a div element
    const mountRef = useRef<HTMLDivElement | null>(null);

    const router = useRouter();

    useEffect(() => {
        if (!mountRef.current) return; // Ensure the ref is available

        // Get dimensions of the container
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Create the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

        camera.position.set(0, 50, 60);
        camera.lookAt(0, 0, 0);

        // Check if canvas already exists
        let canvas = mountRef.current.querySelector('canvas');
        if (!canvas) {
            canvas = document.createElement('canvas'); // Create a new canvas if not found
            mountRef.current.appendChild(canvas);
        }

        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
        renderer.setSize(width, height);

        // Create a star field
        createStarField(scene);

        // Create the Sun
        const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        const planetConfigs: PlanetConfig[] = [
            { name: "About", size: 0.8, color: 0xaaaaaa, orbitRadius: 10, orbitSpeed: 0.003, link: "about" }, // Mercury
            { name: "Resume", size: 1.2, color: 0xffcc99, orbitRadius: 15, orbitSpeed: 0.0026, link: "resume" }, // Venus
            { name: "Projects", size: 2, color: 0x2233ff, orbitRadius: 20, orbitSpeed: 0.002, link: "projects" }, // Earth
            { name: "Ethics", size: 1.5, color: 0xff4500, orbitRadius: 30, orbitSpeed: 0.0016, link: "ethics" }, // Mars
            { name: "Site Info", size: 3, color: 0xffa500, orbitRadius: 45, orbitSpeed: 0.0010, link: "info" }, // Jupiter
        ]

        const textureLoader = new THREE.TextureLoader();
        const diffuse = textureLoader.load("/textures/moon.png");
        const planetMaterial = new THREE.MeshStandardMaterial({ map: diffuse, emissive: 0x000000 });

        const planets = planetConfigs.map(config => {
            createOrbitPath(config.orbitRadius, scene);
            return createPlanet(config, planetMaterial, scene);
        });

        // RAYCASTING SETUP //
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        let currentHovered: THREE.Mesh | null = null;
        const canvasRect = renderer.domElement.getBoundingClientRect();

        const boundingBoxes = planets.map(p => p.boundingBox);

        const onMouseClick = (event: MouseEvent) => {
            mouse.x = (event.clientX / width) * 2 - 1;
            mouse.y = -((event.clientY - canvasRect.top) / height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(boundingBoxes);
            if(intersects.length > 0) {
                const link = intersects[0].object.userData.link;
                if(link) {
                    router.push(`/${link}`);
                }
            }
        }

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / width) * 2 - 1;
            mouse.y = -((event.clientY - canvasRect.top) / height) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(boundingBoxes);
            if(intersects.length > 0) {
                const boundingBox = intersects[0].object;
                const planetData = planets.find(p => p.boundingBox === boundingBox);
                if(planetData) {
                    if(currentHovered !== planetData.planet) {
                        if(currentHovered) {
                            (currentHovered.material as THREE.MeshStandardMaterial).emissive.set(0x000000);
                        }

                        currentHovered = planetData.planet;
                        (currentHovered.material as THREE.MeshStandardMaterial).emissive.set(0x333333);
                    }
                }
            } else if(currentHovered) {
                // Reset hovered planet
                (currentHovered.material as THREE.MeshStandardMaterial).emissive.set(0x000000);
                currentHovered = null;
            }
        }

        window.addEventListener("click", onMouseClick);
        window.addEventListener("mousemove", onMouseMove);

        // Lighting: ambient light and a point light at the Sun’s position
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1.2);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the Sun slowly
            sun.rotation.y += 0.005;

            planets.forEach(({ planet, orbit, orbitSpeed }) => {
                orbit.rotation.y += orbitSpeed;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Clean up on unmount
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }

            window.removeEventListener("click", onMouseClick);
            window.removeEventListener("mousemove", onMouseMove);2

            scene.clear();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="flex-1 overflow-hidden" />;
};

export default SolarSystem;
