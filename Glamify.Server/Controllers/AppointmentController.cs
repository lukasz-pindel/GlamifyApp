namespace Glamify.API.Controllers
{
    using Glamify.API.DTOs.AppointmentDTOs;
    using Glamify.Domain.Entities;
    using Glamify.Domain.Enums;
    using Glamify.Infrastructure.Context;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppointmentController(AppDbContext context)
        {
           _context = context;
        }

        // GET: api/Appointment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments
                                 .Include(a => a.User)
                                 .Include(a => a.Location)
                                 .Include(a => a.Services)
                                 .Include(a => a.Employee)
                                 .ToListAsync();
        }

        // GET: api/Appointment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _context.Appointments
                                            .Include(a => a.User)
                                            .Include(a => a.Location)
                                            .Include(a => a.Services)
                                            .Include(a => a.Employee)
                                            .FirstOrDefaultAsync(a => a.Id == id);

            if (appointment == null)
            {
                return NotFound();
            }

            return appointment;
        }

        // POST: api/Appointment
        [HttpPost]
        public async Task<ActionResult<Appointment>> PostAppointment(CreateAppointmentRequest request)
        {
            var business = await _context.Businesses.FindAsync(request.LocationId);
            if (business == null)
            {
                return NotFound($"Business with ID {request.LocationId} not found.");
            }

            var services = new List<Service>();
            foreach (var serviceId in request.Services.Select(s => s.Id))
            {
                var service = await _context.Services.FindAsync(serviceId);
                if (service == null)
                {
                    return NotFound($"Service with ID {serviceId} not found.");
                }
                services.Add(service);
            }

            var appointment = new Appointment()
            {
                AppointmentTime = request.AppointmentTime,
                Services = services,
                Status = request.Status,
                Location = business,
                UserId = request.UserId,
            };

            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppointment", new { id = appointment.Id }, appointment);
        }

        // PUT: api/Appointment/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointment(int id, UpdateAppointmentRequest request)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment is null)
            {
                return NotFound();
            }

            appointment.AppointmentTime = request.AppointmentTime;
            appointment.Status = request.Status;

            _context.Entry(appointment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // PUT: api/Appointment/{id}
        [HttpPut("{id}/cancel")]
        public async Task<IActionResult> CancelAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment is null)
            {
                return NotFound();
            }
            appointment.Status = AppointmentStatus.Cancelled;

            _context.Entry(appointment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Appointment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound();
            }

            _context.Appointments.Remove(appointment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppointmentExists(int id)
        {
            return _context.Appointments.Any(e => e.Id == id);
        }
    }
}
