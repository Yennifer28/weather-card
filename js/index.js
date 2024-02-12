const btnSearch = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnSearch.addEventListener('click', () =>{
    if(inputCity.ariaValueMax.trim().length > 0 ) //si es mayor que 0 escribio algo
    {
        console.log('@@ input value ==>', inputCity.value)
        buscarCuidad(inputCity.value)
    }
})

const buscarCuidad = async(cuidad) => {
        const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${cuidad}&language=es`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a8f0c11b67mshf910151c78251eep1874fbjsna40bd0b4625e',
                'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
}