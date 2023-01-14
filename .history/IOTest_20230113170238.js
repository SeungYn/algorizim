let group = {
  title: '1모둠',
  students: ['보라', '호진', '지민'],

  showList() {
    console.log(this);
    this.students.forEach((student) =>
      console.log(this.title + ': ' + student)
    );
  },
};

group.showList();
