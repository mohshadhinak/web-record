public class ExceptionDemo {
    public static void main(String[] args) {

        // 1. ArithmeticException (division by zero)
        try {
            int a = 10;
            int b = 0;
            int result = a / b; // throws ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed (division)");
        }

        // 2. ArrayIndexOutOfBoundsException
        int[] numbers = { 1, 2, 3 };
        try {
            System.out.println("Element at index 5: " + numbers[5]); // throws exception
        } catch (ArrayIndexOutOfBoundsException q) {
            System.out.println("Caught ArrayIndexOutOfBoundsException: " + q.getMessage());
        } finally {
            System.out.println("Finally block executed (array)");
        }

        System.out.println("Program continues normally.");
    }
}