using System.Text.Json.Serialization;

namespace WorldCities.Server.Controllers
{
    public class CountryDTO
    {
        #region Properties
        public int Id { get; set; }
        public string Name { get; set; }

        [JsonPropertyName("iso2")]
        public string ISO2 { get; set; } = null;

        [JsonPropertyName("iso3")]
        public string ISO3 { get; set; } = null;

        public int? TotCities { get; set; } = null;
        #endregion
    }
}