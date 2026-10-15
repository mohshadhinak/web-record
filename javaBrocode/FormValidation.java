
import javax.swing.*;
import java.awt.event.*;

public class FormValidation extends JFrame implements ActionListener {

    JTextField nameField;
    JTextField emailField;
    JPasswordField passwordField;
    JButton submitButton, resetButton;
    JLabel result;

    FormValidation() {

        JLabel name = new JLabel("Name:");
        name.setBounds(50, 30, 100, 30);

        nameField = new JTextField();
        nameField.setBounds(150, 30, 200, 30);

        JLabel email = new JLabel("Email:");
        email.setBounds(50, 80, 100, 30);

        emailField = new JTextField();
        emailField.setBounds(150, 80, 200, 30);

        JLabel password = new JLabel("Password:");
        password.setBounds(50, 130, 100, 30);

        passwordField = new JPasswordField();
        passwordField.setBounds(150, 130, 200, 30);

        submitButton = new JButton("Submit");
        submitButton.setBounds(80, 180, 100, 30);

        resetButton = new JButton("Reset");
        resetButton.setBounds(200, 180, 100, 30);

        result = new JLabel();
        result.setBounds(50, 230, 350, 30);

        add(name);
        add(nameField);
        add(email);
        add(emailField);
        add(password);
        add(passwordField);
        add(submitButton);
        add(resetButton);
        add(result);

        submitButton.addActionListener(this);
        resetButton.addActionListener(this);

        setSize(450, 330);
        setLayout(null);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent e) {

        if (e.getSource() == submitButton) {

            String name = nameField.getText();
            String email = emailField.getText();
            String password =
                new String(passwordField.getPassword());

            if (name.isEmpty() || email.isEmpty()
                    || password.isEmpty()) {

                result.setText("Please fill all fields");

            } else if (!email.contains("@")) {

                result.setText("Email must contain @");

            } else if (password.length() < 8) {

                result.setText("Password must be 8 characters");

            } else {

                result.setText("Form submitted successfully");
            }
        }

        if (e.getSource() == resetButton) {

            nameField.setText("");
            emailField.setText("");
            passwordField.setText("");
            result.setText("");
        }
    }

    public static void main(String[] args) {
        new FormValidation();
    }
}
