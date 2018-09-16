using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ClassLibrary1
{
    public interface IRequiredMakeUp
    {
        IGroup Group { get; set; }
        IMeeting Meeting { get; set; }
    }
}