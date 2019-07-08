import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    clickMeThatIsNeverCalled() {
      console.log("CONTROLER");
      return true;
    }
  }
})
