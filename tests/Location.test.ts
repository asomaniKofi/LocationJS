import app from '../src/index';
import request from 'supertest';

describe('Location request', () => {
  it('Get a location successfully', async () => {
    const response = await request(app)
    .get('/getLocation/?location=newcastle-under-lyme')
    .expect('Content-Type', /json/)   // ✅ Check content-type is JSON
    .expect(200);                     // ✅ Check status is OK
    expect(response.body).toBeDefined();
    expect(typeof response.body).toBe('object'); // ✅ Check it's parsed as JS object
  });

});

describe('AreaSeeds request', () => {
  it('Get an Area with Bins successfully', async () => {
    const response = await request(app)
    .get('/getLocationArea/?area=Basford')
    .expect('Content-Type', /json/)   // ✅ Check content-type is JSON
    .expect(200);                     // ✅ Check status is OK
    expect(response.body).toBeDefined();
    expect(typeof response.body).toBe('object'); // ✅ Check it's parsed as JS object
  });

});