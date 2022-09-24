import {createApp} from 'vue';
const app = createApp({
    //the data object holds all the properties you can use in the application
    //for example it holds the varaibles of the application
    data() {
      return {
        courseGoal1: 'Finish the course and learn vue!',
        courseGoal2: 'create some projects',
        vueLink: 'https://www.google.com',
      };
    },
    //the methods object holds all the methods that are available in the application
    methods: {
      outputs() {
        const number = Math.random();
        if (number < 0.5) {
          return this.courseGoal1;
        } else {
          return this.courseGoal2;
        }
      },
    },
  });

  // the mount is to link the part of the html we will be working with to the Vue App
  app.mount("#user-goal");
  