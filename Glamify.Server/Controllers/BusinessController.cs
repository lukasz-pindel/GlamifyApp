﻿using Glamify.API.DTOs.BusinessDTOs;
using Glamify.Domain.Entities;
using Glamify.Domain.Enums;
using Glamify.Infrastructure.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Glamify.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessController : ControllerBase
    {
        private readonly AppDbContext _context;
        public BusinessController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Business
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Business>>> GetBusinesses([FromQuery]BusinessType? type)
        {
            var query = _context.Businesses.AsQueryable();

            if (type.HasValue)
            {
                query = query.Where(b => b.BusinessType == type.Value);
            }
            return await query.ToListAsync();
        }


        // GET: api/Business/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Business>> GetBusiness(int id)
        {
            var business = await _context.Businesses
                .Include(b => b.ServicesOffered)
                .Include(b => b.Appointments)
                .Include(b => b.Ratings)
                .Include(b => b.Employees)
                .FirstOrDefaultAsync(b => b.Id == id);

            if (business == null)
            {
                return NotFound();
            }

            return business;
        }

        // POST: api/Business
        [HttpPost]
        public async Task<ActionResult<Business>> CreateBusiness(CreateOrUpdateBusinessRequest request)
        {
            if (request.Id > 0)
            {
                var existingBusiness = await _context.Businesses.FindAsync(request.Id);
                if (existingBusiness == null)
                {
                    return NotFound($"Business with ID {request.Id} not found.");
                }

                existingBusiness.Name = request.Name;
                existingBusiness.Address = request.Address;
                existingBusiness.Phone = request.Phone;
                existingBusiness.Email = request.Email;
                existingBusiness.UserId = request.OwnerUserId;
                existingBusiness.BusinessType = request.BusinessType;

                _context.Businesses.Update(existingBusiness);
                await _context.SaveChangesAsync();

                return Ok(existingBusiness);
            }
            else
            {
                var user = await _context.Users.FindAsync(request.OwnerUserId);
                if (user == null)
                {
                    return NotFound($"User with ID {request.OwnerUserId} not found.");
                }

                var business = new Business
                {
                    Name = request.Name,
                    Address = request.Address,
                    Phone = request.Phone,
                    Email = request.Email,
                    UserId = request.OwnerUserId
                };

                _context.Businesses.Add(business);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetBusiness", new { id = business.Id }, business);
            }
        }

        // DELETE: api/Business/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusiness(int id)
        {
            var business = await _context.Businesses.FindAsync(id);
            if (business == null)
            {
                return NotFound();
            }

            _context.Businesses.Remove(business);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
