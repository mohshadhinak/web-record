public class StringOperations {
    public static void main(String[] args) {

        String str1 = "Hello";
        String str2 = "Java";

        // 1. charAt()
        System.out.println("Character at index 1: " + str1.charAt(1));

        // 2. substring()
        System.out.println("Substring: " + str1.substring(1, 4));

        // 3. concat()
        System.out.println("Concatenation: " + str1.concat(" ").concat(str2));

        // 4. equals()
        System.out.println("Are strings equal? " + str1.equals(str2));

        // 5. isEmpty()
        System.out.println("Is str1 empty? " + str1.isEmpty());

        // 6. length()
        System.out.println("Length of str1: " + str1.length());

        // 7. toUpperCase()
        System.out.println("Uppercase: " + str1.toUpperCase());

        // 8. toLowerCase()
        System.out.println("Lowercase: " + str2.toLowerCase());

        // 9. contains()
        System.out.println("Contains 'ell'? " + str1.contains("ell"));

        // 10. replace()
        System.out.println("Replace: " + str1.replace('l', 'p'));
    }
}