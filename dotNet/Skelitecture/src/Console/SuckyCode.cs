/// <summary>
/// SuckyCode
/// </summary>
namespace Console
{
    internal class SuckyCode
    {
        public readonly int X;

        public SuckyCode(int a)
        {
            if (a == 1)
            {
                this.X = 5;
            }
        }

        public int GetX()
        {
            return this.X;
        }
    }
}