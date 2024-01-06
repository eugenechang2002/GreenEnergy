const express = require('express');

const User = require('../model/user');
const { response } = require('../index.js');
const { ElectricMeterServices } = require('../services/electricMeterservices.js');
const router = express.Router();

router.post('/addElectricMeterdetails', async (req, res) => {
    //const data = req.body;
    console.log('here.....');
    let data = req.body;
    const response = {};
    try {
        console.log(data);
        let result = await ElectricMeterServices.addElectricMeterdetails(data);   
      console.log(result);
      if (result) {
        response.success = true;
        response.meter = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });


  router.delete('/deleteElectricMeter', async (req, res) => {
    const data = req.query;
    //console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
        let result = await ElectricMeterServices.deleteElectricMeter(data);   
      if (result.oldMeter.deletedCount == 1) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'no record found with given Id';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  router.put('/updateElectricMeter', async (req, res) => {
    const  {id}  = req.query;
    const data = req.body;
    const response = {};
    try {
        let result = await MeterServices.updateMeter(id,data);   
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'cannot update ';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });


      router.get('/getElectricMeterDetails', async (req, res) => {
        const  data  = req.query;
        const response = {};
          try {
            let result = await ElectricMeterServices.getElectricMeterdetails(data);
        
            if (result) {
              response.success = true;
              response.user = result;
              response.status = '200';
              res.status(200).send(response);
            } else {
              response.success = false;
              response.error = 'Invalid User Id';
              response.status = '400';
              res.status(400).send(response);
            }
          } catch (e) {
            console.log(e);
            response.success = false;
            response.error = 'Some error occurred. Please try again later';
            response.status = '500';
            res.status(500).send(response);
          }
        });
          

    module.exports = router;