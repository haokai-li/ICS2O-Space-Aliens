/* global Phaser */

// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: Apr 2021
// This is the title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  init (date) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Title Scene')
  }

  create (date) {
  }

  update (time, delta) {
  }
}

export default TitleScene