/* global Phaser */

// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: Apr 2021
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  init (date) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (date) {
  }

  update (time, delta) {
    this.scene.switch('titleScene')
  }
}

export default SplashScene
