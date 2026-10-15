class Person {
    Person() {
        System.out.println("Person constructor");
    }
}

class Student extends Person {
    Student() {
        System.out.println("Student constructor");
    }
}

class GraduateStudent extends Student {
    GraduateStudent() {
        System.out.println("GraduateStudent constructor");
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {

        GraduateStudent obj = new GraduateStudent();

    }
}