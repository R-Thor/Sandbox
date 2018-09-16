using Prism.Modularity;
using Prism.Regions;
using System;

namespace PrismModule1
{
    public class PrismModule1Module : IModule
    {
        private readonly IRegionManager _regionManager;

        public PrismModule1Module(RegionManager regionManager)
        {
            _regionManager = regionManager;
        }

        public void Initialize()
        {
            throw new NotImplementedException();
        }
    }
}