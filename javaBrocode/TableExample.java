
import javax.swing.*;

public class TableExample {

    public static void main(String[] args) {

        JFrame f = new JFrame("Student Details");

        String data[][] = {
                { "101", "Arun", "BSc CS" },
                { "102", "Rahul", "BCA" },
                { "103", "Anu", "BSc Maths" },
                { "104", "Amal", "BCom" },
                { "105", "Arun", "BSc CS" },
                { "106", "Rahul", "BCA" },
                { "107", "Anu", "BSc Maths" },
                { "108", "Amal", "BCom" },
                { "101", "Arun", "BSc CS" },
                { "102", "Rahul", "BCA" },
                { "103", "Anu", "BSc Maths" },
                { "104", "Amal", "BCom" },
                { "105", "Arun", "BSc CS" },
                { "106", "Rahul", "BCA" },
                { "107", "Anu", "BSc Maths" },
                { "108", "Amal", "BCom" }
        };

        String column[] = { "ID", "Name", "Course" };

        JTable table = new JTable(data, column);

        JScrollPane sp = new JScrollPane(table);

        f.add(sp);

        f.setSize(400, 250);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setVisible(true);
    }
}
