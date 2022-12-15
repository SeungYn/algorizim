{
  ('use strict');
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

  //group.showList();

  let group2 = {
    title: '1모둠',
    students: ['보라', '호진', '지민'],

    showList() {
      console.log(this);
      function a() {
        console.log(this);
      }
      a();
    },
  };

  group2.showList();
}
