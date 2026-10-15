class Calculator {

    // Method with two integer parameters
    int add(int a, int b) {
        return a + b;
    }

    // Method with three integer parameters
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method with two double parameters
    double add(double a, double b) {
        return a + b;
    }
}

public class MethodOverloading {
    public static void main(String[] args) {

        Calculator obj = new Calculator();

        System.out.println("Sum of two integers: " + obj.add(10, 20));

        System.out.println("Sum of three integers: " + obj.add(10, 20, 30));

        System.out.println("Sum of two doubles: " + obj.add(10.5, 20.5));
    }
}
