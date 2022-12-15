'use-strict';
let group = {
  title: '1모둠',
  students: ['보라', '호진', '지민'],

  showList() {
    this.students.forEach((student) => {
      console.log(this);
      console.log(this.title + ': ' + student);
    });
  },
};

group.showList();

let group2 = {
  title: '1모둠',
  students: ['보라', '호진', '지민'],

  showList() {
    console.log(this);
    this.students.forEach(function (student) {
      // TypeError: Cannot read property 'title' of undefined
      console.log(this);
      console.log(this.title + ': ' + student);
    });
  },
};

group2.showList();
