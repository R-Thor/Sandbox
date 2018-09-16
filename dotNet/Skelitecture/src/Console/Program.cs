/// <summary>
/// Project.cs
/// </summary>
/// <changelog>
/// <change date="20170204" author="R'Thor">
/// </change>
/// </changelog>
using System;

namespace Console
{
    public static class Program
    {
        public static int MyProperty { get; set; }

        public static void Main()
        {
            A();
        }

        private static void A()
        {
            if (DateTime.Now.IsDaylightSavingTime())
            {
                MyProperty = 1;
            }
        }
    }
}