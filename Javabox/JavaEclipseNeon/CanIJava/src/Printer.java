
public class Printer 
    implements IMessage
{
    
    String MyMessage;
    
    @Override
    public void setMessage(String message)
    {
        MyMessage = message;
        
    }

    @Override
    public String getMessage()
    {
        // TODO Auto-generated method stub
        return MyMessage;
    }

    @Override
    public void PrintMessage()
    {
        System.out.println(MyMessage);
        
    }


}
