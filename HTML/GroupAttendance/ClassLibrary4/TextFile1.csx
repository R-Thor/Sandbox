#reset
#r "C:\Users\swayb\documents\visual studio 2017\Projects\GroupAttendance\packages\LiteDB.3.1.1\lib\net35\LiteDB.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\System.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\System.Core.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\System.Xml.Linq.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\System.Data.DataSetExtensions.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\Microsoft.CSharp.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\System.Data.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\System.Net.Http.dll"
#r "C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.7\System.Xml.dll"
#r "ClassLibrary4.dll"
using ClassLibrary4;
using LiteDB;
LiteDatabase liteDatabase = new LiteDatabase("Test");
liteDatabase.GetCollection("Parishiners");
var parishiners = liteDatabase.GetCollection("Parishiners");
var JohnDoe = new Parishiner();
JohnDoe.Name = "John Doe";
var parishiners = liteDatabase.GetCollection("Parishiners");
parishiners.Insert(JohnDoe);
parishiners.EnsureIndex(x => x.Name);
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
liteDatabase.Dispose();
LiteDatabase liteDatabase = new LiteDatabase("Test");
var parishiners = liteDatabase.GetCollection("Parishiners");
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
liteDatabase.Dispose();
public class Parishiner { public string Name { get; set; } public string Family { get; set; } }
LiteDatabase liteDatabase = new LiteDatabase("Test");
var parishiners = liteDatabase.GetCollection("Parishiners");
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
liteDatabase.Dispose();
public class Parishiner { public string Name { get; set; } public string ContactEmail { get; set; } }
LiteDatabase liteDatabase = new LiteDatabase("Test");
var parishiners = liteDatabase.GetCollection("Parishiners");
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
parishiners LiteCollection { Name="Parishiners" }
liteDatabase.Dispose();
var parishiners = liteDatabase.GetCollection("Parishiners");
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
parishiners LiteCollection { Name="Parishiners" }
LiteDatabase liteDatabase = new LiteDatabase("Test");
public class Parishiner { public string Name { get; set; } public string Family { get; set; } }
var parishiners = liteDatabase.GetCollection("Parishiners");
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
testresult Find
{
    Submission#48.Parishiner { Family=null, Name="John Doe" } }
liteDatabase.Dispose();
public class Parishiner { public string Name { get; set; } public string ContactEmail { get; set; } }
LiteDatabase liteDatabase = new LiteDatabase("Test");
var parishiners = liteDatabase.GetCollection("Parishiners");
var testresult = parishiners.Find(x => x.Name.StartsWith("John"));
testresult Find
{
    Submission#53.Parishiner { ContactEmail=null, Name="John Doe" } }
liteDatabase.Dispose();
public class SmallGroupLeader { public string ContactEmail { get; set; } public string ContactPhoneNumber { get; set; } public string Name { get; set; } }. public class SmallGroup { public string Name { get; set; } public List GroupLeaderContactEmail { get; set; } }. public class Parishiner { public string ContactEmail { get; set; } public string Name { get; set; } public string ContactPhoneNumber { get; set; } public SmallGroup SmallGroupName { get; set; } }
public class GroupCalendar { public Dictionary Meetings { get; set; } }
public class StandardMeetingDay {. }
public class MasterCalendar { public Dictionary WeekOf { get; set; } }