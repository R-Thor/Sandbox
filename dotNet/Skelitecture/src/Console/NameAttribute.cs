using System;

namespace Console
{
    internal class NameAttribute : Attribute
    {
        public string V { get; }

        public NameAttribute(string v)
        {
            this.V = v;
        }
    }
}