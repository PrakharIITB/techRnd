import React, {Component} from 'react';
import * as THREE from 'three'
// import OrbitControls from 'three-orbitcontrols'

class ThreeScene extends Component {

    componentDidMount(){
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.mount.appendChild(this.renderer.domElement)

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        //Box
        var geometry = new THREE.BoxGeometry(1,1,1);
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.cube = new THREE.Mesh(geometry, material);

        this.scene.add(this.cube);
        this.animation();
        this.renderer.render(this.scene, this.camera);

        //orbitControls
        // new OrbitControls(this.camera, this.renderer.domElement)

        // window.addEventListener('resize', this.handleWindowResize())
    }
    
    animation=()=>{
        window.addEventListener('scroll', (event) => {
            console.log(window.scrollY)
        });
        requestAnimationFrame(this.animation);
        this.cube.rotation.x +=0.01;
        this.cube.rotation.y += 0.01;
        this.cube.scale.set(window.scrollY/300 + 1,window.scrollY/300 +1 ,window.scrollY/300 + 1);
        this.renderer.render(this.scene, this.camera);
        // this.cube.scale += 2;
    }
    handleWindowResize=()=>{
        console.log(window.innerWidth)
        this.camera.aspect = window.innerWidth/window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.render(this.scene, this.camera)
    }
    
    render(){
        return(
            <div ref={mount =>{
                this.mount = mount; 
            }}/>
        )
    }
}

export default ThreeScene;