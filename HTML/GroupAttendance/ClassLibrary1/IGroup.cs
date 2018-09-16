using System;
using System.Collections.Generic;

namespace ClassLibrary1
{
    [Serializable]
    public interface IGroup
    {
        string Name { get; set; }
        IMeetingSchedule Schedule { get; set; }
        List<IGroupLeader> GroupLeaders { get; set; }
    }
}