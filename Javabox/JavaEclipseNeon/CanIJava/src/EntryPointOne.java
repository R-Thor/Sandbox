
public class EntryPointOne
{

    public static void main(String[] args)
    {
        // TODO Auto-generated method stub
        Printer print = new Printer();
        for (String message : args)
        {
            print.setMessage(message);
            print.PrintMessage();
        }
    }

}
