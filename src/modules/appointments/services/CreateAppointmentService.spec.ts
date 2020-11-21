import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'
import CreateAppointmentService from './CreateAppointmentService';
import {expect, describe, it} from '@jest/globals';

describe('CreateAppoitment', () => {
  it('should be able to create a new appointment', async() => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '111'
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('111');
  })
})
