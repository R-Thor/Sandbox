using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace FibonacciTest
{
    class Program
    {
        static void Main(string[] args)
        {
            FibonacciLoop();
        }
        public static void FibonacciLoop()
        {
            int f1 = 0;
            int f2 = 1;
            int sum = f1 + f2;
            for (; sum < int.MaxValue && sum > int.MinValue; sum = f1 + f2, f1=f2, f2 = sum)
            {
                Console.WriteLine(sum);
                Thread.Sleep(500);
            }
        }
    }
}
