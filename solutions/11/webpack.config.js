const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { setMaxListeners } = require('events');

const isProduction = process.env.NODE_ENV == 'production';

const getAutoComplete = (devServer) => {
        devServer.app.get("/capitals.json", function(req, res) {
            const search = req.query.search;
          
            // Define a list of countries (only three countries)
            const capitals =  ["Abu Dhabi","Abuja","Accra","Adamstown","Addis Abeba","Aga","Alger","Alofi","Amman","Amsterdam","Andorra la Vella","Ankara","Antananarivo","Apia","Ashgabat","Asmara","Astana","Asunción","Athenai","Avarua","Baghdad","Bairiki","Baku","Bamako","Bandar Seri Begawan","Bangkok","Bangui","Banjul","Basse-Terre","Basseterre","Beirut","Belfast","Belgrade","Belmopan","Berlin","Bern","Bishkek","Bissau","Brasília","Bratislava","Brazzaville","Bridgetown","Bruxelles [Brussel]","Bucuresti","Budapest","Buenos Aires","Bujumbura","Cairo","Canberra","Caracas","Cardiff","Castries","Cayenne","Charlotte Amalie","Chisinau","Citt","Ciudad de Guatemala","Ciudad de M","Ciudad de Panamá","Cockburn Town","Colombo, Sri Jayawardenepura Kotte","Conakry","Copenhagen","Dakar","Dalap-Uliga-Darrit","Damascus","Dhaka","Dili","Djibouti","Dodoma","Doha","Dublin","Dushanbe","Edinburgh","El-Aai","Fagatogo","Fakaofo","Flying Fish Cove","Fort-de-France","Freetown","Funafuti","Gaborone","Garapan","Gaza","George Town","Georgetown","Gibraltar","Hamilton","Hanoi","Harare","Helsinki [Helsingfors]","Honiara","Islamabad","Jakarta","Jamestown","Jerusalem","Juba","Kabul","Kampala","Kathmandu","Khartum","Kigali","Kingston","Kingston","Kingstown","Kinshasa","Koror","Kuala Lumpur","Kuwait","Kyiv","La Habana","La Paz","Libreville","Lilongwe","Lima","Lisboa","Ljubljana","Lomé","London","London","Longyearbyen","Luanda","Lusaka","Luxembourg [Luxemburg/L","Macao","Madrid","Malabo","Male","Mamoutzou","Managua","Manila","Maputo","Maseru","Masqat","Mata-Utu","Mbabane","Minsk","Mogadishu","Monaco-Ville","Monrovia","Montevideo","Moroni","Moscow","N'Djamena","Nairobi","Nassau","New Delhi","Niamey","Nicosia","Nouakchott","Noum","Nuku'alofa","Nuuk","Oranjestad","Oslo","Ottawa","Ouagadougou","Palikir","Papeete","Paramaribo","Paris","Peking","Phnom Penh","Plymouth","Podgorica","Port Moresby","Port-Louis","Port-Vila","Port-au-Prince","Port-of-Spain","Porto-Novo","Praha","Praia","Pretoria","Pyongyang","Quito","Rabat","Rangoon (Yangon)","Reykjavík","Riga","Riyadh","Road Town","Roma","Roseau","Saint George's","Saint John's","Saint-Denis","Saint-Pierre","San José","San Juan","San Marino","San Salvador","Sanaa","Santaf","Santiago de Chile","Santo Domingo de Guzm","Sarajevo","Seoul","Singapore","Skopje","Sofia","Stanley","Stockholm","Suva","São Tomé","Tallinn","Tbilisi","Tegucigalpa","Tehran","The Valley","Thimphu","Tirana","Tokyo","Toskent","Tripoli","Tunis","Tórshavn","Ulan Bator","Vaduz","Valletta","Vetican City","Victoria","Victoria","Vientiane","Vilnius","Warszawa","Washington","Wellington","West Island","Wien","Willemstad","Windhoek","Yamoussoukro","Yaounde","Yaren","Yerevan","Zagreb","al-Manama"]
            
            // Filter the countries that begin with the search string
            if (search.length > 0) { 
                const filteredCapitals = capitals.filter(capital =>
                capital.toLowerCase().startsWith(search.toLowerCase())
                );
                res.json(filteredCapitals);
            }
            else 
            { res.json("")
        };

        });
        devServer.app.get("/countries.json", function(req, res) {
            const search = req.query.search;
          
            // Define a list of countries (only three countries)
            const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
          
            // Filter the countries that begin with the search string
            if (search.length > 0) { 
                const filteredCountries = countries.filter(country =>
                country.toLowerCase().startsWith(search.toLowerCase())
                );
                res.json(filteredCountries);
            }
            else 
            { res.json("")
        };

        });
      };

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        onBeforeSetupMiddleware: getAutoComplete,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
