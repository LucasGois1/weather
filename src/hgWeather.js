//salvando em constantes a minha senha da api, e o endereco de busca padrao
const API_BASE = 'https://api.hgbrasil.com/weather'
const API_KEY = 'a8ceed66'


// funcao basica de consultas
const consulta = async(params) => {
    const req = await fetch(`${API_BASE}${params}`) //requisicao passada pelos params
    const json = await req.json() //a requisicao recebe um json, entao aqui estamos recebendo ele
    return json
}
async function getWeatherInfo(cityName) {
    return await consulta(`?format=json-cors&key=${API_KEY}&city_name=${cityName}`)
}

export default getWeatherInfo