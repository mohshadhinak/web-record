class OddThread extends Thread {
     int limit;

    OddThread(int limitt) {
        limit = limitt;
    }

    @Override
    public void run() {
        System.out.println("Odd numbers:");
        for (int i = 1; i <= limit; i += 2) {
            System.out.println(i);
        }
    }
}

class EvenThread extends Thread {
    int limit;

    EvenThread(int limitt) {
        limit = limitt;
    }

    @Override
    public void run() {
        System.out.println("Even numbers:");
        for (int i = 2; i <= limit; i += 2) {
            System.out.println(i);
        }
    }
}

public class OddEvenThreads {
    public static void main(String[] args) {
        int limit = 10;

        OddThread oddThread = new OddThread(limit);
        EvenThread evenThread = new EvenThread(limit);

        oddThread.start();
        evenThread.start();
    }
}