/* global Phaser */

// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: Apr 2021
// This is the game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }

  init (date) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
  }

  create (date) {
  }

  update (time, delta) {
  }
}

export default GameScene
