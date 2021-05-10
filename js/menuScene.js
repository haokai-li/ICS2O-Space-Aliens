/* global Phaser */

// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: Apr 2021
// This is the menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }

  init (date) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
  }

  create (date) {
  }

  update (time, delta) {
  }
}

export default MenuScene
