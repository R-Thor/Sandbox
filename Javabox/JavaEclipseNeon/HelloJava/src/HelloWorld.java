import javax.swing.*;
import java.awt.event.*;

public class HelloWorld extends JFrame
{
	private static final long serialVersionUID = 1L;
	JButton closeButton;

	public static void main(String[] args)
	{
		new HelloWorld();
	}
	
	public HelloWorld()
	{
		this.setSize(400,400);
		this.setLocationRelativeTo(null);
		this.setTitle("Title");
		JPanel panel = new JPanel();
		JButton button = new JButton("Close");
		ButtonActionListener buttonActionListener = new ButtonActionListener();
		button.addActionListener(buttonActionListener);
		panel.add(button);
		this.add(panel);
		this.setVisible(true);
	
	}
}

class ButtonActionListener implements ActionListener
{

	@Override
	public void actionPerformed(ActionEvent e) {
		System.exit(0);
		
	}
	
}