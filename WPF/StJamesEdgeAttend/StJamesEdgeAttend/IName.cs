namespace StJamesEdgeAttend
{
    internal interface IName
    {
        string LastName { get; set; }
        string FirstName { get; set; }
        string MiddleName { get; set; }
        string FullNameFirstLast { get; set; }
        string FullNameLastFirst { get; set; }
    }
}