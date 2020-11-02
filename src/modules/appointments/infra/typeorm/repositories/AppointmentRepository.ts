import { EntityRepository, Repository } from 'typeorm';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import Appointment from '../entities/Appointments';

@EntityRepository(Appointment)
class AppointmentRepository
  extends Repository<Appointment>
  implements IAppointmentRepository {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentRepository;
