import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    clickMe() {
      console.log("CONTROLER");
      return true;
    }
  }
})
