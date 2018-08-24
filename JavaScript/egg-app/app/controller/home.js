'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    debugger
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
