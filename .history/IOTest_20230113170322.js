let group = {
  title: '1모둠',
  students: ['보라', '호진', '지민'],

  showList() {
    this.students.forEach(function (student) {
      // TypeError: Cannot read property 'title' of undefined
      console.log(this.title + ': ' + student);
    });
  },
};

group.showList();
