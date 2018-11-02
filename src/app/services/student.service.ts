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
    },
    {
      id: 4,
      name: 'Marcelline',
      status: 'disponible'
    },
    {
      id: 5,
      name: 'Rémi',
      status: 'occupé(e)'
    },
    {
      id: 6,
      name: 'Michaël',
      status: 'disponible'
    },
    {
      id: 7,
      name: 'Damien',
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
  addStudent(name: string, status: string) {
    const studentObject = {
      id: 0,
      name: '',
      status: ''
    };
    studentObject.name = name;
    studentObject.status = status;
    studentObject.id = this.students[(this.students.length - 1)].id + 1;

    this.students.push(studentObject);
  }
  removeOneStudent(i: number) {
    this.students.splice(i, 1);
  }
}
