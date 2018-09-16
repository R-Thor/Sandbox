using System;

namespace ClassLibrary4
{
    public interface IPerson
    {
        Guid ID { get; set; }
        string Email { get; set; }
        string Name { get; set; }
    }
}