import React, { useEffect } from 'react';
import p5 from 'p5';

const BackgroundEffect = () => {
  useEffect(() => {
    new p5(Sketch);
  }, []);

  const Sketch = (p) => {
    const nodes = [];
    const densityFactor = 20000;

    const calculateNumNodes = () => {
      return Math.floor((p.windowWidth * p.windowHeight) / densityFactor);
    };

    class Node {
      constructor() {
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        this.vel = p.createVector(p.random(-0.3, 0.3), p.random(-0.3, 0.3));
        this.speedLimit = 1.5;
      }

      update() {
        this.pos.add(this.vel);
        this.vel.limit(this.speedLimit);

        if (this.pos.x > p.width || this.pos.x < 0) {
          this.vel.x *= -1;
        }
        if (this.pos.y > p.height || this.pos.y < 0) {
          this.vel.y *= -1;
        }

        this.repulsion({ x: p.windowWidth / 2, y: p.windowHeight / 2 });
        this.repulsion({ x: p.windowWidth / 2, y: p.windowHeight / 4 });
        this.repulsion({ x: p.windowWidth / 2, y: p.windowHeight / 5 });
        this.repulsion({ x: p.windowWidth / 2, y: p.windowHeight / 6 });
      }

      repulsion(point) {
        const forceDir = p.createVector(point.x - this.pos.x, point.y - this.pos.y);
        const distance = forceDir.mag();
        if (distance < 200) {
          const forceStrength = p.map(distance, 0, 500, -1.5, 0);
          forceDir.normalize().mult(forceStrength);
          this.vel.add(forceDir);
        }
      }

      display() {
        p.fill(255, 100);
        p.noStroke();
        p.ellipse(this.pos.x, this.pos.y, 5, 5);
      }
    }

    p.setup = () => {
      const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
      canvas.style('position', 'fixed');
      canvas.style('top', '0');
      canvas.style('left', '0');
      canvas.style('z-index', '-1');
      p.background('#141427');

      const numNodes = calculateNumNodes();
      for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node());
      }
    };

    p.draw = () => {
      p.background('#141427');
      for (const node of nodes) {
        node.update();
        node.display();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = p.dist(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
          if (dist < 150) {
            p.stroke(255, 255 - dist * 1.5);
            p.line(nodes[i].pos.x, nodes[i].pos.y, nodes[j].pos.x, nodes[j].pos.y);
          }
        }
      }
    };

    p.mouseMoved = () => {
      for (const node of nodes) {
        const forceDir = p.createVector(p.mouseX - node.pos.x, p.mouseY - node.pos.y);
        const distance = forceDir.mag();
        if (distance < 150) {
          const forceStrength = p.map(distance, 0, 500, -0.8, -0.005);
          forceDir.normalize().mult(forceStrength);
          node.vel.add(forceDir);
        }
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      nodes.length = 0;  // Clear the nodes array

      const numNodes = calculateNumNodes();
      for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node());
      }
    };
  };

  return <div id="canvas"></div>;
};

export default BackgroundEffect;
