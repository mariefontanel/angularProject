export class StudentService {
  students = [
    {
      name: 'Olivier',
      status: 'disponible'
    },
    {
      name: 'Victor',
      status: 'occupé(e)'
    },
    {
      name: 'Pauline',
      status: 'occupé(e)'
    }
  ];

  switchFreeAll() {
    for(let student of this.students) {
      student.status = 'disponible';
    }
  }

  switchBusyAll() {
    for(let student of this.students) {
      student.status = 'occupé(e)';
    }
  }
}
