using System;
using System.Collections.Generic;

namespace ClassLibrary4
{
    public interface ISmallGroup
    {
        Guid ID { get; set; }
        Guid MeetingGroupID { get; set; }
        List<string> GroupLeaderList { get; set; }
        int Grade { get; set; }
    }
}