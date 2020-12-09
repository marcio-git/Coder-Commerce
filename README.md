This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Coderhouse E-Commerce 🛍
### Project by: Marcio Huacacolqui 👨🏽‍💻
Proyecto final para CoderHouse
#### Tecnologías:
* Proyecto E-commerce creada en React JS (17.0.1).
* Firebase (7.2.3) como base de datos.
* Librería react-router-dom

## Instrucciones de instalación
```bash
#Clonar repo
git clone https://github.com/marcio-git/Coder-Commerce.git

#Instalación
npm install

#Ejecutar
npm start

#Go to http://localhost:3000/
```

-------

## Features
- [x] Un usuario puede ingresar, navegar por los productos e ir a sus detalles.
- [x] Desde el detalle se puede ver la descripción, foto y precio e ingresarlo al carrito. 
- [x] Una vez que el carrito tenga al menos un producto, se visualiza un listado compacto de la orden con el precio total. 
- [x] Al ingresar los datos se activa el botón de ‘realizar compra’.
- [x] Al clickear ‘realizar compra’ se guarda en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.
- [x] **Firebase:**
    - **items:**
        - Link para foto.
        - Precio unitario
        - Descripción
        - Categoria
    - **orders:** 
        - En las órdenes generadas se incluyen los productos, descripciones y los precios al momento de la compra.
        - Las órdenes tienen items surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
        - id, items, fecha, estado ( por defecto en ‘generada’).
- [x] El **cart** es accesible durante toda la experiencia y tiene una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos unidades y un ítem con una unidad, debe decir ‘tres’).
- [x] **Checkout:**
    - Items con sus cantidades.
    - Total de la orden.
    - Input para nombre, apellido y teléfono.
    - Input para email y lógica de repetir el email 2 veces.
- [x] Finalizada la orden, se recibe mi _order id_ con el id del objeto de firebase.
- [x] Para la navegabilidad se utiliza el router, y no href’s o location.