using System.Collections.Generic;

namespace ClassLibrary1
{
    public interface IMeetingSchedule
    {
        List<IMeeting> Meetings { get; set; }
    }
}