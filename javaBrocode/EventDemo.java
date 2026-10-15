
import javax.swing.*;
import java.awt.event.*;

public class EventDemo extends JFrame implements MouseListener, KeyListener {

    JLabel label;

    EventDemo() {

        label = new JLabel("Perform mouse or keyboard action");
        label.setBounds(50, 50, 500, 30);

        add(label);

        addMouseListener(this);
        addKeyListener(this);

        setSize(400, 300);
        setLayout(null);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void mouseClicked(MouseEvent e) {
        label.setText("Mouse Clicked");
    }

    public void mousePressed(MouseEvent e) {
        label.setText("Mouse Pressed");
    }

    public void mouseReleased(MouseEvent e) {
        label.setText("Mouse Released");
    }

    public void mouseEntered(MouseEvent e) {
        label.setText("Mouse Entered");
    }

    public void mouseExited(MouseEvent e) {
        label.setText("Mouse Exited");
    }

    public void keyTyped(KeyEvent e) {
        label.setText("Key Typed: " + e.getKeyChar());
    }

    public void keyPressed(KeyEvent e) {
        label.setText("Key Pressed");
    }

    public void keyReleased(KeyEvent e) {
        label.setText("Key Released");
    }

    public static void main(String[] args) {
        new EventDemo();
    }
}

