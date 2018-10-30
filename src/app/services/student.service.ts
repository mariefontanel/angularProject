export class StudentService {
  students = [
    {
      id: 1,
      name: 'Olivier',
      status: 'disponible'
    },
    {
      id: 2,
      name: 'Victor',
      status: 'occupé(e)'
    },
    {
      id: 3,
      name: 'Pauline',
      status: 'occupé(e)'
    }
  ];

  getStudentById(id: number) {
    // va chercher l'objet dans l'array students qui a pour id l'id passé en params
    const student = this.students.find(
      (studentObject) => {
        return studentObject.id === id;
      }
    );
    return student;
  }
  switchFreeAll() {
    for (let student of this.students) {
      student.status = 'disponible';
    }
  }
  switchBusyAll() {
    for (let student of this.students) {
      student.status = 'occupé(e)';
    }
  }
  switchFreeOne(i: number) {
    this.students[i].status = 'disponible';
  }
  switchBusyOne(i: number) {
    this.students[i].status = 'occupé(e)';
  }
}
