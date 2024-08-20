

![Banner](https://github.com/neonolb/BCUDD_NH/blob/main/banner.png) 
## PROYECTO 5: Aplicación WEB con React
Botcamper : Nolberto Hernández A. -  Cohort 14



## Que se Pide?

Construir una aplicación web con React, que permita consumir datos por medio de una API.

- Conectar con una API para obtener datos
- Mostrar los datos en una interfaz de usuario
- Permitir alguna interacción del usuario (por ejemplo, mediante botones o formularios)

## Requisitos

- Uso de vite para la generación del proyecto
- Crear componentes funcionales
- Utilizar una API pública y mostrar los datos obtenidos en tu interfaz de usuario
- Uso de Hooks (mínimo useEffect para los procesos asíncronos)
- Implementar rutas en tu aplicación con React Router
- Manejar errores de renderizado con Error Boundaries
- Implementación CSS a través de un framework (TailwindCSS, MUI, Bootstrap)



## Solución explicada paso a paso
1.Se instalan todas las librerias e dependencias del proyecto
evidencia de la instalación archivo package.json

![Banner](https://github.com/neonolb/PROY5/blob/main/img/evidencia_json.jpg) 


2. Se selecciona la API a consumir, en este caso se usa una de continentes y paises:
```scss

useEffect (() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data =>  {
        setCountries(data);
        groupByContinents(data);
   });
    }, []);

```

3. Como framework se utiliza Bootstrap: Instalando el CDN en index de la APP
```scss
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

```


4. Luego se ingresan componentes del framework en partes de código para la muestra de los continentes y paises en pantalla:
```scss


Y luego se utiliza en la presentación de la información en el browser


  {Object.keys(continents).map(continent => (
                    <button key={continent} onClick={() => handleContinentClick(continent)}
                    className='btn btn-success'>
                    {continent}
                    </button>
                ))}     
    </div>
    {SelectedContinent && (            
    <div>
        <h2>{SelectedContinent}</h2>
        <ul className='list-group'>
            {continents[SelectedContinent].map(country => (
                <li key={country.cca3} className='list-group-item'>
                <button onClick={() => handleCountryClick(country)} className='btn btn-primary'>
                    {country.name.common}
                    </button>
                </li>
```


5. Se Ejecuta el código con VITE:

- Como evidencia de la ejecución se agregan 2 pantallazo de la APP Web.

![Banner](https://github.com/neonolb/PROY5/blob/main/img/pantalla_app.jpg) 


![Banner](https://github.com/neonolb/PROY5/blob/main/img/pantalla_2_app.jpg) 

## Entregables

- Crea un repositorio en GitHub con al menos 5 Commits
- Archivo Readme.md
- Link de Github con toda la información https://github.com/neonolb/PROY5
- Pantallazo de la solución




