import java.awt.Font;
import java.awt.FlowLayout;
import java.swing.*;

public class window {

    public static void main(String[] args){
        string cities[] = {"Islamabad","Lahore","Multan"};
        JFrame j = new JFrame("My First App");
        JLabel label = new JLabel("Name:");
        JTextField text = new JTextField("Enter your name:",20);
        JButton button = new JButton("Login");
        JReadioButton male = new JReadioButton("Male");
        JReadioButton female = new JReadioButton("Female");
        JList city = new JList<>(cities);

        label.setFont(new Font("Times New Roman", Font.Bold, 30));
        j.setsize(800,500);
        j.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        j.setLayout(new FlowLayout());


        j.add(label);
        j.add(text);
        j.add(button);
        j.add(male);
        j.add(female);
        j.add(city);

        j.setVisible(true);
    }
}
