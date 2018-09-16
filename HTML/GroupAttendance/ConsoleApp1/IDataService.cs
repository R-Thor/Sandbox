using System.Collections.Generic;
using ClassLibrary1;

namespace ConsoleApp1
{
    internal interface IDataService<T>
    {
        IList<T> Load();
    }
}