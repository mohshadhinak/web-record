import javax.swing.*;
import java.awt.event.*;
import java.sql.*;

public class RegistrationForm extends JFrame
        implements ActionListener {

    JLabel idLabel, nameLabel, ageLabel, result;
    JTextField idField, nameField, ageField;
    JButton registerButton;

    RegistrationForm() {

        idLabel = new JLabel("ID:");
        idLabel.setBounds(50, 40, 100, 30);

        idField = new JTextField();
        idField.setBounds(150, 40, 200, 30);

        nameLabel = new JLabel("Name:");
        nameLabel.setBounds(50, 90, 100, 30);

        nameField = new JTextField();
        nameField.setBounds(150, 90, 200, 30);

        ageLabel = new JLabel("Age:");
        ageLabel.setBounds(50, 140, 100, 30);

        ageField = new JTextField();
        ageField.setBounds(150, 140, 200, 30);

        registerButton = new JButton("Register");
        registerButton.setBounds(150, 190, 100, 30);

        result = new JLabel();
        result.setBounds(50, 240, 350, 30);

        add(idLabel);
        add(idField);
        add(nameLabel);
        add(nameField);
        add(ageLabel);
        add(ageField);
        add(registerButton);
        add(result);

        registerButton.addActionListener(this);

        setTitle("Student Registration");
        setSize(450, 350);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {

        String idText = idField.getText().trim();
        String namee = nameField.getText().trim();
        String ageText = ageField.getText().trim();

        if (idText.isEmpty() || namee.isEmpty() || ageText.isEmpty()) {
            result.setText("Please fill all fields");
            return;
        }

        int id, age;
        try {
            id = Integer.parseInt(idText);
            age = Integer.parseInt(ageText);
        } catch (NumberFormatException ex) {
            result.setText("ID and Age must be numbers");
            return;
        }

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/bari",
                    "root",
                    "minesql");

            String query = "INSERT INTO student (id, namee, age) VALUES (?, ?, ?)";

            PreparedStatement ps = con.prepareStatement(query);

            ps.setInt(1, id);
            ps.setString(2, namee);
            ps.setInt(3, age);

            ps.executeUpdate();

            result.setText("Registration Successful");

            idField.setText("");
            nameField.setText("");
            ageField.setText("");

            ps.close();
            con.close();

        } catch (Exception ex) {
            result.setText("Error: " + ex.getMessage());
        }
    }

    public static void main(String[] args) {
        new RegistrationForm();
    }
}