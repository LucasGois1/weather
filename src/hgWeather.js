//salvando em constantes a minha senha da api, e o endereco de busca padrao

const API_KEY = 'bec202b6'
const API_BASE = 'https://api.hgbrasil.com/weather'


// funcao basica de consultas
const consulta = async(params) => {
    const req = await fetch(`${API_BASE}${params}`) //requisicao passada pelos params
    const json = await req.json() //a requisicao recebe um json, entao aqui estamos recebendo ele
    return json
}

export default {
    getWeatherInfo: async(cityName) => {
        return [{
            slug: 'city_name',
            items: await consulta(`?format=json-cors&key=${API_KEY}&city_name=${cityName}`)
        }]
    }
}