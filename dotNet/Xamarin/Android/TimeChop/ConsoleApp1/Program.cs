using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace ConsoleApp1
{
    internal class Program
    {
        public static int Counter = 10;

        private static void Main(string[] args)
        {
            Console.WriteLine("Simple single TimeChop");
            Console.WriteLine("Value entered: " + args[0] + " Minutes");
            TimeSpan ArgTime = new TimeSpan(0, int.Parse(args[0]), 0);
            double perChopMiliseconds = ArgTime.TotalMilliseconds / 10;
            Timer timer = new Timer(perChopMiliseconds);
            timer.Elapsed += Timer_Elapsed;
            timer.Start();
            Console.WriteLine("This is 10 Parts of " + perChopMiliseconds.ToString() + " Milliseconds");
            Console.WriteLine(string.Empty.PadRight(Counter, '*'));
            while (Counter > 0) ;
            timer.Stop();
            Console.ReadLine();
        }

        private static void Timer_Elapsed(object sender, ElapsedEventArgs e)
        {
            Counter--;
            Console.WriteLine(string.Empty.PadRight(Counter, '*'));
        }
    }
}