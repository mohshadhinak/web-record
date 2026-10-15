class OddThread implements Runnable {
    int limit;

    OddThread(int limit) {
        this.limit = limit;
    }

    public void run() {
        System.out.println("Odd Numbers:");

        for (int i = 1; i <= limit; i += 2) {
            System.out.println(i);
        }
    }
}

class EvenThread implements Runnable {
    int limit;

    EvenThread(int limit) {
        this.limit = limit;
    }

    public void run() {
        System.out.println("Even Numbers:");

        for (int i = 2; i <= limit; i += 2) {
            System.out.println(i);
        }
    }
}

public class OddEvenRunnable {
    public static void main(String[] args) {

        int limit = 10;

        OddThread odd = new OddThread(limit);
        EvenThread even = new EvenThread(limit);

        Thread t1 = new Thread(odd);
        Thread t2 = new Thread(even);

        t1.start();
        t2.start();
    }
}