using System;

namespace ClassLibrary4
{
    public interface IMeetingGroup
    {
        Guid ID { get; set; }
        string Name { get; set; }
        DayOfWeek MeetingDay { get; set; }
    }
}