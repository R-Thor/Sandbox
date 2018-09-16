using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfAppTestGrid
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        internal List<TestItemSourceRegularItem> TestItemSourceRegularItemList { get; set; }

        public MainWindow()
        {
            InitializeComponent();
            TestItemSourceRegularItemList = new List<TestItemSourceRegularItem>();
            TestItemSourceRegularItemList.Add(new TestItemSourceRegularItem() { MyProperty1 = "a", MyProperty2 = "b", MyProperty3 = "c", MyProperty4 = "d" });
            //this.dataGrid1.ItemsSource = TestItemSourceRegularItemList;
        }
    }
}