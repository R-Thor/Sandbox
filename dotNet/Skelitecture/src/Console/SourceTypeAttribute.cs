using System;

namespace Console
{
    internal class SourceTypeAttribute : Attribute
    {
        public Type SourceType { get; set; }

        public SourceTypeAttribute(Type sourceType)
        {
            this.SourceType = sourceType;
        }
    }
}