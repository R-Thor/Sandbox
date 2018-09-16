using System.Collections.Generic;
using System.Data.SqlTypes;

namespace Console
{
    internal interface IDataPropertyCollection : IList<IDataProperty>
    {
    }

    internal interface IDataProperty
    {
    }

    internal interface IDataRecord
    {
        [Poco(Name = "ModelCodeId", SourceType = typeof(SqlInt32))]
        int ModelCodeId { get; set; }

        //[Name("monthlyDeadId")]
        //public int MonthlyDeadId { get; set; }

        //[Name("someId")]
        //public int SomeId { get; set; }
    }
}