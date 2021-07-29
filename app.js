const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5001;

// Extended: https://swagger.io/specification/#infoobject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Student API',
      description: 'Student API Information',
      contact: {
        name: 'Manish Landge',
      },
      servers: ['http://localhost:5000'],
    },
  },
  apis: ['app.js'],
};

//pass all options to swagger UI and swagger js doc
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 * /students:
 *  get:
 *    description: Get the students information
 *    responses:
 *       '200':
 *          description: A succesfull response
 */

app.get('/students', (req, res) => {
  res.send('students results');
});

/**
 * @swagger
 * /students:
 *  post:
 *    description: Update student information
 *    responses:
 *       '200':
 *          description: A succesfull response
 */
app.post('/students', (req, res) => {
  res.send('succesfully updated student information');
});

/**
 * @swagger
 * /students:
 *  put:
 *    description: Update student information
 *    responses:
 *       '200':
 *          description: A succesfull response
 */
app.put('/students', (req, res) => {
  res.send('succesfully updated student information');
});

/**
 * @swagger
 * /students:
 *  delete:
 *    description: Delete student information
 *    responses:
 *       '200':
 *          description: A succesfull response
 */
app.delete('/students', (req, res) => {
  res.send('succesfully updated student information');
});

/**
 * @swagger
 * /students/:id:
 *  delete:
 *    description: Delete student information by student id
 *    responses:
 *       '200':
 *          description: A succesfull response
 */
app.delete('/students/:id', (req, res) => {
  res.send('succesfully updated student information');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
