import javax.swing.*;
import java.awt.event.*;

public class TextFieldDemo extends JFrame implements ActionListener {

    JTextField textField;
    JLabel label;
    JButton button;

    TextFieldDemo() {

        textField = new JTextField();
        textField.setBounds(50, 50, 300, 30);

        button = new JButton("Display");
        button.setBounds(50, 100, 300, 30);

        label = new JLabel();
        label.setBounds(50, 150, 300, 30);

        add(textField);
        add(button);
        add(label);

        button.addActionListener(this);

        setSize(400, 300);
        setLayout(null);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent e) {
        String text = textField.getText();
        label.setText(text);
    }

    public static void main(String[] args) {
        new TextFieldDemo();
    }
}