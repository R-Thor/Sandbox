using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ClassLibrary1
{
    public interface IGroupMember : IParishiner
    {
        List<IMeeting> AttendedMeetings { get; set; }
    }
}