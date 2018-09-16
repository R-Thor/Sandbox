using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary1
{
    public interface IAddGroupMember
    {
        IGroup TargetGroup { get; set; }
        IPerson NewGroupMember { get; set; }
    }
}