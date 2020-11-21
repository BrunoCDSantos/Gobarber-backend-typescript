import {uuid} from 'uuidv4';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../../infra/typeorm/entities/Appointments';

class AppointmentRepository implements IAppointmentRepository {

  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppoitment = this.appointments.find(
      appointment => appointment.date === date,
    );

    return findAppoitment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appoitment = new Appointment();

    Object.assign(appoitment, {id: uuid(), date, provider_id});

    this.appointments.push(appoitment);

    return appoitment;

  }
}

export default AppointmentRepository;
