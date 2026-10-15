
import javax.swing.*;
import java.awt.event.*;

public class LoginExample extends JFrame implements ActionListener {

    JLabel userLabel, passLabel, result;
    JTextField userField;
    JPasswordField passField;
    JButton loginButton;

    LoginExample() {

        userLabel = new JLabel("Username:");
        userLabel.setBounds(50, 50, 100, 30);

        userField = new JTextField();
        userField.setBounds(150, 50, 150, 30);

        passLabel = new JLabel("Password:");
        passLabel.setBounds(50, 100, 100, 30);

        passField = new JPasswordField();
        passField.setBounds(150, 100, 150, 30);

        loginButton = new JButton("Login");
        loginButton.setBounds(150, 150, 100, 30);

        result = new JLabel();
        result.setBounds(50, 200, 300, 30);

        add(userLabel);
        add(userField);
        add(passLabel);
        add(passField);
        add(loginButton);
        add(result);

        loginButton.addActionListener(this);

        setTitle("Login Form");
        setSize(400, 300);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {

        String username = userField.getText();
        String password =
            new String(passField.getPassword());

        if (username.equals("admin") &&
            password.equals("12345678")) {

            result.setText("Login Successful");

        } else {
            result.setText("Invalid Username or Password");
        }
    }

    public static void main(String[] args) {
        new LoginExample();
    }
}
