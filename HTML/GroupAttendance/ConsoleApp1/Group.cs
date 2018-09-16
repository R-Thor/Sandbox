using System;
using System.Xml;
using System.Runtime.Serialization;

namespace ConsoleApp1
{
    internal class Group
    {
        public string Name { get; set; }
    }

    //internal class Group:ISerializable
    //{
    //    public string Name { get; set; }

    //    public void GetObjectData(SerializationInfo info, StreamingContext context)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}