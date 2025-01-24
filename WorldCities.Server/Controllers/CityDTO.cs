using System.Text.Json.Serialization;
using WorldCities.Server.Data.Models;

namespace WorldCities.Server.Controllers
{
    public class CityDTO
    {
        #region Properties
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public decimal Lat { get; set; }

        public decimal Lon { get; set; }

        public int CountryId { get; set; }

        public string? CountryName { get; set; } = null!;
        #endregion
    }
}
