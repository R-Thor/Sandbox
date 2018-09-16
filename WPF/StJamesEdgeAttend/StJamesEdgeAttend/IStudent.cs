using System;

namespace StJamesEdgeAttend
{
    internal interface IStudent
    {
        Guid ID { get; set; }
        string ContactEmail { get; set; }
        IName Name { get; set; }
    }
}