// pages/platformer.js
"use client";
import { useEffect, useRef } from "react";
import Phaser from "phaser";

const PlatformerGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    if (!gameRef.current) {
      const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 300 },
            debug: false,
          },
        },
        scene: {
          preload: preload,
          create: create,
          update: update,
        },
      };

      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
    };
  }, []);

  function preload() {
    this.load.image(
      "sky",
      "https://cdn.phaser.io/layouts/phaser2024/images/home-logo-glow.png"
    );
    this.load.image(
      "ground",
      "https://examples.phaser.io/assets/sprites/platform.png"
    );
    this.load.image(
      "star",
      "https://examples.phaser.io/assets/sprites/star.png"
    );
    this.load.image(
      "dude",
      "https://examples.phaser.io/assets/sprites/dude.png"
    );
  }

  function create() {
    this.add.image(400, 300, "sky");

    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    const player = this.physics.add.sprite(100, 450, "dude");
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);

    const cursors = this.input.keyboard.createCursorKeys();
    player.cursors = cursors;

    this.cameras.main.startFollow(player);
  }

  function update() {
    const player = this.physics.world.bounds;

    if (player.cursors.left.isDown) {
      player.setVelocityX(-160);
    } else if (player.cursors.right.isDown) {
      player.setVelocityX(160);
    } else {
      player.setVelocityX(0);
    }

    if (player.cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }
  }

  return <div id="phaser-game" />;
};

export default PlatformerGame;
